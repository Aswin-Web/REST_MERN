const User = require("../models/user");
const mongoose = require("mongoose");

const Homepage = async (req, res) => {
  const users = await User.find();
  res.json(users);
};
const addUser = (req, res) => {};
const deleteUser = async (req, res) => {
  const id = req.params.id;
  await User.findByIdAndDelete(id);
  res.send("success");
};
const updateUser = async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);

  (user.name = req.body.name),
    (user.email = req.body.email),
    (user.phone = req.body.phone),
    await user.save();
    res.send("success");};

const postAdd = (req, res) => {
  console.log(req.body.name);
  const { name, email, phone } = req.body;
  const newUser = {
    name: name,
    email: email,
    phone: phone,
  };
  User.create(newUser);
  res.send("success")
};

module.exports = {
  Homepage,
  addUser,
  deleteUser,
  updateUser,
  postAdd,
};
