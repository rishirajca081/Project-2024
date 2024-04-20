const mongoose = require('mongoose');

const CommonUser = new mongoose.Schema({

  batchYear: {
    type: Number,
    required: true
  },
  email:{
      type: String,
      required: true
    },
});

module.exports = mongoose.model('CommonUser', CommonUser);
