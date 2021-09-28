import React, {useEffect} from 'react';
import Choices from "./question/Choices";
import {Draggable} from "react-beautiful-dnd";
import {questionContextSource} from "../../../services/contextsService";
import QuestionContext from "./question/QuestionContext";


export default function Question({data: [data, questionPositionFrom0]}) {

    // const [question, setQuestion] = React.useState(data);

    // useEffect(()=>{console.log(`question ${questionPositionFrom0+1} changed:`,question)},[question])
    return (
        <Draggable
            draggableId={data.id.toString()}
            // index={question.positionFrom0}
            index={questionPositionFrom0}
        >
            {(provided) => (
                <div
                    className="question overlayWrapper"
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                >
                        {/*<div className="overlay hideIt"  {...provided.dragHandleProps}/>*/}
                        <div className="overlay"  {...provided.dragHandleProps}/>
                        <QuestionContext data={{question:data, questionPositionFrom0}}/>

                </div>
            )}

        </Draggable>
    );
}