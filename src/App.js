import React, { useState } from "react";
import NewInfo from "./components/NewInformation/NewInfo";

const Data = [];

const App = () => {
  const [informData, setInformData] = useState(Data);

  const addNewDataHandler = (newData) => {
    console.log(newData);
    setInformData((prevData) => {
      return [newData, ...prevData];
    })
  }

  return (
    <div>
      <NewInfo addNewData={addNewDataHandler} />
    </div>
  );
}

export default App;
