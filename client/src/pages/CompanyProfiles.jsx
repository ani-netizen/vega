import React from "react";
import CompanyCard from "../components/CompanyCard/CompanyCard";

const CompanyProfiles = () => {
  // Placeholder data (replace with actual data)
  const companies = [
    {
      id: 1,
      name: "ABC Corporation",
      jobRoles: ["Software Engineer", "Data Analyst"],
      eligibilityCriteria: "CGPA > 8.0",
      placementStatistics: "80% placement rate",
    },
    {
      id: 2,
      name: "XYZ Tech Solutions",
      jobRoles: ["Web Developer", "UX Designer"],
      eligibilityCriteria: "CGPA > 7.5",
      placementStatistics: "75% placement rate",
    },
    {
      id: 3,
      name: "XYZ Tech Solutions",
      jobRoles: ["Web Developer", "UX Designer"],
      eligibilityCriteria: "CGPA > 7.5",
      placementStatistics: "75% placement rate",
    },
    // Add more companies as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Company Information Portal
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {companies.map((company, index) => (
          <div key={index}>
            <CompanyCard company={company} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyProfiles;
