import React from 'react';
import {quizContextSource} from "./Quiz";
import appContextSource from "../services/appContextSource";
import {getQuizIndex} from "../services/helperMethods";
import RESTRequestsService from "../services/RESTRequestsService";
export default function UpdateQuizOptions(props) {

    // const appContext = React.useContext(appContextSource);
    const [quiz] = React.useContext(quizContextSource);


    const saveChanges= () => {
        // appContext.setData(prevData => {
        //     //!!causes rerender to all component using Context, like all choice components...
        //     prevData.quizzes.data[getQuizIndex(appContext,quiz)]=quiz;
        //     return ({...prevData});
        // })
        RESTRequestsService.updateQuiz(quiz.data);
    }
    // const showC = ()=>{
        // console.log(appContext.data);
    // }

    return (
        <div className="text-center restrict_admin">
            <button style={{backgroundColor:'lightGreen'}}
                    onClick={saveChanges}>Save changes in this quiz</button>
            <button style={{backgroundColor:'red'}} >Delete this quiz</button>
            {/*<button onClick={showC}>showC</button>*/}
        </div>
    );
}