import React, {useContext, useEffect} from 'react';
import Choices from "./question/Choices";
import {Draggable} from "react-beautiful-dnd";
import {questionContextSource, quizContextSource} from "../../../services/contextsService";
import EditQuestionOptions from "./question/EditQuestionOptions";


export default function Question({data: [data, questionPositionFrom0]}) {
    const [question, setQuestion] = React.useState(data);

    return (
        <Draggable
            // draggableId={question?.id ? question.id.toString() : question.title}
            draggableId={question.positionFrom0.toString()}
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
                    <div className="overlay hideIt"  {...provided.dragHandleProps}/>
                    <questionContextSource.Provider value={{question, setQuestion, questionPositionFrom0}}>
                        {/*<h3>Question {questionPositionFrom0+1}:</h3>*/}
                        <div style={{textAlign: "left"}}>
                            <h3 style={{
                                display: "inline-block",
                                paddingRight: '20px'
                            }}>{questionPositionFrom0 + 1}) {data.title}????</h3>
                            <EditQuestionOptions/>


                        </div>
                        {data.choices && <Choices data={data.choices}/>}
                        {/*<ReactJson src={data}  style={{textAlign:'left', backgroundColor:'lightGray'}}/>*/}
                    </questionContextSource.Provider>
                </div>
            )}

        </Draggable>
    );
}