const jwt = require("jsonwebtoken");

const createToken = (id, exp) => {
  return jwt.sign({ id: id }, "my-super-secret-string-is-superb", {
    expiresIn: exp,
  });
};

exports.createAndSendToken = (newReader, statusCode, res) => {
  const token = createToken(newReader._id, process.env.JWT_TOKEN_EXPIRES_IN);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  res.cookie("jwt", token, cookieOptions);

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      reader: newReader,
    },
  });
};

exports.createAndSendLogoutToken = (
  newReader,
  statusCode,
  res,
  specialMessage
) => {
  const token = createToken(newReader._id, 1);
  const cookieOptions = {
    expiresIn: 1,
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  res.cookie("jwt", token, cookieOptions);

  res.status(statusCode).json({
    status: "success",
    token,
    message: specialMessage ? specialMessage : "Successfully logged out",
  });
};
