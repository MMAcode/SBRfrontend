import React, {useEffect, useState} from 'react';
import {quizContextSource} from "../../../services/contextsService";
import {
    questionsNeedReordering,
    refreshPositionNumbersOnSortedQuestions,
    sortQuestionsByPositions
} from "../../../services/helperMethods";
export default function T(props) {
    const {quiz, setQuiz, quizChanged, setQuizChanged, positionFrom0}= React.useContext(quizContextSource);
    // const manualSortingIsOn=false;//when using sorting by title
    const manualSortingIsOn=true;
    useEffect(() => {
        console.log(`quiz ${positionFrom0 + 1} changed:`, quiz)
        if (quizChanged ===null) {
            console.log('setting quiz change from null to false now')
            if (manualSortingIsOn && questionsNeedReordering(quiz)){
                sortQuestionsByPositions(quiz);
                refreshPositionNumbersOnSortedQuestions(quiz);
                setQuiz({...quiz});
            } else {
                setQuizChanged(false)
            }
        } else if (quizChanged ==false){setQuizChanged(true);}

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