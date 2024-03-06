import React, { useEffect, useState } from "react";
import axios from "axios";
const ResourceCard = ({ title, description, tags, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="p-4">
        <h5 className="text-xl font-medium mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="text-gray-700 mb-4 mb-3 text-gray-500 dark:text-gray-400">{description}</p>
        <div className="flex items-center mb-2">
          {tags?.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-2 py-1 mr-2 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <a href={link} target="_blank" rel="noreferrer noopener" className="text-indigo-500 hover:text-indigo-700">
          View Resource
        </a>
      </div>
    </div>
  );
};

function Resources() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8080/resource`,
      });

      setResources(response.data.resources);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Preparation Resources</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {resources.map((resource) => (
          <ResourceCard key={resource.title} {...resource} />
        ))}
      </div>
    </div>
  );
}

export default Resources;
