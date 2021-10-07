import React, {useEffect, useState} from 'react';
import {quizContextSource} from "../../../services/contextsService";
import RESTRequestsService from "../../../services/RESTRequestsService";
import QuizValidator from "./QuizValidator";
import {countIssues} from "../../../services/helperMethods";
export default function UpdateQuizOptions(props) {
    const newQuestionTitleHandler = useState("");

    const quizContext = React.useContext(quizContextSource);

    // useEffect(()=>{console.log("quiz changed - update save button to", quizContext.quizChanged)},[quizContext.quizChanged])

    const saveChanges= () => {
        // quizContext.setQuizChanged(null);
        quizContext.setQuizChanged(false);
        RESTRequestsService.updateQuiz(quizContext.quiz)
            .then((response) => {
                // console.log("quiz received from DB", response.data);
                quizContext.setQuizChanged(null);
                quizContext.setQuiz(response.data);

            })
            .catch(e => console.log("error updating quiz ", quizContext?.title, e))
        ;
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
                       placeholder="Title..."/>
                <button onClick={addQuestion}>Add question</button>
            </form>
            <QuizValidator/>
            <button id="saveQuiz"
                    style={{backgroundColor:`${quizContext.quizChanged ? "lightgreen" : "white"}`}}
                    onClick={saveChanges}
                    disabled={countIssues(quizContext.quizIssuesHandler)>0 || !quizContext.quizChanged}
            >
                {quizContext.quizChanged ? "Save changes in this quiz" : "No changes in this quiz"}
            </button>

            <button>Delete this quiz (Button functionality not implemented)</button>

        </div>
    );
}