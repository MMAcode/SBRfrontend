import React, {useContext, useEffect} from 'react';
import EditChoice from "./EditChoice";
import {choiceContextSource} from "./Choice";
export default function CorrectAnswer() {
    const[choice]=useContext(choiceContextSource);
    return (
        <div>
            <span className="m-1">{choice.correctAnswer.toString()}</span>
            <EditChoice/>
        </div>
    );
}