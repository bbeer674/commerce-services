exports.validateRegister = (req, res, next) => {
  const { email, password, name, dateOfBirth, subscribeNewsletter } = req.body;

  if (!email || !password || !name) {
    return res
      .status(400)
      .json({ message: "Email, Password, and Name are required." });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email format." });
  }

  if (
    password.length < 8 ||
    !/[0-9]/.test(password) ||
    !/[a-zA-Z]/.test(password)
  ) {
    return res.status(400).json({
      message:
        "Password must be at least 8 characters, containing letters and numbers.",
    });
  }

  if (dateOfBirth && isNaN(Date.parse(dateOfBirth))) {
    return res.status(400).json({ message: "Invalid date of birth." });
  }

  if (
    subscribeNewsletter !== undefined &&
    typeof subscribeNewsletter !== "boolean"
  ) {
    return res
      .status(400)
      .json({ message: "subscribeNewsletter must be boolean." });
  }

  next();
};

exports.validateEditProfile = (req, res, next) => {
  const { dateOfBirth, gender, address, subscribeNewsletter } = req.body;

  if (dateOfBirth && isNaN(Date.parse(dateOfBirth))) {
    return res.status(400).json({ message: "Invalid date of birth format." });
  }

  if (gender && !["male", "female", "other"].includes(gender.toLowerCase())) {
    return res
      .status(400)
      .json({ message: "Gender must be male, female, or other." });
  }

  if (address && address.length > 200) {
    return res
      .status(400)
      .json({ message: "Address is too long (max 200 characters)." });
  }

  if (
    subscribeNewsletter !== undefined &&
    typeof subscribeNewsletter !== "boolean"
  ) {
    return res
      .status(400)
      .json({ message: "subscribeNewsletter must be boolean." });
  }

  next();
};

exports.validateChangePassword = (req, res, next) => {
  const { currentPassword, newPassword, confirmPassword } = req.body;

  if (!currentPassword || !newPassword || !confirmPassword) {
    return res
      .status(400)
      .json({ message: "All password fields are required." });
  }

  if (
    newPassword.length < 8 ||
    !/[0-9]/.test(newPassword) ||
    !/[a-zA-Z]/.test(newPassword)
  ) {
    return res
      .status(400)
      .json({
        message:
          "New password must be at least 8 characters, containing letters and numbers.",
      });
  }

  if (newPassword !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match." });
  }

  next();
};
