import React from 'react';
import {firstCapital} from "../../../../../services/helperMethods";
import CorrectAnswer from "./CorrectAnswer";
import ReactJson from "react-json-view";
import {questionContextSource} from "../QuestionContext";
import EditorRouter from "../../../../EditorRouter";

export const choiceContextSource = React.createContext({});

export default function Choice({data:[data,choicePositionFrom0]}) {
    const [choice, setChoice] = React.useState(data);

    // fn. getAm... return Admin with props

    return (
        <div className="choice">
            <choiceContextSource.Provider value={[choice,choicePositionFrom0,setChoice]}>
            {/*<ReactJson src={data}  style={{textAlign:'left', backgroundColor:'lightGray'}}/>*/}
            {/*    <EditorRouter editor={Adminlw} notEditor={wef}/>*/}

            <button>{firstCapital(data.title)}</button>
            {data.correctAnswer != null && <CorrectAnswer/>}
            </choiceContextSource.Provider>
        </div>
    );
}