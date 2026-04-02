const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// 1. Middleware (Order is critical!)
app.use(cors());
app.use(express.json()); 

// 2. MongoDB Connection
mongoose.set('bufferCommands', false);
const mongoURI = "mongodb+srv://carollaptop330_db_user:CarolHub2026@cluster0.nrjkcba.mongodb.net/voluntierDB?retryWrites=true&w=majority";

mongoose.connect(mongoURI)
  .then(() => console.log("✅ SUCCESS: Connected to MongoDB!"))
  .catch(err => console.error("❌ MONGO ERROR:", err));

// 3. Link the Auth Routes
const authRoute = require('./routes/auth');
app.use('/api/auth', authRoute); 

// Root test route
app.get("/", (req, res) => res.send("Server is running!"));

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server started on port ${PORT}`));