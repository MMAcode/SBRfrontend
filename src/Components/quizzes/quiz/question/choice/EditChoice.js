import React, {useEffect} from 'react';
import {quizContextSource} from "../../../Quiz";
import {questionContextSource} from "../../Question";
import {choiceContextSource} from "./Choice";

export default function EditChoice() {
    const [quiz,,setQuiz] = React.useContext(quizContextSource);
    const [question] = React.useContext(questionContextSource);
    const [choice,choicePositionFrom0] = React.useContext(choiceContextSource);

    const flipCorrectAnswer = ()=> {
        choice.correctAnswer = !choice.correctAnswer;
        console.log(choicePositionFrom0,choice);
        console.log(quiz.questions[0].choices);
        setQuiz({...quiz});
    }

    const deleteChoice = () => {
        question.choices.splice(choicePositionFrom0,1);
        setQuiz({...quiz});
    }
    return (
        <div className="restrict_admin">
            <button onClick={()=>flipCorrectAnswer()}>Change
                {/*qz{quiz.id}q{choice.question_id}o{choice.id}*/}
            </button>
            <button onClick={()=>deleteChoice()}>delete</button>
        </div>
    );
}