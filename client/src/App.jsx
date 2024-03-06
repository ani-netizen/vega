import React from "react";
import { Routes, Route } from "react-router-dom";
import CompanyProfiles from "./pages/CompanyProfiles";
import Resources from "./pages/Resources";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<CompanyProfiles />} />
        {/* <Route path="/ipc" element={Calendar} /> */}
        <Route path="/cip" element={<CompanyProfiles />} />
        <Route path="/pma" element={<Resources />} />
      </Routes>
    </div>
  );
}

export default App;
