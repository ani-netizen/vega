import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    user: { type: mongoose.Types.ObjectId, ref: "Users" },
    orderDetails: [
      {
        food: { type: mongoose.Types.ObjectId, ref: "Foods" },
        quantity: { type: Number, required: true },
        paymonde: { type: String, requird: true },
        status: { type: String, default: "Placed" },
        paymentDetails: {
          itemTotal: { type: Number, required: true },
          promo: { type: Number, required: true },
          tax: { type: Number, required: true },
          razorpayPaymentId: { type: String, requird: true },
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const CompanyModel = mongoose.model("Company", CompanySchema);
