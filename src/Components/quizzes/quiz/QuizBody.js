import React, {useEffect} from 'react';
import QuestionContext from "./question/archive/QuestionContext";
import UpdateQuizOptions from "./UpdateQuizOptions";
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import QuestionReorderingActivator from "./QuestionReorderingActivator";
import {sortQuestionsByPositions, sortQuestionsByTitle, swapQuestions} from "../../../services/helperMethods";
import {quizContextSource} from "../../../services/contextsService";
import QuestionDragableWrapper from "./question/QuestionDragableWrapper";

export default function QuizBody() {
    const {quiz, positionFrom0, setQuiz} = React.useContext(quizContextSource);
    // useEffect(() => {
    //     // sortQuestionsByPositions(quiz);
    //     console.log(`quiz ${positionFrom0 + 1} changed:`, quiz)
    // }, [quiz])

    const onDragEnd = (result) => {
        const {source:{index:sourceIndex}, destination:{index:destinationIndex}} = result;
        // console.log(sourceIndex,destinationIndex, quiz)
        swapQuestions(quiz, sourceIndex,destinationIndex);
        // sortQuestionsByPositions(quiz);
        // console.log(sourceIndex,destinationIndex, quiz)
        setQuiz({...quiz});
    }
    // console.log("in quiz body:", quiz)
    // useEffect(()=>{    console.log("in quiz body on[]:", quiz)},[])

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
                            {/*{quiz?.questions?.map((q, position) => <QuestionContext data={q} positionInArray={position} key={position}/>)}*/}
                            {/*{quiz?.questions?.map((q, positionInArray) => <QuestionDragableWrapper2 data={q} positionInArray={positionInArray} key={positionInArray}/>)}*/}
                            {/*{sortQuestionsByPositions(quiz)?.questions?.map((q, position) => <QuestionContext data={[q, position]} key={position}/>)}*/}
                            {sortQuestionsByPositions(quiz)?.questions?.map((q, positionInArray) => <QuestionDragableWrapper data={q} positionInArray={positionInArray} key={positionInArray}/>)}

                            {/*{sortQuestionsByTitle(quiz)?.questions?.map((q, positionInArray) => <QuestionDragableWrapper data={q} positionInArray={positionInArray} key={positionInArray}/>)}*/}
                            {/*auto sorting needs auto sorting deactiated in quizchangehandler*/}

                            {/*{quiz?.questions?.map((q, positionInArray) => <QuestionDragableWrapper data={q} positionInArray={positionInArray} key={positionInArray}/>)}*/}
                            {provided.placeholder}
                        </div>
                    )}

                </Droppable>
            </DragDropContext>
            <UpdateQuizOptions/>
        </div>
    );
}