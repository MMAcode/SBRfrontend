import React, {useEffect} from 'react';
import Question from "./Question";
import UpdateQuizOptions from "./UpdateQuizOptions";
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import QuestionReorderingActivator from "./QuestionReorderingActivator";
import {sortQuestionsByPositions, swapQuestions} from "../../../services/helperMethods";
import {quizContextSource} from "../../../services/contextsService";

export default function QuizQuestions() {
    const {quiz, quizPositionFrom0, setQuiz} = React.useContext(quizContextSource);
    // useEffect(() => {
    //     // sortQuestionsByPositions(quiz);
    //     console.log(`quiz ${quizPositionFrom0 + 1} changed:`, quiz)
    // }, [quiz])

    const onDragEnd = (result) => {
        const {source:{index:sourceIndex}, destination:{index:destinationIndex}} = result;
        swapQuestions(quiz, sourceIndex,destinationIndex);
        setQuiz({...quiz});

    }
    return (
        <div className="quizz">
            {/*<QuestionReorderingActivator/>*/}

            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppableId">
                    {(provided) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {/*{quiz?.questions?.map((q, position) => <Question data={[q, position]} key={position}/>)}*/}
                            {sortQuestionsByPositions(quiz)?.questions?.map((q, position) => <Question data={[q, position]} key={position}/>)}
                            {provided.placeholder}
                        </div>
                    )}

                </Droppable>
            </DragDropContext>
            <UpdateQuizOptions/>
        </div>
    );
}