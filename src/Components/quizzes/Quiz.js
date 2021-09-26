import React, {useEffect} from 'react';
import Question from "./quiz/Question";
import UpdateQuizOptions from "./quiz/UpdateQuizOptions";

export const quizContextSource = React.createContext({});
export default function Quiz() {
    const [quiz, quizPositionFrom0] = React.useContext(quizContextSource);
    useEffect(()=>{console.log(`quiz ${quizPositionFrom0+1} changed:`,quiz)},[quiz])

    return (
        <div className="quizz">
                {quiz?.questions?.map((q, position) => <Question data={[q, position]} key={position}/>)}
                <UpdateQuizOptions/>
        </div>
    );
}