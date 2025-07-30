import User from "../models/user.model.js";
import Message from "../models/message.model.js";
import cloudinary from "../lib/cloudinary.js";
import { getReceiverSocketId, io } from "../lib/socket.js";

export const getUsersSidebar = async (req, res) => {
  try {
    const loggedInUser = req.user._id; // Assuming user is set in the request by middleware
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUser },
    }).select("-password");
    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error("Error fetching users sidebar:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getMessages = async (req, res) => {
  const { id: receiverId } = req.params;
  const myId = req.user._id; // Assuming user is set in the request by middleware
  try {
    const messages = await Message.find({
      $or: [
        { senderId: myId, receiverId },
        { senderId: receiverId, receiverId: myId },
      ],
    });
    res.status(200).json(messages);

    //Use socket.io for realtime functionality
  } catch (error) {
    console.error("Error fetching messages:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const sendMessages = async (req, res) => {
  try {
    const { id: receiverId } = req.params;
    const myId = req.user._id;
    const { text, image } = req.body;
    let imageURL;
    if (image) {
      const uploadResponse = await cloudinary.uploader.upload(image);
      imageURL = uploadResponse.secure_url; // Get the secure URL of the uploaded image
    }
    const newMessage = new Message({
      senderId: myId,
      receiverId,
      text,
      image: imageURL,
    });
    await newMessage.save();
    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.status(200).json(newMessage);
  } catch (error) {
    console.error("Error sending message:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
