import React, {useEffect, useState} from 'react';
import {Draggable} from "react-beautiful-dnd";
import QuestionWithContext from "./QuestionWithContext";

export default function QuestionDraggableWrapper({data:question, positionInArray}) {
    const [questionForId,setQ] = useState(question);
    // useEffect(()=>{setQ(question)},[question])

    return (
        <Draggable
            draggableId={questionForId.id ? questionForId.id.toString() : questionForId.title}
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