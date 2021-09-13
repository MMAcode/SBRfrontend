import React from 'react';
import QuizWrapper from "./QuizWrapper";
export default function QuizzesLoaded({data: allQuizzes}) {
    console.log("Quizess props:",allQuizzes.length);
    return (
        <div>
            <h1>Quizzes:</h1>
            {allQuizzes.map((quiz,position) => <QuizWrapper key={quiz.id} data={quiz}/>)}
        </div>
    );
}