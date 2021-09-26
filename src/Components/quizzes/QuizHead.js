import React, {useContext, useEffect, useState} from 'react';
import {firstCapital} from "../../services/helperMethods";
import {quizContextSource} from "./Quiz";
export default function QuizHead(props) {
    const[quiz] = useContext(quizContextSource)
    const reorderHandler = useState(false);
    useEffect(()=>{
        console.log("reorder questions change registered",reorderHandler[0])
    },[reorderHandler])
    const reorder = (e)=> {
        e.stopPropagation();
        reorderHandler[1](before => !before)
    }
    return (
        <div className="quizHead">
            <h2>{firstCapital(quiz.title)}</h2>
            <span className="restrict_admin"><button onClick={reorder}>Re-order Questions</button></span>

        </div>
    );
}