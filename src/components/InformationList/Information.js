import React from "react";
import './Information.css';
import Card from "../UI/Card";
import InformList from "./InformList";

const Information = (props) => {
    console.log(props.informData)

    return (
        <Card className='information'>
            <ul className='inform-list'>
                {props.informData && props.informData.map((data) => (
                    <InformList
                        key={data.id} // 아이템 식별 버그 fix
                        name={data.name}
                        age={data.age}
                    />
                ))}
            </ul>
        </Card>
    );
}

export default Information;