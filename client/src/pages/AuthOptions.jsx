// import React from "react";

// const AuthOptions = () => {
//   const handleAdminLogin = () => {
//     // Handle admin login logic here
//     console.log("Admin login clicked");
//   };

//   const handleStudentLogin = () => {
//     // Handle student login logic here
//     console.log("Student login clicked");
//   };

//   return (
//     <div className="bg-gray-100 p-4 w-100 h-screen flex justify-center items-center rounded-md shadow-md">
//       <div>
//         <h2 className="text-xl font-bold mb-4">Choose your login option</h2>
//         <div className="flex flex-col md:flex-row md:space-x-4">
//           <button
//             onClick={handleAdminLogin}
//             className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
//           >
//             Admin Login
//           </button>
//           <button
//             onClick={handleStudentLogin}
//             className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md"
//           >
//             Student Login
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthOptions;


import React from "react";

const AuthOptions = () => {
  const handleAdminLogin = () => {
    // Handle admin login logic here
    console.log("Admin login clicked");
  };

  const handleStudentLogin = () => {
    // Handle student login logic here
    console.log("Student login clicked");
  };

  return (
    <div className="flex w-100 justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-5xl font-bold text-center text-gray-700">Login As</h1>
        <div className="flex flex-col space-y-4">
          <button
            onClick={handleAdminLogin}
            className="flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
          >
            {/* Replace with your preferred admin icon */}
            <span className="mr-2 text-xl">{/* Admin Icon */}</span>
            Admin Login
          </button>
          <button
            onClick={handleStudentLogin}
            className="flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md"
          >
            {/* Replace with your preferred student icon */}
            <span className="mr-2 text-xl">{/* Student Icon */}</span>
            Student Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthOptions;
