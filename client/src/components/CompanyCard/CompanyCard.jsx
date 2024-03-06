import React from "react";
import { Link } from "react-router-dom";

function CompanyCard({ company }) {
  return (
    <Link to={`/${company._id}`}>
      <div class="w-full max-w-sm border hover:scale-105 duration-500 rounded-lg shadow bg-gray-800 border-gray-700 p-4">
        <div class="flex flex-col items-center">
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {company.name}
          </h5>
          <p class="text-sm text-gray-400 overflow-ellipsis">
            {company.description}
          </p>
          <div class="text-gray-400 mt-4 md:mt-6 text-sm">
            <p>
              <strong className="text-white">Job Roles:</strong>{" "}
              {company.jobRoles.join(", ")}
            </p>
            <p>
              <strong className="text-white">Eligibility Criteria:</strong>{" "}
              {company.eligibilityCriteria}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CompanyCard;
