// controllers/contactController.js
import { Message } from "../models/messageSchema.js";
import ErrorHandler from "../middlewares/error.js";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";

// Create and send a message (with Mailtrap email)
export const sendMessage = catchAsyncErrors(async (req, res, next) => {
  const { senderName, subject, message, email } = req.body;
  if (!senderName || !subject || !message || !email) {
    return next(new ErrorHandler("Please Fill Full Form!", 400));
  }

  try {
    // Save the message to the database
    const data = await Message.create({ senderName, subject, message });
    // Send the message as an email using Mailtrap

    await sendMail({
      email,
      subject: `New message from ${senderName}: ${subject}`,
      message: `Message: ${message}\nFrom: ${senderName} (${email})`,
    });
    res.status(201).json({
      success: true,
      message: "Message sent successfully and email notification sent",
      data,
    });
  } catch (error) {
    console.error("Error sending  email:", error);
    return next(new ErrorHandler("Failed to send email", 500));
  }
});

// Delete a message
export const deleteMessage = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const message = await Message.findById(id);
  if (!message) {
    return next(new ErrorHandler("Message not found or already deleted.", 404));
  }
  await message.deleteOne();
  res.status(201).json({
    success: true,
    message: "Message successfully deleted",
  });
});

// Retrieve all messages
export const getAllMessages = catchAsyncErrors(async (req, res, next) => {
  const messages = await Message.find();
  res.status(201).json({
    success: true,
    messages,
  });
});
