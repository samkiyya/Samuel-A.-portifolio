export const generateToken = (user, message, statusCode, res) => {
  const token = user.generateJsonWebToken();
  const expireDays = process.env.COOKIE_EXPIRE
    ? parseInt(process.env.COOKIE_EXPIRE, 10)
    : 1;

  res
    .status(statusCode)
    .cookie("token", token, {
      expires: new Date(Date.now() + expireDays * 24 * 60 * 60 * 1000),
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    })
    .json({
      success: true,
      message,
      user,
      token,
    });
};
