import React from 'react';
import {questionContextSource} from "../../../../services/contextsService";
import Question2 from "./Question2";
export default function QuestionWithContext2({question, positionInArray}) {
    // const [question, setQuestion] = React.useState(data);

    return (
        <questionContextSource.Provider value={{question, positionFrom0:positionInArray}}>
           <Question2/>
        </questionContextSource.Provider>
    );
}