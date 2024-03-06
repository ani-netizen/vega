import React from "react";

const ResourceCard = ({ title, description, tags, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        <h5 className="text-xl font-medium mb-2">{title}</h5>
        <p className="text-gray-700 mb-4">{description}</p>
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
  const resources = [
    {
      title: "Interview Experience: Software Engineer at Google",
      description:
        "Insights and tips from a recent interview experience, including technical questions and behavioral questions.",
      tags: ["Software Engineer", "Google", "Interview Tips"],
      link: "https://example.com/interview-experience-google",
    },
    {
      title: "Study Guide: Data Structures and Algorithms",
      description:
        "Comprehensive guide covering essential data structures and algorithms relevant to various coding interviews.",
      tags: ["Data Structures", "Algorithms", "Coding Interviews"],
      link: "https://example.com/data-structures-algorithms-guide",
    },
    {
      // Add more resources here
      title: "Interviews Experience: Software Engineer at Google",
      description:
        "Insights and tips from a recent interview experience, including technical questions and behavioral questions.",
      tags: ["Software Engineer", "Google", "Interview Tips"],
      link: "https://example.com/interview-experience-google",
    },
  ];

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
