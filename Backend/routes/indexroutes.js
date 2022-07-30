const express = require("express");
const {
  Homepage,
  addUser,
  deleteUser,
  updateUser,
  postAdd
} = require("../controllers/indexcontrolles");

const router = express.Router();

router.get("/", Homepage);

router.get("/add", addUser);

router.patch("/update/:id", updateUser)

router.delete("/delete/:id", deleteUser)

router.post("/add",postAdd)

module.exports = router;
