import React, { useEffect, useState } from "react";
import axios from "axios";
import CompanyCard from "../components/CompanyCard/CompanyCard";

const CompanyProfiles = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8080/company`,
      });

      setCompanies(response.data.companies);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {companies?.map((company, index) => (
          <div key={index}>
            <CompanyCard company={company} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyProfiles;
