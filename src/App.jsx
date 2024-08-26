import Banner from "./components/Banner";
import Buttons from "./components/Buttons";
import Table from "./components/Table";
import React, { useState } from "react";
import satData from "./components/satData.jsx"; 


function App() {
 const [sat, setSat] = useState(satData);
 const displaySats = [...new Set(satData.map((data) => data.orbitType))];

 const filterByType = (currentType) => {
  console.log("Filtering for type:", currentType);
  const filteredSats = satData.filter((data) => data.orbitType === currentType);
  console.log("Filtered satallites:", filteredSats);
  setSat(filteredSats);
 };
 
  return (
    <div>
      <Banner/>
      <Buttons 
      filterByType={filterByType}
      setSat={setSat}
      displaySats={displaySats} />
      <Table sat={sat}/>
    </div>
  );
}

export default App;