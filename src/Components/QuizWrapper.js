import React from 'react';
import {firstCapital} from "../services/helperMethods";
import ReactJson from "react-json-view";
import AppENUMS from "../services/EnumsClass";

export default function QuizWrapper({data: quiz}) {
    //1 - check if quiz in context
    // if (quiz.status==AppENUMS.status.loaded) // render data

    //2 if not, load it to context
    if (quiz.status==AppENUMS.status.notStarted || !quiz.status) {
        // render data
        console.log("will get data for this quiz")
    }

    //3 show it

    return (
        // <button
        //     style={{
        //         // display:"flex",
        //         width: "95%", marginTop: "1rem",
        //
        //     }}
        //     onClick={displayQuiz(quiz.id)}
        // >
        //     <h2>{firstCapital(quiz.title)} (id:{quiz.id})</h2>
        //     {/*<button>Display Quiz</button>*/}
        // </button>

        <div>
            <ReactJson src={quiz}  style={{textAlign:'left', backgroundColor:'lightGray'}}/>
        </div>
    );
}