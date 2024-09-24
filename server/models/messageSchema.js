import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  senderName: {
    type: String,
    required: [true, "Name Is Required!"],
    minLength: [2, "Name Must Contain At Least 2 Characters!"],
  },
  senderEmail: {
    type: String,
    required: [true, "Email Is Required!"],
  },
  subject: {
    type: String,
    required: [true, "Subject Is Required!"],
    minLength: [2, "Subject Must Contain At Least 2 Characters!"],
  },
  message: {
    type: String,
    required: [true, "Message Is Required!"],
    minLength: [2, "Message Must Contain At Least 2 Characters!"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Message = mongoose.model("Message", messageSchema);
