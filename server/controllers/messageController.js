import { Message } from "../models/messageSchema.js";
import ErrorHandler from "../middlewares/error.js";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import sendMail from "../utils/sendMail.js"; // Assuming sendMail is already implemented

// Send message and handle mail notification
export const sendMessage = catchAsyncErrors(async (req, res, next) => {
  const { senderName, subject, message, senderEmail } = req.body;

  if (!senderName || !subject || !message || !senderEmail) {
    return next(new ErrorHandler("Please fill the entire form!", 400));
  }

  try {
    // Save the message to the database
    const savedMessage = await Message.create({ senderName, subject, message });

    // Send the email (assuming sendMail is set up)
    await sendMail({
      email: senderEmail,
      subject: `Message from ${senderName}: ${subject}`,
      message: `Message: ${message}\nSender Name: ${senderName}\nEmail: ${senderEmail}`,
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully and email notification sent",
      savedMessage,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return next(new ErrorHandler("Failed to send email", 500));
  }
});
