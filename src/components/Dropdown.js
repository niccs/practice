import React, { useState, useRef } from "react";

const Dropdown = ({ dropdownOptions }) => {
  const [currentValue, setCurrentValue] = useState("Orange");

  let nameRef = useRef();
  const renderedOptions = dropdownOptions.map((option) => {
    return (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    );
  });

  const submitButton = () => {
    console.log("selected value is using useRef", nameRef.current.value);
  };

  return (
    <div>
      <label>Select a color</label>
      <select
        onChange={(e) => setCurrentValue(e.target.value)}
        defaultValue={currentValue}
        ref={nameRef}
      >
        {renderedOptions}
        {console.log("selected value is", currentValue)}
      </select>
      <button type="button" onClick={submitButton}>
        Submit
      </button>
    </div>
  );
};

Dropdown.defaultProps = {
  dropdownOptions: [
    {
      label: "Red color",
      value: "Red",
    },
    {
      label: "Blue color",
      value: "Blue",
    },
    {
      label: "Green color",
      value: "Green",
    },
    {
      label: "Yellow color",
      value: "Yellow",
    },
    {
      label: "Orange color",
      value: "Orange",
    },
  ],
};

export default Dropdown;
