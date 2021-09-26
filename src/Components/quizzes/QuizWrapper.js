import React, {useEffect} from 'react';
import {firstCapital} from "../../services/helperMethods";
import Quiz, {quizContextSource} from "./Quiz";
import AccodrionMaterial from "./AccodrionMaterial";
import QuizHead from "./QuizHead";

export default function QuizWrapper({data: [quizData, positionFrom0]}) {
    const [quiz, setQuiz] = React.useState(quizData);

    return (
        <quizContextSource.Provider value={[quiz, positionFrom0, setQuiz]}>
            <AccodrionMaterial
                key={positionFrom0}
                head={<QuizHead/>}
                body={<Quiz/>}
                data={quiz}
                positionFrom0={positionFrom0}
                // disabled={appContext?}
            />
        </quizContextSource.Provider>

    );
}