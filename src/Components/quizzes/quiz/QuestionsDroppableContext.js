import React from 'react';
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import {sortQuestionsByPositions, swapQuestions} from "../../../services/helperMethods";

import Question from "./Question";
import {quizContextSource} from "../../../services/contextsService";
import QuestionDraggable from "./question/QuestionDraggable";
export default function QuestionsDroppableContext(props) {
    const {quiz, quizPositionFrom0, setQuiz} = React.useContext(quizContextSource);

    //is synchronous
    const onDragEnd = (result) => {
        const {source:{index:sourceIndex}, destination:{index:destinationIndex}} = result;
        swapQuestions(quiz, sourceIndex,destinationIndex);
        sortQuestionsByPositions(quiz);
        // quiz.questions = [...quiz.questions];
        console.log("quiz update to this:", quiz);
        // setQuiz({...quiz});

    }
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppableId">
                {(provided) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {/*{quiz?.questions?.map((q, position) => <Question data={[q, position]} key={position}/>)}*/}
                        {/*{sortQuestionsByPositions(quiz)?.questions?.map((q, position) => <Question data={[q, position]} key={position}/>)}*/}
                        {quiz?.questions?.map((q, positionInArray) =>
                        // {sortQuestionsByPositions(quiz)?.questions?.map((q, positionInArray) =>
                        { console.log("qqq",positionInArray, q)
                         return   <QuestionDraggable data={[q, positionInArray]} key={positionInArray}/>
                        })}
                        {provided.placeholder}
                    </div>
                )}

            </Droppable>
        </DragDropContext>
    );
}