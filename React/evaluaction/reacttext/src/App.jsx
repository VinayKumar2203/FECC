import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CountryDetails from "./pages/CountryDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:countryName" element={<CountryDetails />} />
    </Routes>
  );
};

export default App;
