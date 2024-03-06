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
    <div className="h-full grid grid-rows-1 bg-gray-100 rounded-md shadow-md">
      <div className="p-4 flex flex-col space-y-2 justify-center items-center">
        <h1 className="text-2xl font-bold">{company?.name}</h1>
        <p className="text-gray-600">{company?.description}</p>
        <p className="font-bold">Job Roles: {company?.jobRoles?.join(", ")}</p>
        <p className="font-bold">Eligibility Criteria: {company?.eligibilityCriteria}</p>
        <p className="font-bold">Placement Statistics:</p>
        <ul className="list-disc space-y-1 ml-4">
          <li>Total Offers: {company?.placementStatistics?.totalOffers}</li>
          <li>Average Salary: {company?.placementStatistics?.averageSalary}</li>
          <li>Highest Package: {company?.placementStatistics?.highestPackage}</li>
        </ul>
      </div>
    </div>
  );
};

export default CompanyDetails;
