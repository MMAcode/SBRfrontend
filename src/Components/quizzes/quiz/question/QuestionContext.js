import React from 'react';
import {questionContextSource} from "../../../../services/contextsService";
import Choices from "./Choices";
export default function QuestionContext({data}) {
const {question, setQuestion, questionPositionFrom0} = data;
console.log("DATAAA:",question);
    return (
        <questionContextSource.Provider value={{question, setQuestion, questionPositionFrom0}}>
            <h3 className="text-center">{questionPositionFrom0 + 1}) {data.title}????</h3>
            {data.choices && <Choices data={data.choices}/>}
        </questionContextSource.Provider>
    );
}