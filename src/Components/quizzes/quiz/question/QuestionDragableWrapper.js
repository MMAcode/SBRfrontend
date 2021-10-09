import React, {useEffect, useState} from 'react';
import {Draggable} from "react-beautiful-dnd";
import QuestionWithContext from "./QuestionWithContext";


function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}


export default function QuestionDraggableWrapper({data:question, positionInArray}) {
    // const [questionForId,setQ] = useState(question);
    const [questionForId,setQ] = useState(uuidv4());
    // useEffect(()=>{setQ(question)},[question])

    return (
        <Draggable
            // draggableId={questionForId.id ? questionForId.id.toString() : questionForId.title}
            draggableId={questionForId}
            // draggableId={questio0n.id ? question.id.toString() : question.title}
            index={positionInArray}
        >
            {(provided) => (
                <div
                    className="question overlayWrapper"
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                >
                    <div className="overlay hideIt"  {...provided.dragHandleProps}/>
                    <QuestionWithContext question={question} positionInArray={positionInArray}/>
                </div>
            )}

        </Draggable>
    );
}