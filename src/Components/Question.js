import React from 'react';
import Choices from "./Choices";
import ReactJson from "react-json-view";
export default function T({data, positionFrom1}) {
    return (
        <div>
            <h3>Question {positionFrom1}: {data.title}????</h3>
            <Choices data={data.choices}/>
            <ReactJson src={data.choices}  style={{textAlign:'left', backgroundColor:'lightGray'}}/>

        </div>
    );
}