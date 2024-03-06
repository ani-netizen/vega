import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import CompanyCard from "../components/CompanyCard/CompanyCard";
import { Dialog, Transition } from "@headlessui/react";

const CompanyProfiles = () => {
  const [companies, setCompanies] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    jobRoles: "",
    description: "",
    eligibilityCriteria: "",
    placementStatistics: ""
  });

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

  const handleSubmit = async (e) => {
    console.log(formData);
    // e.preventDefault();
    e.preventDefault();
    try {
      await axios({
        method : "POST",
        url : `http://localhost:8080/company/add`,
        data : formData
      }); 
      setIsOpen(false);
      // Reset form data after successful submission
      setFormData({
        name: "",
        jobRoles: "",
        description: "",
        eligibilityCriteria: "",
        placementStatistics: ""
      });
    } catch (error) {
      console.error("Error adding company:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5"
      >
        Add Company
      </button> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {companies?.map((company, index) => (
          <div key={index}>
            <CompanyCard company={company} />
          </div>
        ))}
      </div>
     
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          onClose={setIsOpen}
        >
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter company name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="jobRoles" className="block text-gray-700 font-bold mb-2">
                Job Roles
              </label>
              <input
                type="text"
                id="jobRoles"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter job roles (comma-separated)"
                value={formData.jobRoles}
                onChange={(e) => setFormData({ ...formData, jobRoles: e.target.value.split(",") })}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                Description
              </label>
              <textarea
                id="description"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter company description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="eligibilityCriteria" className="block text-gray-700 font-bold mb-2">
                Eligibility Criteria
              </label>
              <input
                type="text"
                id="eligibilityCriteria"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter eligibility criteria"
                value={formData.eligibilityCriteria}
                onChange={(e) => setFormData({ ...formData, eligibilityCriteria: e.target.value })}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="totalOffers" className="block text-gray-700 font-bold mb-2">
                Total Offers
              </label>
              <input
                type="number"
                id="totalOffers"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter total offers"
                value={formData.placementStatistics.totalOffers}
                onChange={(e) => setFormData({ 
                  ...formData, 
                  placementStatistics: { 
                    ...formData.placementStatistics, 
                    totalOffers: parseInt(e.target.value)
                  } 
                })}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="averageSalary" className="block text-gray-700 font-bold mb-2">
                Average Salary
              </label>
              <input
                type="text"
                id="averageSalary"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter average salary"
                value={formData.placementStatistics.averageSalary}
                onChange={(e) => setFormData({ 
                  ...formData, 
                  placementStatistics: { 
                    ...formData.placementStatistics, 
                    averageSalary: e.target.value
                  } 
                })}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="highestPackage" className="block text-gray-700 font-bold mb-2">
                Highest Package
              </label>
              <input
                type="text"
                id="highestPackage"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter highest package"
                value={formData.placementStatistics.highestPackage}
                onChange={(e) => setFormData({ 
                  ...formData, 
                  placementStatistics: { 
                    ...formData.placementStatistics, 
                    highestPackage: e.target.value
                  } 
                })}
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <button onClick={handleSubmit}
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Add Company
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Cancel
              </button>
            </div>
          </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-2xl  p-4 py-4 px-6 rounded-full absolute flex items-center justify-center bottom-5 right-5"
        style={{ position: "fixed" }}
      >
        +
      </button>
    </div>
  );
};

export default CompanyProfiles;
