import React, { useEffect, useState } from "react";

const SortFilterControls = ({ setFilterRegion, setSortPopulation }) => {
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    const fetchRegions = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      const uniqueRegions = [...new Set(data.map((country) => country.region))];
      setRegions(uniqueRegions.filter(Boolean));
    };
    fetchRegions();
  }, []);

  return (
    <div className="controls">
      <select onChange={(e) => setFilterRegion(e.target.value)}>
        <option value="">All Regions</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
      <button onClick={() => setSortPopulation((prev) => !prev)}>
        Toggle Sort by Population
      </button>
    </div>
  );
};

export default SortFilterControls;
