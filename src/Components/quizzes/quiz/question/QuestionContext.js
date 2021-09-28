import React, {useState} from 'react';
import {questionContextSource} from "../../../../services/contextsService";
import Choices from "./Choices";

export default function QuestionContext({data}) {
const {question, questionPositionFrom0} = data;
// const [question, setQuestion] = useState(q);
// console.log("DATAAA:",question);
    return (
        <questionContextSource.Provider value={{question, questionPositionFrom0}}>
            <h3 className="text-center">{questionPositionFrom0 + 1}) {data.question.title}????</h3>
            {data.question.choices && <Choices data={data.question.choices}/>}
        </questionContextSource.Provider>
    );
}