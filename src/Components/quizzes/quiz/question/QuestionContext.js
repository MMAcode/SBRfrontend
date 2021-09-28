import React, {useContext, useState} from 'react';
import {questionContextSource} from "../../../../services/contextsService";
import Choices from "./Choices";
import Question2 from "./Question2";

export default function QuestionContext({data}) {

    const [questionData, positionInArray] = data;
    const [question, setQuestion] = useState(questionData);
    return (
        <questionContextSource.Provider value={{question, setQuestion, positionInArray}}>
            <Question2/>
        </questionContextSource.Provider>
    );
}