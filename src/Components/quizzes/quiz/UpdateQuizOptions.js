import React from 'react';
import {quizContextSource} from "./QuizQuestions";
import appContextSource from "../../../services/appContextSource";
import {getQuizIndex} from "../../../services/helperMethods";
import RESTRequestsService from "../../../services/RESTRequestsService";
export default function UpdateQuizOptions(props) {
    const [quiz] = React.useContext(quizContextSource);
    const saveChanges= () => {
        RESTRequestsService.updateQuiz(quiz);
    }

    return (
        <div className="updateQuizOptions restrict_admin">
            <button id="saveQuiz"
                    onClick={saveChanges}>Save changes in this quiz</button>
            <button>Delete this quiz (Button functionality not implemented)</button>
            {/*<button onClick={showC}>showC</button>*/}
        </div>
    );
}