const users = require("../data/users");

exports.register = (req, res) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).json({ message: "User registered", user: newUser });
};

exports.getProfile = (req, res) => {
  const user = users.find((u) => u.id === req.userId);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
};

exports.editProfile = (req, res) => {
  const user = users.find((u) => u.id === req.userId);
  if (!user) return res.status(404).json({ message: "User not found" });

  const { dateOfBirth, gender, address, subscribeNewsletter } = req.body;
  user.dateOfBirth = dateOfBirth || user.dateOfBirth;
  user.gender = gender || user.gender;
  user.address = address || user.address;
  user.subscribeNewsletter = subscribeNewsletter ?? user.subscribeNewsletter;

  res.json({ message: "Profile updated", user });
};

exports.deleteAccount = (req, res) => {
  const index = users.findIndex((u) => u.id === req.userId);
  if (index === -1) return res.status(404).json({ message: "User not found" });

  users.splice(index, 1);
  res.json({ message: "Account deleted" });
};

exports.changePassword = (req, res) => {
  const user = users.find((u) => u.id === req.userId);
  if (!user) return res.status(404).json({ message: "User not found" });

  const { currentPassword, newPassword, confirmPassword } = req.body;

  if (!currentPassword || !newPassword || !confirmPassword) {
    return res
      .status(400)
      .json({ message: "All password fields are required." });
  }

  if (user.password !== currentPassword) {
    return res.status(400).json({ message: "Current password incorrect" });
  }

  if (newPassword !== confirmPassword) {
    return res.status(400).json({ message: "New passwords do not match." });
  }

  user.password = newPassword;
  res.json({ message: "Password updated successfully" });
};
