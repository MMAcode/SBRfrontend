import React, {useEffect, useState} from 'react';
import {quizContextSource} from "../../../../../services/contextsService";
import {questionContextSource} from "../../../../../services/contextsService";
import {choiceContextSource} from "./Choice";

export default function EditChoice() {
    const {quiz,setQuiz} = React.useContext(quizContextSource);
    const {question} = React.useContext(questionContextSource);
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
        <div className="restrict_admin editChoice adminBorder">
            <div> Choice: <input type="text" onChange={e=>editChoice(e.target.value)} defaultValue={choice.title}/></div>
            <div> Correct answer: <button onClick={flipCorrectAnswer}>{choice.correctAnswer.toString()}</button></div>
            <button onClick={deleteChoice}>Delete</button>
        </div>
    );
}