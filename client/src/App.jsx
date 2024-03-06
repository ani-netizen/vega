import React from "react";
import { Routes, Route } from "react-router-dom";
import CompanyProfiles from "./pages/CompanyProfiles";
import Resources from "./pages/Resources";
import Calendar from "./pages/Calendar";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import ContactUs from "./pages/Contactus";
import AboutUs from "./pages/AboutUs";
import CompanyDetails from "./pages/CompanyDetails";
import AuthOptions from "./pages/AuthOptions";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/ipc" element={<Calendar />} />
        <Route path="/cip" element={<CompanyProfiles />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/company/:id" element={<CompanyDetails />} />
        <Route path="/auth-options" element={<AuthOptions />} />
        <Route path="/pma" element={<Resources />} />
      </Routes>
    </div>
  );
}

export default App;
