import React, { useState } from "react";

function Slides({ slides }) {
  const [key, setKey] = useState(0);
  let onNextPressed = () => {
    if (key < slides.length - 1) setKey(key + 1);
  };
  let onPevPressed = () => {
    if (key > 0) setKey(key - 1);
  };
  let onRestartPressed = () => {
    setKey(0);
  };

  //const objSlides = { ...slides };
  const objSlides = slides.reduce((result, item, index) => {
    //result[item.title] = item; //a, b, c
    result[index] = item; //a, b, c
    return result;
  }, {});
  console.log("heyo", objSlides);

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          disabled={key === 0}
          onClick={onRestartPressed}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small"
          disabled={key === 0}
          onClick={onPevPressed}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="small"
          disabled={key === slides.length - 1}
          onClick={onNextPressed}
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{objSlides[key].title}</h1>
        <p data-testid="text">{objSlides[key].text}</p>
      </div>
    </div>
  );
}

export default Slides;
