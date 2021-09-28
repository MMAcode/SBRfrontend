import React, {useContext} from 'react';
import {questionContextSource, quizContextSource} from "../../../../services/contextsService";

export default function EditQuestionOptions(props) {
    const {question} = useContext(questionContextSource);
    const quizContext = useContext(quizContextSource);

    const updateQuestion = (newQuestionTitle) => {
        question.title = newQuestionTitle;
        quizContext.setQuiz({...quizContext.quiz});
    }

    const deleteQuestion = () => {
        quizContext.quiz.questions.splice(question.positionFrom0,1);
        quizContext.quiz.questions.forEach((q,i)=>q.positionFrom0=i);

        // question.choices.splice(choicePositionFrom0,1);
        quizContext.setQuiz({...quizContext.quiz});
    }
    return (
        <span className="restrict_admin adminBorder" style={{display:"inline-block"}}>
            <input onChange={(e) => updateQuestion(e.target.value)} type="text" value={question.title}/>
            <button style={{marginLeft:'35px'}} onClick={deleteQuestion}>Delete Question</button>
        </span>
    );
}


