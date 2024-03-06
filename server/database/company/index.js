const mongoose = require('mongoose');

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

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
