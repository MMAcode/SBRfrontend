import React, {useEffect} from 'react';
import {quizContextSource} from "../../../Quiz";
import {questionContextSource} from "../../Question";

export default function EditChoice({data:[choice,choicePositionFrom0]}) {
    const [quiz,,setQuiz] = React.useContext(quizContextSource);
    const [question] = React.useContext(questionContextSource);

    const flipCorrectAnswer = ()=> {
        choice.correctAnswer = !choice.correctAnswer;
        setQuiz({...quiz});
    }

    const deleteChoice = () => {
        question.choices.splice(choicePositionFrom0,1);
        setQuiz({...quiz});
    }
    return (
        <div className="restrict_admin">
            <button onClick={()=>flipCorrectAnswer()}>Change qz{quiz.id}q{choice.question_id}o{choice.id}</button>
            <button onClick={()=>deleteChoice()}>delete option</button>
        </div>
    );
}