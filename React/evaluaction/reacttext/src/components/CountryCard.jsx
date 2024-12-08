import React from "react";
import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  const { name, flags, population, region, capital } = country;

  return (
    <div className="card">
      <img src={flags.svg} alt={`${name.common} flag`} />
      <h3>{name.common}</h3>
      <p>Population: {population}</p>
      <p>Region: {region}</p>
      <p>Capital: {capital?.[0] || "N/A"}</p>
      <Link to={`/${name.common}`}>
        <button>More Details</button>
      </Link>
    </div>
  );
};

export default CountryCard;
