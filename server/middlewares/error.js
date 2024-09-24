class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}
export const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;

  // Handle MongoDB duplicate key error
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0]; // Get the field that caused the duplicate error
    const message = `Duplicate value for ${field}: ${err.keyValue[field]}`;
    err = new ErrorHandler(message, 400);
  }

  // Handle invalid JWT error
  if (err.name === "JsonWebTokenError") {
    const message = "Json Web Token is invalid, Try again!";
    err = new ErrorHandler(message, 400);
  }

  // Handle expired JWT error
  if (err.name === "TokenExpiredError") {
    const message = "Json Web Token is expired, Try again!";
    err = new ErrorHandler(message, 400);
  }

  // Handle Mongoose cast error (invalid ObjectId)
  if (err.name === "CastError") {
    const message = `Invalid ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  // Create a comprehensive error message
  const errorMessage = err.errors
    ? Object.values(err.errors)
        .map((error) => error.message)
        .join(" ")
    : err.message;

  return res.status(err.statusCode).json({
    success: false,
    message: errorMessage,
  });
};
export default ErrorHandler;
