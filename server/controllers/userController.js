const userModel = require('../models/userModel.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { sendEmail } = require('../utils/sendEmail.js');

const genrateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' }); 
}

//Register user
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userExists = await userModel.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }
    
    //hashedPassword
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //new user
    const newUser = new userModel({ name, email, password: hashedPassword });
    await newUser.save();
    
    if(newUser) {
      const OTP = Math.floor(100000 + Math.random() * 900000) // Generate a 6-digit OTP

      const message = `Welcome to ShopNow ${name}!,
        Your OTP for registration is: ${OTP}. 
        Please use this to verify your account.`;

        await sendEmail(email, 'Welcome to ShopNow - OTP Verification', message);
        res.status(201).json({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            role: newUser.role,
            token: genrateToken(newUser._id),
        })
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    }else {
      res.status(400).json({ message: 'Invalid user data' });
    }
    }catch(err) {
      res.status(500).json({ message: 'Error registering user', error: err.message });
    }  
};

//Login User
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: genrateToken(user._id),
        });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in user', error: error.message });
    }
};

//Get All Users
const getUsers = async (req, res) => {
  // Implementation for retrieving user information
  try {
    const users = await userModel.find({}).select('-password'); // Exclude password from the response
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving users', error: error.message });
  }
};

module.exports = { registerUser, loginUser, getUsers }