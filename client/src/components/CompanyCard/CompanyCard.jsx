import React from "react";
import { Link } from "react-router-dom";

function CompanyCard({ company }) {
  return (
    <Link to={`/${company._id}`}>
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 shadow overflow-hidden">
        <div className="flex flex-col  p-4">
          <h5 className="mb-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white items-center flex flex-col">
            {company.name}
          </h5>
          <p className="mb-3 text-gray-500 dark:text-gray-300 mt-4"><strong className="p-4 text-blue-600 rounded-ss-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500">Description:</strong>{company.description}</p>
          <div className="text-sm text-gray-500">
            <p className="mb-4 mb-3 text-gray-500 dark:text-gray-300">
              <strong className="p-4 text-blue-600 rounded-ss-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500">Job Roles:</strong>
              {company.jobRoles.join(", ")}
            </p>
            <p className="mb-3 text-gray-500 dark:text-gray-300">
              <strong className="p-4 text-blue-600 rounded-ss-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500">Eligibility Criteria:</strong>
              {company.eligibilityCriteria}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CompanyCard;
