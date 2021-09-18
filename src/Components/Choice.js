import React from 'react';
import {firstCapital} from "../services/helperMethods";
import CorrectAnswer from "./CorrectAnswer";
import ReactJson from "react-json-view";

export default function Choice({data:[data,choicePositionFrom0]}) {
    return (
        <div style={{

            flex: '1 1 0',
            textAlign:'center'
        }}
        className="m-2 p-2"
        >
            {/*<ReactJson src={data}  style={{textAlign:'left', backgroundColor:'lightGray'}}/>*/}
            <button
                className="m-0"
                style={{
                    backgroundColor:'yellow',
                    width:'100%'
                }}
            >
                {firstCapital(data.title)}
            </button>
            {data.correctAnswer != null && <CorrectAnswer data={[data, choicePositionFrom0]}/>}
        </div>
    );
}