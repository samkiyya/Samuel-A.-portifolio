import nodeMailer from "nodemailer";
export const sendMail = async (options) => {
  try {
    const transporter = nodeMailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMPT_MAIL,
      to: options.email ? options.email : "samuelabera523@gmail.com",
      subject: options.subject,
      text: options.message,
    };
    await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error sending email:", error.message);
        console.log("Error stack trace:", error.stack);
        throw new Error("Failed to send email");
      }
      console.log("Email sent successfully");
    });
  } catch (error) {
    console.log("Error sending email:", error.message);
    console.log("Error stack trace:", error.stack);
    throw new Error("Failed to send email");
  }
};
