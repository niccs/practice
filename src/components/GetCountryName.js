import React, { useState, useEffect } from "react";
import axios from "axios";

const GetCountryName = ({ code }) => {
  const [countryName, setCountryName] = useState("");
  const [countryCode, setCountryCode] = useState(code || "in");

  useEffect(() => {
    fetchCountryName();
  }, []);

  const fetchFromAPIAxios = async (pageNumber) => {
    let res = await axios.get(
      `https://jsonmock.hackerrank.com/api/countries?page=${pageNumber}`
    );
    return res.data;
  };
  const fetchFromAPI = async (pageNumber) => {
    let res = await fetch(
      `https://jsonmock.hackerrank.com/api/countries?page=${pageNumber}`
    );
    return res.json();
  };
  const matchCountryInDataArray = (detailedCountryData) => {
    const country = detailedCountryData.find(
      (countryInfo) =>
        countryCode.toUpperCase() === countryInfo.alpha2Code.toUpperCase()
    );
    if (country) {
      setCountryName(country.name);
      return country.name;
    }
  };

  const fetchCountryName = async () => {
    setCountryName("");

    let totalPages = 1;

    for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
      let data = await fetchFromAPIAxios(pageNum);

      totalPages = data.total_pages;
      let isMatched = matchCountryInDataArray(data.data);
      if (isMatched) {
        return;
      }
    }
  };

  return (
    <div>
      <input
        value={countryCode}
        onChange={(e) => setCountryCode(e.target.value)}
      ></input>
      <button onClick={fetchCountryName}>Get Country Name</button>
      <p>Country name is {countryName}</p>
    </div>
  );
};

export default GetCountryName;
