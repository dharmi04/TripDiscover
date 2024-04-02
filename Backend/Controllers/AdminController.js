const Admin = require('../Models/Admin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
    const { email, name, password, department, contact, personal_mail_id } = req.body;
  
    try {
        if (!email.endsWith('@tripdiscover.co.in')) {
            return res.status(400).json({ error: 'Incorrect  Email ' });
          }
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create admin in the database
      const admin = await Admin.create({ email, name, password: hashedPassword, department, contact, personal_mail_id });
  
      res.status(201).json({ adminId: admin.admin_id });
    } catch (error) {
      console.error('Error signing up admin:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };


  exports.login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Retrieve admin from database by email
      if (!email.endsWith('@tripdiscover.co.in')) {
        return res.status(400).json({ error: 'Invalid email ' });
      }
  
      const admin = await Admin.findOne({ where: { email } });
  
      if (!admin) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      // Compare hashed password
      const isPasswordValid = await bcrypt.compare(password, admin.password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      // Generate JWT token
      const token = jwt.sign({ adminId: admin.admin_id, email: admin.email }, 'your_secret_key', { expiresIn: '1h' });
  
      res.status(200).json({ token });
    } catch (error) {
      console.error('Error logging in admin:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

