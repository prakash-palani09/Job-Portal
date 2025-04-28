const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./Routes/auth');  // Import the auth routes

const app = express();
app.use(cors());
app.use(express.json());  

app.use('/api/auth', authRoutes);  // Example: POST /api/auth/register, POST /api/auth/login

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/job_portal', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
