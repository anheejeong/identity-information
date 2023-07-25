import React, { useState } from "react";
import './InfoForm.css';

const InfoForm = (props) => {
    const [enteredName, setName] = useState('');
    const [enteredAge, setAge] = useState('');

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setAge(event.target.value)
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const information = {
            name: enteredName,
            age: +enteredAge
        }
        props.onSaveData(information);
        setName('');
        setAge('');
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="info-form">
                    <div className="info-form__name">
                        <label>Username</label>
                        <input type="text" value={enteredName} onChange={nameChangeHandler} />
                    </div>
                    <div className="info-form__age">
                        <label>Age(Years)</label>
                        <input type="number" min="0" value={enteredAge} onChange={ageChangeHandler} />
                    </div>
                </div>
                <button type="submit">Add User</button>
            </form>
        </div>
    );
}

export default InfoForm;