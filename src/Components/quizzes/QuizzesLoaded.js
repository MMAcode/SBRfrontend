import React, {useContext} from 'react';
import QuizWrapper from "./QuizWrapper";
import QuestionReorderingActivator from "./quiz/QuestionReorderingActivator";
import AddQuiz from "./AddQuiz";

export default function QuizzesLoaded({data: allQuizzes}) {

    const addQuiz = ()=>{

    }
    return (
        <div className="quizzesLoaded">
            <h1>Quizzes</h1>
            <QuestionReorderingActivator/>
            {allQuizzes?.map((quiz, positionFrom0) =>
                <QuizWrapper key={quiz.id} data={[quiz, positionFrom0]}/>
            )}
            <div className="restrict_admin">
                <button onClick={addQuiz}>Add quiz</button>
                <AddQuiz/>
            </div>

        </div>
    );
}