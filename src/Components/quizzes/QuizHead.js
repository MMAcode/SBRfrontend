import React, {useContext, useEffect, useState} from 'react';
import {firstCapital} from "../../services/helperMethods";
import {quizContextSource} from "./Quiz";
export default function QuizHead(props) {
    const[quiz] = useContext(quizContextSource)
    const reorderHandler = useState(false);
    useEffect(()=>{
        console.log("reorder questions change registered",reorderHandler[0])
    },[reorderHandler])
    return (
        <div className="quizHead">
            <h2>{firstCapital(quiz.title)}</h2>
            <span className="restrict_admin"><button onClick={()=>reorderHandler[1](before=>!before)}>Re-order Questions</button></span>

        </div>
    );
}