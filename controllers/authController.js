const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const Reader = require("./../models/readerModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("../utils/appError");

const createToken = (id) => {
  return jwt.sign({ id: id }, "my-super-secret-string-is-superb", {
    expiresIn: "1d",
  });
};

const createAndSendToken = (newReader, statusCode, res) => {
  const token = createToken(newReader._id);
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

exports.signup = catchAsync(async (req, res, next) => {
  const newReader = await Reader.create({
    name: req.body.name,
    email: req.body.email,
    active: req.body.active,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  });

  createAndSendToken(newReader, 201, res);
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password)
    return next(new AppError("Please provide an email and a password", 400));

  const reader = await Reader.findOne({ email: email }).select("+password");
  if (!reader || !(await reader.ifCorrectPassword(password, reader.password)))
    return next(new AppError("Incorrect email or password", 400));

  createAndSendToken(reader, 201, res);
});

exports.protect = catchAsync(async (req, res, next) => {
  //GETTING TOKEN AND CHECKING IF ITS THERE
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token)
    return next(
      new AppError(
        "Please login to continue.If you do not have an account please signup.",
        400
      )
    );

  // VERIFY THE TOKEN
  const decoded = await promisify(jwt.verify)(
    token,
    "my-super-secret-string-is-superb"
  );

  //CHECK IF USER STILL EXISTS
  const freshUser = await Reader.findById(decoded.id);
  if (!freshUser) return next(new AppError("User no longer exists", 400));

  //GRANT ACCESS
  req.reader = freshUser;
  next();
});
