const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { findOne } = require("../models/userModel")

// @desc Register New User
// @route POST /api/users/register
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, photo } = req.body

  //validation
  if (!name || !email || !password) {
    res.status(400)
    throw new Error("Please provide all fields")
  }
  //check if already exist
  const userExist = await User.findOne({ email })
  if (userExist) {
    res.status(400)
    throw new Error("User already exist!")
  }
  //hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)
  //create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    photo,
  })
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      photo: user.photo,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error("Invalid user data")
  }
})

// @desc Authenticate User
// @route POST /api/users/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      photo: user.photo,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error("Invalid Credentials")
  }
})

// @desc Get the User
// @route GET /api/users/me
// @access Private
const getMe = asyncHandler(async (req, res) => {
  const { email } = req.body
  const user = await User.findOne({ email })
  if (user) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
    })
  }
})

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" })
}

module.exports = {
  registerUser,
  loginUser,
  getMe,
}
