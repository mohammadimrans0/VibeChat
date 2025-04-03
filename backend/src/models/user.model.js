import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlegth: 6,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fullName: {
    type: String,
    default: "Add Your Name",
  },
  profilePicture: {
    type: String,
    default: "https://res.cloudinary.com/dzuro3ezl/image/upload/v1739781463/easygrocery/user/avatar_qpkqzn.png",
  },
},
{timestamps: true}
);


const User = mongoose.model("User", userSchema);
export default User;