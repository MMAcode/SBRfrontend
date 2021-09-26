import React, {useContext} from 'react';
import Quiz from "./Quiz";
import AccodrionMaterial from "./AccodrionMaterial";
import appContextSource from "../../services/appContextSource";
import {firstCapital} from "../../services/helperMethods";
import QuizWrapper from "./QuizWrapper";

export default function QuizzesLoaded({data: allQuizzes}) {
    // const appContext = React.useContext(appContextSource);
    return (
        <div className="quizzesLoaded">
            <h1>Quizzes</h1>
            {allQuizzes?.map((quiz, positionFrom0) =>
                <QuizWrapper key={quiz.id} data={[quiz, positionFrom0]}/>
            )}


        </div>
    );
}