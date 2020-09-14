import React from "react";
import "./App.css";
import Slides from "./components/Slides";
import Articles from "./components/Articles";
import NotesApp from "./components/NotesApp";
import Search from "./components/Search";
import GetCountryName from "./components/GetCountryName";
import DrawnFootballMatches from "./components/DrawnFootballMatches";
import Dropdown from "./components/Dropdown";
import PostList from "./components/PostList";

function App({ ARTICLES, SLIDES }) {
  return (
    <div className="App">
      {/* <Slides slides={SLIDES} /> */}
      {/* <Articles articles={ARTICLES} /> */}
      <NotesApp />
      {/* <Search /> */}
      {/* <GetCountryName /> */}
      {/* <DrawnFootballMatches /> */}
      {/* <Dropdown /> */}
      {/* <PostList /> */}
    </div>
  );
}

export default App;
