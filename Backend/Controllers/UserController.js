const User = require('../Models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRounds = 10;

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '100d' });
};

exports.createUser = async (req, res) => {
  const { name, email, password, bio } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user with hashed password
    const user = await User.create({ name, email, password: hashedPassword, bio });
    // console.log(user)

    // Generate token
    console.log(user.ID)
    const token = createToken(user._id);
    

    // Set user session
    // req.session.user = { name: user.name, email: user.email, bio: user.bio };

    // Respond with token and user email
    res.status(200).json({ email: user.email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



exports.getAllUsers = async (req, res) => {
  try {
    // Fetch only the names of users
    const users = await User.findAll({
      attributes: ['name']
    });

    // Extract the names from the user objects
    const userNames = users.map(user => user.name);

    res.status(200).json({ userNames });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};


exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password, bio } = req.body;

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.name = name;
    user.email = email;
    user.password = password;
    user.bio = bio;

    await user.save();

    res.status(200).json({ user });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};


exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    await user.destroy();

    res.status(204).send(); // No content to send back
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Find the user by email
    const user = await User.findOne({ where: { email } });

    // If user not found, return error
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // If email and password are correct, generate JWT token
    const token = jwt.sign({ userId: user.id }, 'dharmi', { expiresIn: '1h' });

    // Respond with token
    res.status(200).json({ token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// exports.searchUser = async (req, res) => {
//   try {
//     const { searchTerm } = req.query;

//     const users = await User.findAll({
//       where: {
//         [Sequelize.Op.or]: [
//           { name: { [Sequelize.Op.like]: `%${searchTerm}%` } },
//           { email: { [Sequelize.Op.like]: `%${searchTerm}%` } }
//         ]
//       }
//     });

//     res.status(200).json({ users });
//   } catch (error) {
//     console.error('Error searching users:', error);
//     res.status(500).json({ message: 'Server Error' });
//   }
// };
