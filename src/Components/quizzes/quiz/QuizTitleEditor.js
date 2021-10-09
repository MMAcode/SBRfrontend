import React, {useContext, useEffect} from 'react';
import {quizContextSource} from "../../../services/contextsService";
import {firstCapital, resizableInputElement} from "../../../services/helperMethods";



export default function QuizTitleEditor({className}) {

    useEffect(()=>{
        document.querySelectorAll(".inputHeading").forEach(inputHeadingElement=>{
            inputHeadingElement.style.width='auto';
            resizableInputElement(inputHeadingElement,5,11);
        })
    },[])

    const quizContext = useContext(quizContextSource);
    const updateQuizTitle = (newQuestionTitle) => {
        quizContext.quiz.title = newQuestionTitle;
        quizContext.setQuiz({...quizContext.quiz});
    }

    return (
        <div className={className}>
            {/*<h2 style={{display:'inline'}}>Quiz title: </h2>*/}
            {/*<span>*/}
            <input
                onClick={e=>e.stopPropagation()}
                onChange={(e) => updateQuizTitle(e.target.value)}
                type="text"
                className="inputHeading"
                value={firstCapital(quizContext?.quiz?.title)}
                style={{
                    // color:`${quizContext.quiz.title.length < 5 ? 'red': 'cv(primary-c)'}`,
                    backgroundColor:`${quizContext.quiz.title.length < 5 ? 'red': 'transparent'}`,
                    // fontSize:"20px"
                }}
            />
            {/*</span>*/}
        </div>
    );
}