import React, {useEffect} from 'react';
import Choices from "./question/Choices";
import {Draggable} from "react-beautiful-dnd";
import {questionContextSource} from "../../../services/contextsService";


export default function Question({data: [data, questionPositionFrom0]}) {

    const [question, setQuestion] = React.useState(data);
    // useEffect(()=>{console.log(`question ${questionPositionFrom0+1} changed:`,question)},[question])

    return (
        <Draggable
            draggableId={question.id.toString()}
            // index={question.positionFrom0}
            index={questionPositionFrom0}
        >
            {(provided) => (
                <div
                    className="question overlayWrapper"
                    {...provided.draggableProps}
                    //*pass this to (sub)component which will enable moving */
                    ref={provided.innerRef}
                >
                        {/*<div className="overlay hideIt"  {...provided.dragHandleProps}/>*/}
                        <div className="overlay"  {...provided.dragHandleProps}/>
                        <questionContextSource.Provider value={{question, setQuestion, questionPositionFrom0}}>
                            {/*<h3>Question {questionPositionFrom0+1}:</h3>*/}
                            <h3 className="text-center">{questionPositionFrom0 + 1}) {data.title}????</h3>
                            {data.choices && <Choices data={data.choices}/>}
                            {/*<ReactJson src={data}  style={{textAlign:'left', backgroundColor:'lightGray'}}/>*/}
                        </questionContextSource.Provider>
                </div>
            )}

        </Draggable>
    );
}