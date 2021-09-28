import React from 'react';
import {Draggable} from "react-beautiful-dnd";
import {questionContextSource} from "../../../../services/contextsService";
import Choices from "./Choices";
import QuestionContext from "./QuestionContext";
export default function QuestionDraggable({data}) {
    const [question, positionInArray]  = data;
    return (
        <Draggable
            draggableId={question.id.toString()}
            // index={question.positionFrom0}
            index={positionInArray} // (in video he is passing index from .map function)
        >
            {(provided) => (
                <div
                    className="question overlayWrapper"
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                >
                    <div className="overlay hideIt"  {...provided.dragHandleProps}/>
                    <QuestionContext data={[question, positionInArray]}/>
                </div>
            )}

        </Draggable>
    );
}