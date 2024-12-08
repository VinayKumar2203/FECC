import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CountryDetails = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res = await axios.get(
          `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
        );
        setCountry(res.data[0]);
      } catch (error) {
        console.error("Error fetching country details:", error);
      }
    };
    fetchCountry();
  }, [countryName]);

  if (!country) return <p>Loading...</p>;

  const {
    name,
    flags,
    population,
    region,
    subregion,
    currencies,
    languages,
    borders,
  } = country;

  return (
    <div className="country-details">
      <img src={flags.svg} alt={name.common} />
      <h1>{name.common}</h1>
      <p>Native Name: {name.nativeName?.[Object.keys(name.nativeName)[0]]?.common}</p>
      <p>Sub Region: {subregion}</p>
      <p>Population: {population}</p>
      <p>Region: {region}</p>
      <p>Currency: {Object.values(currencies)[0]?.name}</p>
      <p>Languages: {Object.values(languages).join(", ")}</p>
      <p>Border Countries: {borders?.join(", ") || "None"}</p>
    </div>
  );
};

export default CountryDetails;
