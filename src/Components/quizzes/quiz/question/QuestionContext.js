import React, {useContext, useEffect} from 'react';
import Choices from "./Choices";
import {Draggable} from "react-beautiful-dnd";
import {questionContextSource, quizContextSource} from "../../../../services/contextsService";
import EditQuestionOptions from "./EditQuestionOptions";
import QuestionDraggable from "./QuestionDraggable";


export default function QuestionContext({data, positionInArray}) {
    const [question, setQuestion] = React.useState(data);

    return (
        // <questionContextSource.Provider value={{question, setQuestion, positionFrom0:question.positionFrom0}}>
        <questionContextSource.Provider value={{question, setQuestion, positionFrom0:positionInArray}}>
            <QuestionDraggable/>
        </questionContextSource.Provider>
    );
}