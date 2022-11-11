const mongoose = require('mongoose');

const User = new mongoose.Schema({
    Name : String,
    clgName : String,
    RollNo : Number
})


module.exports = mongoose.model('docker',User);