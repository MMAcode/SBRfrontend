import React, {useEffect} from 'react';
import Question from "./Question";
import UpdateQuizOptions from "./UpdateQuizOptions";
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import ChoicesHider from "./ChoicesHider";

export const quizContextSource = React.createContext({});
export default function QuizQuestions() {
    const [quiz, quizPositionFrom0] = React.useContext(quizContextSource);
    useEffect(() => {
        console.log(`quiz ${quizPositionFrom0 + 1} changed:`, quiz)
    }, [quiz])

    const onDragEnd = () => {

    }
    return (
        <div className="quizz">
            <ChoicesHider/>

            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppableId">
                    {(provided) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {quiz?.questions?.map((q, position) => <Question data={[q, position]} key={position}/>)}
                            {provided.placeholder}
                        </div>
                    )}

                </Droppable>
            </DragDropContext>
            <UpdateQuizOptions/>
        </div>
    );
}