import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-8">Welcome to jobSync</h1>
        <p className="text-xl mb-8">
          A platform that empowers students to manage their placement opportunities and connect with companies seamlessly.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="/cip" className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md">
            Explore Companies
          </a>
          <a href="/pma" className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">
            Get Placement Resources
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div className="bg-white rounded-md shadow-md p-4">
          <h3 className="text-lg font-medium mb-2">Upcoming Placements</h3>
          <ul className="list-disc space-y-2">
            <li>Company A - Software Engineer (Internship) - Deadline: May 31, 2024</li>
            <li>Company B - Data Analyst (Full-time) - Deadline: June 15, 2024</li>
          </ul>
        </div>
        <div className="bg-white rounded-md shadow-md p-4">
          <h3 className="text-lg font-medium mb-2">Tips for Successful Placements</h3>
          <ul className="list-disc space-y-2">
            <li>Prepare well for technical and aptitude tests.</li>
            <li>Practice your communication and soft skills.</li>
            <li>Research the company and role thoroughly.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
