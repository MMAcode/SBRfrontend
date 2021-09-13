import React from 'react';
import {firstCapital} from "../services/helperMethods";

export default function T({data: quiz}) {
    const displayQuiz = (id) => {

    }

    console.log("qq:", quiz);
    return (
        <button
            style={{
                // display:"flex",
                width: "100%", marginTop: "1rem",

            }}
            onClick={displayQuiz(quiz.id)}
        >
            <h2>{firstCapital(quiz.title)} (id:{quiz.id})</h2>
            {/*<button>Display Quiz</button>*/}
        </button>
    );
}