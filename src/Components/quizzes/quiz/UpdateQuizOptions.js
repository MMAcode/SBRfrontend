import React from 'react';
import {quizContextSource} from "../../../services/contextsService";
import RESTRequestsService from "../../../services/RESTRequestsService";
export default function UpdateQuizOptions(props) {
    const quizContext = React.useContext(quizContextSource);
    const saveChanges= () => {
        quizContext.setQuizChanged(false);
        RESTRequestsService.updateQuiz(quizContext.quiz);
    }


    return (
        <div className="updateQuizOptions restrict_admin">
            <button id="saveQuiz"
                    style={{backgroundColor:`${quizContext.quizChanged ? "red" : "gray"}`}}
                    onClick={saveChanges}>Save changes in this quiz</button>
            <button>Delete this quiz (Button functionality not implemented)</button>
        </div>
    );
}