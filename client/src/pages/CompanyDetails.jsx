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
    <div>
      
        <div>
          <h1>{company?.name}</h1>
          <p>{company?.description}</p>
          <p>Job Roles: {company?.jobRoles?.join(", ")}</p>
          <p>Eligibility Criteria: {company?.eligibilityCriteria}</p>
          <p>Placement Statistics:</p>
          <ul>
            <li>Total Offers: {company?.placementStatistics?.totalOffers}</li>
            <li>Average Salary: {company?.placementStatistics?.averageSalary}</li>
            <li>Highest Package: {company?.placementStatistics?.highestPackage}</li>
          </ul>
        </div>
      
    </div>
  );
};

export default CompanyDetails;
