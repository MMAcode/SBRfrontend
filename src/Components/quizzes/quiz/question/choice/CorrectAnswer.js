import React, {useContext, useEffect} from 'react';
import EditChoice from "./EditChoice";
import {choiceContextSource} from "./Choice";
export default function CorrectAnswer() {
    const[choice]=useContext(choiceContextSource);
    return (
        <div>
            <span>{choice.correctAnswer.toString()}</span>
            <EditChoice/>
        </div>
    );
}