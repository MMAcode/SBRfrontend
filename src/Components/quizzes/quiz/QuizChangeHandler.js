import React, {useEffect} from 'react';
import {quizContextSource} from "../../../services/contextsService";
export default function T(props) {
    // const {quiz, quizPositionFrom0, setQuiz} = React.useContext(quizContextSource);
    const quizContext = React.useContext(quizContextSource);

    useEffect(() => {
        console.log(`quiz ${quizContext.positionFrom0 + 1} changed:`, quizContext.quiz)
        if (quizContext.quizChanged ===null) {
            quizContext.setQuizChanged(false);
        } else if (quizContext.quizChanged ==false){quizContext.setQuizChanged(true);}
    }, [quizContext.quiz])

    useEffect(() => {
        console.log(`quiz ${quizContext.positionFrom0 + 1} change registered:`, quizContext.quizChanged)
    }, [quizContext.quizChanged])

    return (

        <div style={{display:"none"}}>

        </div>
    );
}