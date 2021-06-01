// external imports
const express = require("express");
const { check } = require("express-validator");

// internal imports
const {
  getUsers,
  addUser,
  removeUser,
} = require("../controller/usersController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const avatarUpload = require("../middlewares/users/avatarUpload");
const {
  addUserValidators,
  addUserValidationHandler,
} = require("../middlewares/users/userValidators");

const { checkLogin, requireRole } = require("../middlewares/common/checkLogin");

const router = express.Router();

// users page
router.get(
  "/",
  decorateHtmlResponse("Users"),
  checkLogin,
  requireRole(["admin"]),
  getUsers
);

// add user
router.post(
  "/",
  checkLogin,
  requireRole(["admin"]),
  avatarUpload,
  addUserValidators,
  addUserValidationHandler,
  addUser
);

// remove user
router.delete("/:id", checkLogin, requireRole(["admin"]), removeUser);

module.exports = router;
