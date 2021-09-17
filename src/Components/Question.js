import React from 'react';
import Choices from "./Choices";
import ReactJson from "react-json-view";
export default function T({data, positionFrom1}) {
    return (
        <div
            style={{
                // border:'1px dotted gray',
                backgroundColor:"lightGray",
                padding:'1rem',
                margin:'1rem 0'
            }}
        >
            <h3><strong>Question {positionFrom1}:</strong> </h3>
            <h3 className="text-center">{data.title}????</h3>
            { data.choices && <Choices data={data.choices}/>}
            {/*<ReactJson src={data}  style={{textAlign:'left', backgroundColor:'lightGray'}}/>*/}

        </div>
    );
}