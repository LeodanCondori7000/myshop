import asyncHandler from "../middlewares/asyncHandler.js";
// import generateToken from '../utils/generateToken.js';
import User from "../models/userModel.js";

// @desc    Auth user & get token
// @route   POST /api/users/auth
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  // const { email, password } = req.body;

  // const user = await User.findOne({ email });

  // if (user && (await user.matchPassword(password))) {
  // generateToken(res, user._id);

  //   res.json({
  //     _id: user._id,
  //     name: user.name,
  //     email: user.email,
  //     isAdmin: user.isAdmin,
  //     // token: generateToken(user._id),
  //   });
  // } else {
  //   res.status(401);
  //   throw new Error('Invalid email or password');
  // }
  res.send("auth route");
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  // const { name, email, password } = req.body;

  // const user = await User.findOne({ email });

  // if (user) {
  //   res.status(400);
  //   throw new Error("User already exists");
  // }

  // const newUser = await User.create({
  //   name,
  //   email,
  //   password,
  // });

  // if (newUser) {
  //   generateToken(res, user._id);

  //   res.status(201).json({
  //     _id: newUser._id,
  //     name: newUser.name,
  //     email: newUser.email,
  //     isAdmin: newUser.isAdmin,
  //     // token: generateToken(newUser._id),
  //   });
  // } else {
  //   res.status(400);
  //   throw new Error("Invalid user data");
  // }

  res.send("register route");
});

// @desc    Logout user / clear cookie
// @route   POST /api/users/logout
// @access  Public
const logoutUser = (req, res) => {
  // res.clearCookie('jwt');
  // res.status(200).json({ message: 'Logged out successfully' });
  res.send("logout route");
};

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  // const user = await User.findById(req.user._id);

  // if (user) {
  //   res.json({
  //     _id: user._id,
  //     name: user.name,
  //     email: user.email,
  //     isAdmin: user.isAdmin,
  //   });
  // } else {
  //   res.status(404);
  //   throw new Error('User not found');
  // }

  res.send("profile route");
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  // const user = await User.findById(req.user._id);

  // if (user) {
  //   user.name = req.body.name || user.name;
  //   user.email = req.body.email || user.email;
  //   if (req.body.password) {
  //     user.password = req.body.password;
  //   }

  //   const updatedUser = await user.save();

  //   res.json({
  //     _id: updatedUser._id,
  //     name: updatedUser.name,
  //     email: updatedUser.email,
  //     isAdmin: updatedUser.isAdmin,
  //     // token: generateToken(updatedUser._id),
  //   });
  // } else {
  //   res.status(404);
  //   throw new Error('User not found');
  // }

  res.send("update profile route");
});

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  // const users = await User.find({});
  // res.json(users);

  res.send("get users route");
});

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  // const user = await User.findById(req.params.id);

  // if (user) {
  //   if (user.isAdmin) {
  //     res.status(400);
  //     throw new Error("Cannot delete admin user");
  //   }
  //   await User.deleteOne({ _id: user._id });
  //   res.json({ message: 'User removed' });
  // } else {
  //   res.status(404);
  //   throw new Error("User not found");
  // }

  res.send("delete user route");
});

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  // const user = await User.findById(req.params.id).select('-password');

  // if (user) {
  //   res.json(user);
  // } else {
  //   res.status(404);
  //   throw new Error("User not found");
  // }

  res.send("get user by id route");
});

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  // const user = await User.findById(req.params.id);

  // if (user) {
  //   user.name = req.body.name || user.name;
  //   user.email = req.body.email || user.email;
  //   user.isAdmin = Boolen(reqreq.body.isAdmin);

  //   const updatedUser = await user.save();

  //   res.json({
  //     _id: updatedUser._id,
  //     name: updatedUser.name,
  //     email: updatedUser.email,
  //     isAdmin: updatedUser.isAdmin,
  //   });
  // } else {
  //   res.status(404);
  //   throw new Error("User not found");
  // }

  res.send("update user route");
});

export {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
  logoutUser,
};
