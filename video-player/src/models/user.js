import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({

  name: String,

  email: {
    type:String,
    unique: true,
  },

  password: {
    type: String,
  },
    
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: "user",
  },
  
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});

export default mongoose.models.User || mongoose.model("User", userSchema);