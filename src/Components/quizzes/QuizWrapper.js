import React, {useEffect} from 'react';
import {firstCapital} from "../../services/helperMethods";
import QuizQuestions, {quizContextSource} from "./quiz/QuizQuestions";
import AccodrionMaterial from "./quiz/AccodrionMaterial";
import QuizHead from "./quiz/QuizHead";

export default function QuizWrapper({data: [quizData, positionFrom0]}) {
    const [quiz, setQuiz] = React.useState(quizData);

    return (
        <quizContextSource.Provider value={[quiz, positionFrom0, setQuiz]}>
            <div className="mirecek">
            <AccodrionMaterial
                key={positionFrom0}
                head={<QuizHead/>}
                body={<QuizQuestions/>}
                data={quiz}
                positionFrom0={positionFrom0}
                // disabled={appContext?}
            />
            </div>
        </quizContextSource.Provider>

    );
}