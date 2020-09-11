import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ARTICLES, SLIDES } from "./data";
import * as serviceWorker from "./serviceWorker";

const AppForArrayFunctions = () => {
  // let sortWithMostRecent = () => {
  //   let sortedArticles = [...articless].sort(
  //     (article1, article2) => new Date(article2.date) - new Date(article1.date)
  //   );
  //   console.log("sortedArticles", sortedArticles);

  //   setArticles(sortedArticles);
  //   console.log("state articles", articless);
  // };
  const onSortNumber = () => {
    let sortOutput = [...ARTICLES].sort((a, b) => b.upvotes - a.upvotes);
    console.log("sort by upvotes descending ", sortOutput);
  };
  const onSortDate = () => {
    let sortOutput = [...ARTICLES].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    console.log("sort by Date descending ", sortOutput);
  };
  const onSortString = () => {
    let sortOutput = [...ARTICLES].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    console.log("sort by title ascending", sortOutput);
  };

  const renderedArticles = ARTICLES.map((article, index) => {
    return (
      <div key={index}>
        <p>{article.title}</p>
        <p>{article.upvotes}</p>
        <p>{article.date}</p>
      </div>
    );
  });

  return (
    <div>
      <button onClick={onSortNumber}>SortWithNumber</button>
      <button onClick={onSortDate}>SortWithDate</button>
      <button onClick={onSortString}>SortWithString</button>
      <div> {renderedArticles}</div>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <>
      {/* <AppForArrayFunctions /> */}
      <App ARTICLES={ARTICLES} SLIDES={SLIDES} />
    </>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
