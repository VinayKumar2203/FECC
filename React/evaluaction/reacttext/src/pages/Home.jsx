import  { useEffect, useState } from "react";
import axios from "axios";
import CountryCard from "../components/CountryCard";
import SortFilterControls from "../components/SortFilterControls";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [filterRegion, setFilterRegion] = useState("");
  const [sortPopulation, setSortPopulation] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(res.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  const filteredAndSortedCountries = countries
    .filter((c) => (filterRegion ? c.region === filterRegion : true))
    .sort((a, b) =>
      sortPopulation ? b.population - a.population : a.population - b.population
    );

  return (
    <div className="container">
      <SortFilterControls
        setFilterRegion={setFilterRegion}
        setSortPopulation={setSortPopulation}
      />
      <div className="grid">
        {filteredAndSortedCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Home;
