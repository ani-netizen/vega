import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  jobRoles: {
    type: [String],
    required: true,
  },
  description:{
    type: [String],
    required: true,
  },
  eligibilityCriteria: {
    type: String,
    required: true,
  },
  placementStatistics: {
    totalOffers: {
      type: Number,
      required: true
    },
    averageSalary: {
      type: String,
      required: true
    },
    highestPackage: {
      type: String,
      required: true
  }
  }
});

export const CompanyModel = mongoose.model("Company", companySchema);
