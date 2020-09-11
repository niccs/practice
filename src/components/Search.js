import React, { useState } from "react";

const Search = () => {
  const [term, setTerm] = useState("");
  return (
    <div>
      <label> Using a Search</label>
      <input value={term} onChange={(e) => setTerm(e.target.value)}></input>
      {console.log(term)}
    </div>
  );
};

export default Search;
