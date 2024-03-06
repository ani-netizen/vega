import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const StudentSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String },
    isAdmin: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

StudentSchema.methods.generateJwtToken = function () {
  return jwt.sign({ user: this._id.toString() }, "Vega");
};

StudentSchema.statics.findByEmail = async ({ email }) => {
  const checkUserByEmail = await StudentModel.findOne({ email });

  if (checkUserByEmail) {
    throw new Error("User already exists");
  }

  return false;
};

StudentSchema.statics.findByEmailAndPassword = async ({ email, password }) => {
  const user = await StudentModel.findOne({ email });
  if (!user) {
    throw new Error("User does not exist");
  }

  const doesPasswordMatch = bcrypt.compare(password, user.password);

  if (!doesPasswordMatch) {
    throw new Error("Invalid Password");
  }

  return user;
};

StudentSchema.pre("save", function (next) {
  const user = this;

  if (!user.isModified("password")) {
    return next();
  }

  bcrypt.genSalt(8, (error, salt) => {
    if (error) {
      return next(error);
    }

    bcrypt.hash(user.password, salt, (error, hash) => {
      if (error) {
        return next(error);
      }

      user.password = hash;
      return next();
    });
  });
});

export const StudentModel = mongoose.model("students", StudentSchema);
