import React, {useContext} from 'react';
import {Draggable} from "react-beautiful-dnd";
import EditQuestionOptions from "./EditQuestionOptions";
import Choices from "./Choices";
import {questionContextSource} from "../../../../services/contextsService";
export default function QuestionDraggable(props) {
    const {question, positionFrom0} = useContext(questionContextSource);

    return (
        <Draggable
            draggableId={question.id ? question.id.toString() : question.title}
            // draggableId={questionContext.question.positionFrom0.toString()}
            // index={question.positionFrom0}
            index={positionFrom0}
        >
            {(provided) => (
                <div
                    className="question overlayWrapper"
                    {...provided.draggableProps}
                    //*pass this to (sub)component which will enable moving */
                    ref={provided.innerRef}
                >
                    <div className="overlay hideIt"  {...provided.dragHandleProps}/>
                    <div>
                        {/*<h3>QuestionContext {questionPositionFrom0+1}:</h3>*/}
                        <div style={{textAlign: "left"}}>
                            <h3 style={{
                                display: "inline-block",
                                paddingRight: '20px'
                            }}>{positionFrom0 + 1}) {question.title}????</h3>
                            <EditQuestionOptions/>


                        </div>
                        {question.choices && <Choices data={question.choices}/>}
                        {/*<ReactJson src={data}  style={{textAlign:'left', backgroundColor:'lightGray'}}/>*/}
                    </div>

                </div>
            )}

        </Draggable>
    );
}