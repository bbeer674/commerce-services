module.exports = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (authHeader && authHeader === "Bearer faketoken_user1") {
    req.userId = 1;
    next();
  } else {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
