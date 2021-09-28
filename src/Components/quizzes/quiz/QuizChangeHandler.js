import React, {useEffect, useState} from 'react';
import {quizContextSource} from "../../../services/contextsService";
import {
    questionsNeedReordering,
    refreshPositionNumbersOnSortedQuestions,
    sortQuestionsByPositions
} from "../../../services/helperMethods";
export default function T(props) {
    const {quiz, setQuiz, quizChanged, setQuizChanged, positionFrom0}= React.useContext(quizContextSource);

    useEffect(() => {
        console.log(`quiz ${positionFrom0 + 1} changed:`,questionsNeedReordering(quiz), quiz)
        // if (quizChanged ===null) {
        //     // if() setQuizChanged(false);
        //     if (questionsNeedReordering(quiz)){
        //         sortQuestionsByPositions(quiz);
        //         refreshPositionNumbersOnSortedQuestions(quiz);
        //         setQuiz({...quiz});
        //     } else {
        //         setQuizChanged(false)
        //     }
        // } else if (quizChanged ==false){setQuizChanged(true);}

    }, [quiz])






    // JUST PROVIDING INFO:
    useEffect(() => {
        console.log(`quiz ${positionFrom0 + 1} change registered:`, quizChanged)
    }, [quizChanged])

    return (

        <div style={{display:"none"}}>

        </div>
    );
}