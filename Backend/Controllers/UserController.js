const User = require('../Models/User');

exports.createUser = async (req, res) => {
  try {
    const { name, email, password, bio } = req.body;
    console.log('Bio:', bio); // Log the bio field
    if (!name || !email || !password) {
      return res.status(400).json({error: 'name, email and password required'});
    }

    // Create the user
    const user = await User.create({ name, email, password, bio });

    res.status(201).json({ user });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Server Error' });
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


