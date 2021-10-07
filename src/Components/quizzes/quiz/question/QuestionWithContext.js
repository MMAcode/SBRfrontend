import React from 'react';
import {questionContextSource} from "../../../../services/contextsService";
import Question from "./Question";
export default function QuestionWithContext({question, positionInArray}) {
    // const [question, setQuestion] = React.useState(data);

    return (
        <questionContextSource.Provider value={{question, positionFrom0:positionInArray}}>
           <Question/>
        </questionContextSource.Provider>
    );
}