import React, {useContext} from 'react';
import {questionContextSource, quizContextSource} from "../../../../services/contextsService";
import {refreshPositionNumbersOnSortedQuestions} from "../../../../services/helperMethods";

export default function EditQuestionOptions(props) {
    const {question, positionFrom0} = useContext(questionContextSource);
    const quizContext = useContext(quizContextSource);

    const updateQuestion = (newQuestionTitle) => {
        question.title = newQuestionTitle;
        quizContext.setQuiz({...quizContext.quiz});
    }

    const deleteQuestion = () => {
        quizContext.quiz.questions.splice(question.positionFrom0,1);
        // quizContext.quiz.questions.forEach((q,i)=>q.positionFrom0=i);
        refreshPositionNumbersOnSortedQuestions(quizContext.quiz);

        // question.choices.splice(choicePositionFrom0,1);
        quizContext.setQuiz({...quizContext.quiz});
    }
    return (
        <span className="restrict_admin" style={{display:"inline-block"}}>
            <div>Question {positionFrom0+1}</div>
 title: <input onChange={(e) => updateQuestion(e.target.value)} type="text" value={question.title}/>
            <button style={{marginLeft:'35px'}} onClick={deleteQuestion}>Delete Question</button>
        </span>
    );
}


