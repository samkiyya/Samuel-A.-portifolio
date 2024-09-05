// controllers/contactController.js
import { Message } from "../models/messageSchema.js";
import ErrorHandler from "../middlewares/error.js";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";

// Create and send a message (with Mailtrap email)
export const sendMessage = catchAsyncErrors(async (req, res, next) => {
  const { senderName, subject, message } = req.body;
  if (!senderName || !subject || !message) {
    return next(new ErrorHandler("Please Fill Full Form!", 400));
  }

  // Save the message to the database
  const data = await Message.create({ senderName, subject, message });

  // Send the message as an email using Mailtrap
  try {
    await sendMail(senderName, process.env.SENDER_EMAIL, message);
    res.status(201).json({
      success: true,
      message: "Message Sent and Email Sent",
      data,
    });
  } catch (error) {
    return next(new ErrorHandler("Failed to send email", 500));
  }
});

// Delete a message
export const deleteMessage = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const message = await Message.findById(id);
  if (!message) {
    return next(new ErrorHandler("Message Already Deleted!", 400));
  }
  await message.deleteOne();
  res.status(201).json({
    success: true,
    message: "Message Deleted",
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
