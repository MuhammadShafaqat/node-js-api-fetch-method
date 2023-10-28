const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
// require('dotenv').config();

// Now, you can access your environment variables like this:
const port =  3000;


// Use these variables in your application as needed.
app.use(express.json());


//Routes 
const authRoutes = require('./routers/auth');
const UserModel = require('./models/authModel');
// const userRoutes = require('./routers/user')
//
app.use('/auth', authRoutes);
// app.use('/users', userRoutes)
app.post('/register', async (req, res) => {
    try {
      const user = new UserModel(req.body);
      await user.save();
      res.json(user);
    } catch (error) {
      // Mongoose validation error
      if (error.name === 'ValidationError') {
        res.status(400).json({ message: 'Validation failed', errors: error.errors });
      } else {
        res.status(500).json({ message: 'User registration failed', error: error.message });
      }
    }
  });
  

mongoose.connect('mongodb://127.0.0.1:27017/teacher-attendence').then(()=>{
    console.log('successfully connected with database')
}).catch((err)=>{
    console.error('error in connecting with database',err)
})

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  });

app.listen(port, ()=> console.log(`The server is running on port ${port}`))

