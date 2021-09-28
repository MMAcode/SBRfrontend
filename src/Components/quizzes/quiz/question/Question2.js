import React, {useContext} from 'react';
import Choices from "./Choices";
import {questionContextSource} from "../../../../services/contextsService";
export default function Question2() {
    const {question, positionInArray} = useContext(questionContextSource);
    return (
        <div>
            <h3 className="text-center">{positionInArray + 1}) {question.title}?</h3>
            {question.choices && <Choices data={question.choices}/>}
        </div>
    );
}