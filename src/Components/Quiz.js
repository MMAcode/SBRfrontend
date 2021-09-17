import React from 'react';
import {firstCapital} from "../services/helperMethods";
import ReactJson from "react-json-view";
import AppENUMS from "../services/EnumsClass";
import Question from "./Question";
import RestrictedAccess from "./RestrictedAccess";

export const quizContextSource = React.createContext({});
export default function Quiz({data: quizData}) {
    const quizHandleArr = React.useState(quizData);
    // if (quiz.status==AppENUMS.status.notStarted || !quiz.status) {
    //     console.log("will get data for this quiz")
    // }

    return (
        <div
            style={{
                textAlign: 'left',
                width: '100%'
            }}
        >
            <quizContextSource.Provider value={quizHandleArr}>
                {quizHandleArr[0].questions.map((q, position) => <Question data={q} positionFrom1={position + 1} key={position}/>)}
                {/*<ReactJson src={quiz}  style={{textAlign:'left', backgroundColor:'lightGray'}}/>*/}
            </quizContextSource.Provider>
            <RestrictedAccess>
                <div className="text-center">
                    <button style={{backgroundColor:'lightGreen'}}>Save changes in this quiz</button>
                    <button style={{backgroundColor:'red'}} >Delete this quiz</button>
                </div>
            </RestrictedAccess>
        </div>
    );
}