import React, { useState, useEffect } from "react";
import axios from "axios";

const DrawnFootballMatches = ({ inputYear }) => {
  const [drawnMatches, setDrawnMatches] = useState(0);
  const [year, setYear] = useState(inputYear || 2011);

  useEffect(() => {
    fetchDrawnMatches();
  }, []);

  const fetchFromAPIAxios = async (noOfGoals) => {
    let res = await axios.get(
      "https://jsonmock.hackerrank.com/api/football_matches?" +
        new URLSearchParams({
          year: year,
          team1goals: noOfGoals,
          team2goals: noOfGoals,
        })
    );
    return res.data;
  };
  const fetchFromAPI = async (noOfGoals) => {
    let res = await fetch(
      "https://jsonmock.hackerrank.com/api/football_matches?" +
        new URLSearchParams({
          year: year,
          team1goals: noOfGoals,
          team2goals: noOfGoals,
        })
    );

    return res.json();
  };

  const fetchDrawnMatches = async () => {
    setDrawnMatches();
    let total = 0;
    for (let goals = 0; goals < 10; goals++) {
      let data = await fetchFromAPIAxios(goals);
      total = total + data.total;
    }
    setDrawnMatches(total);
  };
  return (
    <div>
      <label>Th number of drawn matches in year</label>
      <input value={year} onChange={(e) => setYear(e.target.value)} />
      <button onClick={fetchDrawnMatches}>Get Drawn Matches</button>
      <p>
        Drawn Matches in {year} are {drawnMatches}
      </p>
    </div>
  );
};

export default DrawnFootballMatches;
