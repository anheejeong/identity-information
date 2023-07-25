// $ npm start

import React, { useState } from "react";
import NewInfo from "./components/NewInformation/NewInfo";
import Information from "./components/InformationList/Information";

const Data = [
  {
    id: 'e1',
    name: 'heejeong',
    age: 24
  },
  {
    id: 'e2',
    name: 'jeongho',
    age: 18
  }
];

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
      <Information informData={informData} />
    </div>
  );
}

export default App;
