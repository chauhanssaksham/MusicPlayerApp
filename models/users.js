const mongoose = require('mongoose');
const userchema = new mongoose.Schema({
    name : {
        firstName : {
            type: String
        },
        lastName: {
            type: String
        },
        required: true
    },
    userName : {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    }
});
const Users = mongoose.model('Users', userSchema);
module.exports = Users;