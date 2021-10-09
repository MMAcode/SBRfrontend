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
        setQuiz({...quiz});
    }
    const setAsSingleCorrectAnswer = ()=> {
        question.choices.forEach(choice=>choice.correctAnswer=false)
        choice.correctAnswer = true;
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
        <div className="restrict_admin editChoice adminInvisibleBorder"
             // style={{backgroundColor:"pink"}}
        >
            {/*<div> Choice: <input type="text" onChange={e=>editChoice(e.target.value)} defaultValue={choice.title}/></div>*/}
            <div><input type="text" onChange={e=>editChoice(e.target.value)} defaultValue={choice.title}/></div>
            <div> <span className="textDetail">Correct answer:</span>
                <button
                    style={{backgroundColor:`${choice.correctAnswer ? 'green' : 'white'}`}}
                    // onClick={flipCorrectAnswer}
                    onClick={setAsSingleCorrectAnswer}
                >
                    {choice.correctAnswer.toString()}
                </button>
            </div>
            <button className="deleteButton" onClick={deleteChoice}>Delete</button>
        </div>
    );
}