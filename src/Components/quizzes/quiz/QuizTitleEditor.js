import React, {useContext} from 'react';
import {quizContextSource} from "../../../services/contextsService";
import {firstCapital} from "../../../services/helperMethods";

export default function QuizTitleEditor({className}) {
    const quizContext = useContext(quizContextSource);
    const updateQuizTitle = (newQuestionTitle) => {
        quizContext.quiz.title = newQuestionTitle;
        quizContext.setQuiz({...quizContext.quiz});
    }

    return (
        <div className={className}>
            <h2 style={{display:'inline'}}>Quiz title: </h2>
            <input
                onClick={e=>e.stopPropagation()}
                onChange={(e) => updateQuizTitle(e.target.value)}
                type="text"
                value={firstCapital(quizContext?.quiz?.title)}
            />
        </div>
    );
}