import React from "react";

function CompanyCard({ company }) {
  return (
    <div
      className={`company-profile rounded overflow-hidden shadow-md bg-white p-4 transform hover:scale-105`}
    >
      <h3 className="text-lg font-medium mb-2">{company.name}</h3>
      <p>
        <strong>Job Roles:</strong> {company.jobRoles.join(", ")}
      </p>
      <p>
        <strong>Eligibility Criteria:</strong> {company.eligibilityCriteria}
      </p>
      <p>
        <strong>Placement Statistics:</strong> {company.placementStatistics}
      </p>
    </div>
  );
}

export default CompanyCard;
