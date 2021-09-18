import React from 'react';
import {quizContextSource} from "./Quiz";
import appContextSource from "../services/appContextSource";
import {getQuizIndex} from "../services/helperMethods";
import RESTRequestsService from "../services/RESTRequestsService";
export default function UpdateQuizOptions(props) {
    const [quiz] = React.useContext(quizContextSource);
    const saveChanges= () => {
        RESTRequestsService.updateQuiz(quiz.data);
    }

    return (
        <div className="text-center restrict_admin">
            <button style={{backgroundColor:'lightGreen'}}
                    onClick={saveChanges}>Save changes in this quiz</button>
            <button style={{backgroundColor:'red'}} >Delete this quiz (Button functionality not implemented)</button>
            {/*<button onClick={showC}>showC</button>*/}
        </div>
    );
}