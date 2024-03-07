import React, { useState } from "react";

const AuthOptions = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleAdminLogin = () => {
    setIsAdmin(true);
    setShowLoginModal(true);
  };

  const handleStudentLogin = () => {
    setIsAdmin(false);
    setShowLoginModal(true);
  };
  const handleAdminLoginLogic = async (e) => {
        e.preventDefault();
        try {
          let res = await fetch("http://localhost:8080/admin/sign-in", {
            method: "POST",
            body: JSON.stringify(
              { credentials:
                {
                email: email,
                password: password
              }
              }
            ),
          });
          let resJson = await res.json();
          if (resJson.success) {
            const token= resJson.token
            console.log(resJson.token);//debugging
            sessionStorage.setItem('token', token);
          } else {
            console.log("Some error occured during admin login");
          }
        } catch (err) {
          console.log(err);
        }
  }
  const handleStudentLoginLogic = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:8080/student/sign-in", {
        method: "POST",
        body: JSON.stringify(
          { credentials:
            {
            email: email,
            password: password
          }
          }
        ),
      });
      let resJson = await res.json();
      if (resJson.success) {
        const token= resJson.token
        console.log(resJson.token);//debugging
        sessionStorage.setItem('token', token);
      } else {
        console.log("Some error occured during student login");
      }
    } catch (err) {
      console.log(err);
    }
}
  const handleSignup=()=>{
    setShowLoginModal(false);
    setShowSignupModal(true);
  }
  const handleSignupLogic =  async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:8080/student/sign-up", {
        method: "POST",
        body: JSON.stringify(
          { credentials:
            {
            name:name,
            email: email,
            password: password,
          }
          }
        ),
      });
      let resJson = await res.json();
      if (resJson.success) {
        const token= resJson.token
        console.log(resJson.token);//debugging
        sessionStorage.setItem('token', token);
      } else {
        console.log("Some error occured during student reg");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleCloseModals = () => {
    setShowLoginModal(false);
    setShowSignupModal(false);
  };

  return (
    <div className="flex w-full justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-5xl font-bold text-center text-gray-700">
          Login As
        </h1>
        <div className="flex flex-col space-y-4">
          <button
            onClick={handleAdminLogin}
            className="flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
          >
            <span className="mr-2 text-xl">{/* Admin Icon */}</span>
            Admin Login
          </button>
          <button
            onClick={handleStudentLogin}
            className="flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md"
          >
            <span className="mr-2 text-xl">{/* Student Icon */}</span>
            Student Login
          </button>
        </div>
      </div>
      {showLoginModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-md w-96">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form onSubmit={isAdmin ? handleAdminLoginLogic : handleStudentLoginLogic}>
              {/* Add email and password fields */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md mr-5"
              >
                Login
              </button>
              <button
                onClick={handleCloseModals}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md mt-4"
              >
                Close
              </button>
              <p className="text-gray-700">
                Don't have an account?{" "}
                <button
                  onClick={handleSignup}
                  className="text-blue-500 hover:underline mt-5"
                >
                  Signup
                </button>
              </p>
            </form>
          </div>
        </div>
      )}
      {showSignupModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-md w-96">
            <h2 className="text-2xl font-bold mb-4">Signup</h2>
            <form onSubmit={handleSignupLogic}>
              {/* Add name, email, and password fields */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
                  placeholder="Enter your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md mr-2"
              >
                Register
              </button>
              <button
                onClick={handleCloseModals}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthOptions;
