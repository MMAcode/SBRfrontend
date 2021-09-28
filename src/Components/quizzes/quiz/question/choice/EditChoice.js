import React, {useEffect, useState} from 'react';
import {quizContextSource} from "../../QuizQuestions";
import {questionContextSource} from "../../Question";
import {choiceContextSource} from "./Choice";

export default function EditChoice() {
    const {quiz,setQuiz} = React.useContext(quizContextSource);
    const [question] = React.useContext(questionContextSource);
    const [choice,choicePositionFrom0] = React.useContext(choiceContextSource);
    const choiceEditHandler = useState(false);

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
    const editChoice = (newValue)=>{
        choice.title = newValue;
        setQuiz({...quiz});
    }
    return (
        <div className="restrict_admin">
            <div><input type="text" onChange={e=>editChoice(e.target.value)} defaultValue={choice.title}/></div>
            <button onClick={flipCorrectAnswer}>Change Answer</button>
            <button onClick={deleteChoice}>Delete Choice</button>
        </div>
    );
}