const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    required: true
  },
  LastName: {
    type: String,
    required: true
  },
  collegeRegno: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  batchYear: {
    type: Number,
    required: true
  },
  email:{
      type: String,
      required: true
    },
  company: {
    type: String,
    default: "None"
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: true
  }
});

module.exports = mongoose.model('User', userSchema);
