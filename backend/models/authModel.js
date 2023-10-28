const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    // id:Schema.Types.ObjectId,
    username:{
        type: String,
    },
    email:{
        type: String,
        unique: true,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    },
    password:{
        type: String,      
        minlength: 4,
    }
});

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel