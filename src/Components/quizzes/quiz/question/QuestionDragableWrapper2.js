import React, {useState} from 'react';
import {Draggable} from "react-beautiful-dnd";
import QuestionWithContext2 from "./QuestionWithContext2";

export default function QuestionDraggableWrapper({data:question, positionInArray}) {
    const [questionForId] = useState(question);

    return (
        <Draggable
            draggableId={questionForId.id ? questionForId.id.toString() : questionForId.title}
            index={positionInArray}
        >
            {(provided) => (
                <div
                    className="question overlayWrapper"
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                >
                    <div className="overlay hideIt"  {...provided.dragHandleProps}/>
                    <QuestionWithContext2 question={question} positionInArray={positionInArray}/>
                </div>
            )}

        </Draggable>
    );
}