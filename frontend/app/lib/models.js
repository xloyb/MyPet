import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

const petSchema = new mongoose.Schema(
  {
    breed: {
        type: String,
        required: true,
       
      },
    name: {
      type: String,
      required: true,
     
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    img: {
      type: String,
    },
    age: {
      type: String,
    },
  },
  { timestamps: true }
);


const adoptionRequestSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    pet: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Pet',
      required: true
    },
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending'
    },
    message: {
      type: String
    }
  },
  { timestamps: true }
);

export const AdoptionRequest = mongoose.models.AdoptionRequest || mongoose.model("AdoptionRequest", adoptionRequestSchema);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Pet = mongoose.models.Pet || mongoose.model("Pet", petSchema);