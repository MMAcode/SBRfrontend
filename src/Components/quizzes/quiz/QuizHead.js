import React, {useContext, useEffect, useState} from 'react';
import {firstCapital} from "../../../services/helperMethods";
import {quizContextSource} from "../../../services/contextsService";
import AppENUMS from "../../../services/EnumsClass";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import ChoicesHider from "./QuestionReorderingActivator";
import UserSwitch from "../../UserSwitch";
import QuizTitleEditor from "./QuizTitleEditor";

export default function QuizHead(props) {
    const {quiz} = useContext(quizContextSource)


    return (
        <div className="quizHead">
            <UserSwitch
                notEditor={<h2>{firstCapital(quiz.title)}</h2>}
                editor={<QuizTitleEditor/>}
            />

        </div>
    );
}