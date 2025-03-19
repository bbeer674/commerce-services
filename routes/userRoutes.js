const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const validator = require("../utils/validators");
const userController = require("../controllers/userController");

router.post("/register", validator.validateRegister, userController.register);

router.get("/profile", auth, userController.getProfile);
router.put(
  "/profile",
  auth,
  validator.validateEditProfile,
  userController.editProfile
);
router.delete("/profile", auth, userController.deleteAccount);

router.put(
  "/change-password",
  auth,
  validator.validateChangePassword,
  userController.changePassword
);

module.exports = router;
