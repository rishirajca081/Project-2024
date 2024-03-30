const User = require('../models/User');

//to get user profile
exports.getUserProfile = async (req, res) => {
  try {
    const userId = req.params.userId;
    console.log(userId);
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};


// to edit user profile
exports.editUserProfile = async (req, res) => {
  try {
    const userId = req.params.userId;
    //console.log('User ID:', userId);

    const {company, phoneNumber, email } = req.body;
    

    if (!company || !phoneNumber || !email) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    const user = await User.findByIdAndUpdate(
      userId,
      {company, phoneNumber, email},
      { new: true }   
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user); // If update is successful return the updated user profile .. 
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};



// to get all users data with limited fields
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, 'FirstName LastName company gender batchYear').exec();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// API to get a single user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).exec();
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


