import React from "react";
import './NewInfo.css';
import InfoForm from "./InfoForm";

const NewInfo = (props) => {
    const saveDataHandler = (enteredData) => {
        const newData = {
            ...enteredData,
            id: Math.random().toString()
        }
        props.addNewData(newData);
    }

    return (
        <div className='new-info'>
            {/* input에 뭔가 써저 있다면 */}
            <InfoForm onSaveData={saveDataHandler} />
        </div>
    );
}

export default NewInfo;