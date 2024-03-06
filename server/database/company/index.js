import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  jobRoles: {
    type: [String],
    required: true,
  },
  eligibilityCriteria: {
    type: String,
    required: true,
  },
  placementStatistics: {
    type: String,
    required: true,
  },
});

export const CompanyModel = mongoose.model("Company", companySchema);
