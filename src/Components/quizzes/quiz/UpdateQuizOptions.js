import React, {useState} from 'react';
import {quizContextSource} from "../../../services/contextsService";
import RESTRequestsService from "../../../services/RESTRequestsService";
export default function UpdateQuizOptions(props) {
    const newQuestionTitleHandler = useState("");

    const quizContext = React.useContext(quizContextSource);
    const saveChanges= () => {
        quizContext.setQuizChanged(false);
        RESTRequestsService.updateQuiz(quizContext.quiz);
    }

    const addQuestion=(e)=>{
        e.preventDefault();
        quizContext.quiz.questions.push({
            title:newQuestionTitleHandler[0],
            choices:[],
            positionFrom0:quizContext.quiz.questions.length});
        quizContext.setQuiz({...quizContext.quiz});
    }

    return (
        <div className="updateQuizOptions restrict_admin">
            {/*<span>Add new question:</span>*/}
            <form>
                <input onChange={e => newQuestionTitleHandler[1](e.target.value)} type="text" defaultValue={newQuestionTitleHandler[0]}
                       placeholder="Question title..."/>
                <button onClick={addQuestion}>Add question</button>
            </form>
            <button id="saveQuiz"
                    style={{backgroundColor:`${quizContext.quizChanged ? "red" : "gray"}`}}
                    onClick={saveChanges}>Save changes in this quiz</button>
            <button>Delete this quiz (Button functionality not implemented)</button>
        </div>
    );
}