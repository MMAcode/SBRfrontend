import React, {useContext, useEffect} from 'react';
import {firstCapital} from "../../services/helperMethods";
import QuizBody from "./quiz/QuizBody";
import {appContextSource, quizContextSource} from "../../services/contextsService";
import AccodrionMaterial from "./quiz/AccodrionMaterial";
import QuizHead from "./quiz/QuizHead";
import QuizChangeHandler from "./quiz/QuizChangeHandler";

export default function QuizWrapper({data: [quizData, positionFrom0]}) {

    const appContext = useContext(appContextSource)
    useEffect(()=>{
        setQuiz(quizData)
        setQuizChanged(null)
    },[appContext])

    const [quiz, setQuiz] = React.useState(quizData);
    const [quizChanged, setQuizChanged] = React.useState(null);
    const quizIssuesHandler = React.useState({});

    return (
        <quizContextSource.Provider value={{quiz, setQuiz, positionFrom0,quizChanged,setQuizChanged, quizIssuesHandler}}>
            <div style={{display:"none"}}></div>
            <QuizChangeHandler/>
            <div className="mirecek">
            <AccodrionMaterial
                key={positionFrom0}
                head={<QuizHead/>}
                body={<QuizBody/>}
                data={quiz}
                positionFrom0={positionFrom0}
            />
            </div>
        </quizContextSource.Provider>


    );
    return (<p key={positionFrom0}>{quiz.title}</p>)

}