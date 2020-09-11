import React from "react";
import "./App.css";
import Slides from "./components/Slides";
import Articles from "./components/Articles";
import NotesApp from "./components/NotesApp";
import Search from "./components/Search";
import GetCountryName from "./components/GetCountryName";

function App({ ARTICLES, SLIDES }) {
  return (
    <div className="App">
      {/* <Slides slides={SLIDES} /> */}
      {/* <Articles articles={ARTICLES} /> */}
      <NotesApp />
      {/* <Search /> */}
      {/* <GetCountryName /> */}
    </div>
  );
}

export default App;
