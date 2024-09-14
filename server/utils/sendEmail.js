import nodeMailer from "nodemailer";
export const sendMail = async ({
  from = process.env.SMPT_MAIL,
  email,
  subject,
  message,
}) => {
  try {
    const transporter = nodeMailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      secure: process.env.MAILTRAP_PORT === "465",
      // service: process.env.SMPT_SERVICE,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
      },
    });

    const mailOptions = {
      from,
      to: email,
      subject,
      text: message,
    };
    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully");
  } catch (error) {
    console.log("Error sending email:", error.message);
    console.log("Error stack trace:", error.stack);
    throw new Error("Failed to send email");
  }
};
