import React, {useContext} from 'react';
import QuizWrapper from "./QuizWrapper";
import QuestionReorderingActivator from "./quiz/QuestionReorderingActivator";

export default function QuizzesLoaded({data: allQuizzes}) {
    return (
        <div className="quizzesLoaded">
            <h1>Quizzes</h1>
            <QuestionReorderingActivator/>
            {allQuizzes?.map((quiz, positionFrom0) =>
                <QuizWrapper key={quiz.id} data={[quiz, positionFrom0]}/>
            )}


        </div>
    );
}