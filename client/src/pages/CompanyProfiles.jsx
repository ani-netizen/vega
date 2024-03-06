import React from "react";
import CompanyCard from "../components/CompanyCard/CompanyCard";

const CompanyProfiles = () => {
  // Placeholder data (replace with actual data)
  const companies = [
    {
      name: "ABC Corporation",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quidem nobis saepe culpa enim expedita esse ut odit voluptatum harum in temporibus quod voluptates ea quis consequuntur, aliquam quaerat accusamus.",
      jobRoles: ["Software Engineer", "Data Analyst"],
      eligibilityCriteria: "CGPA > 8.0",
      placementStatistics: "80% placement rate",
    },
    {
      name: "XYZ Tech Solutions",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quidem nobis saepe culpa enim expedita esse ut odit voluptatum harum in temporibus quod voluptates ea quis consequuntur, aliquam quaerat accusamus.",
      jobRoles: ["Web Developer", "UX Designer"],
      eligibilityCriteria: "CGPA > 7.5",
      placementStatistics: "75% placement rate",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
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
