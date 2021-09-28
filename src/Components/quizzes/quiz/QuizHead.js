import React, {useContext, useEffect, useState} from 'react';
import {firstCapital} from "../../../services/helperMethods";
import {quizContextSource} from "./QuizQuestions";
import AppENUMS from "../../../services/EnumsClass";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import ChoicesHider from "./QuestionReorderingActivator";

export default function QuizHead(props) {
    const {quiz} = useContext(quizContextSource)


    return (
        <div className="quizHead">
            <h2>{firstCapital(quiz.title)}</h2>
            {/*<span className="restrict_admin">*/}
            {/*    /!*<button onClick={reorder}>Re-order Questions</button>*!/*/}
            {/*    /!*<ChoicesHider/>*!/*/}
            {/*</span>*/}

        </div>
    );
}