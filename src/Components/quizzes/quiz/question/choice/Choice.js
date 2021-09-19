import React from 'react';
import {firstCapital} from "../../../../../services/helperMethods";
import CorrectAnswer from "./CorrectAnswer";
import ReactJson from "react-json-view";
import {questionContextSource} from "../../Question";

export const choiceContextSource = React.createContext({});

export default function Choice({data:[data,choicePositionFrom0]}) {
    const [choice, setChoice] = React.useState(data);

    return (
        <div style={{

            flex: '1 1 0',
            textAlign:'center'
        }}
        className="m-2 p-2"
        >
            <choiceContextSource.Provider value={[choice,choicePositionFrom0,setChoice]}>

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
            {data.correctAnswer != null && <CorrectAnswer/>}
            </choiceContextSource.Provider>
        </div>
    );
}