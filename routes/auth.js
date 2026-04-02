const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

// REGISTER ROUTE: http://localhost:5000/api/auth/register
router.post('/register', async (req, res) => {
  console.log("📥 Registration request for:", req.body.email);
  try {
    const { name, email, password, role } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role: role || 'volunteer'
    });

    await newUser.save();
    console.log("✨ User saved to DB!");
    res.status(201).json({ message: "Registration Successful" });
  } catch (err) {
    console.error("❌ Registration Error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// LOGIN ROUTE: http://localhost:5000/api/auth/login
router.post('/login', async (req, res) => {
  console.log("📥 Login request for:", req.body.email);
  try {
    const { email, password } = req.body;

    // 1. Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // 2. Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // 3. Send Success Response
    console.log(`✅ Login successful: ${user.email}`);
    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (err) {
    console.error("❌ Login Error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;