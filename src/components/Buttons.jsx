import React from "react";
import satData from "./satData.jsx";

const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div>
      {/* Use .map() to generate a button for each orbit type */}
      {displaySats.map((sat, id) => (
          <button onClick={() => filterByType(sat)} key={id}>
            {sat} Orbit
          </button>
      ))}
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div>
  );
};

export default Buttons;