import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CompanyDetails = () => {
  const [company, setCompany] = useState({});
  const { id } = useParams(); // Access the id parameter from the URL
  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const response = await axios({
            method: "GET",
            url: `http://localhost:8080/company/${id}`,
          });
        setCompany(response.data.companies);
      } catch (error) {
        console.error("Error fetching company details:", error);
      }
    };

    fetchCompany();
  }, [id]);

  return (
    <div className="container mx-auto px-4">
      <div className="md:flex md:justify-center">
        <div className="md:w-1/2">
          <div className="bg-white shadow-md rounded-lg p-8 mb-4">
            <h1 className="text-3xl font-bold mb-4">{company?.name}</h1>
            <p className="text-gray-700 mb-4">{company?.description}</p>
            <div className="mb-4">
              <p className="text-gray-700 font-semibold">Job Roles:</p>
              <p>{company?.jobRoles?.join(", ")}</p>
            </div>
            <div className="mb-4">
              <p className="text-gray-700 font-semibold">Eligibility Criteria:</p>
              <p>{company?.eligibilityCriteria}</p>
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Placement Statistics:</p>
              <ul>
                <li>Total Offers: {company?.placementStatistics?.totalOffers}</li>
                <li>Average Salary: {company?.placementStatistics?.averageSalary}</li>
                <li>Highest Package: {company?.placementStatistics?.highestPackage}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
