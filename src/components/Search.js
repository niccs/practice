import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [drawnMatches, setDrawnMatches] = useState(0);

  useEffect(() => {
    const search = async () => {
      setDrawnMatches();
      let total = 0;
      for (let goals = 0; goals < 10; goals++) {
        let data = await fetchFromAPIAxios(goals);
        total = total + data.total;
      }
      setDrawnMatches(total);
    };
    let timerId;
    if (term) {
      timerId = setTimeout(() => {
        search();
      }, 500);
    }
    return () => clearTimeout(timerId);
  }, [term]);

  const fetchFromAPIAxios = async (noOfGoals) => {
    let res = await axios.get(
      "https://jsonmock.hackerrank.com/api/football_matches",
      {
        params: {
          year: term,
          team1goals: noOfGoals,
          team2goals: noOfGoals,
        },
      }
    );
    return res.data;
  };

  return (
    <div>
      <label> Using a Search</label>
      <input value={term} onChange={(e) => setTerm(e.target.value)}></input>
      <p>No of drawn matches are {drawnMatches}</p>
    </div>
  );
};

export default Search;
