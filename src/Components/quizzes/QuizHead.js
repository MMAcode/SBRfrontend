import React, {useContext, useEffect, useState} from 'react';
import {firstCapital} from "../../services/helperMethods";
import {quizContextSource} from "./Quiz";
import AppENUMS from "../../services/EnumsClass";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

export default function QuizHead(props) {
    const [quiz] = useContext(quizContextSource)
    const reorderHandler = useState(true);
    useEffect(() => {
        console.log("reorder questions change registered", reorderHandler[0])
    }, [reorderHandler])
    const reorder = (e) => {
        e.stopPropagation();
        e = e.target.checked


        if (reorderHandler[0] === true) {
            document.querySelectorAll(".choices").forEach(e => {
                e.classList.add("hideIt")
            });
        } else {
            document.querySelectorAll(".choices").forEach(e => {
                e.classList.remove("hideIt")
            });
        }
        // reorderHandler[1](before => !before)
        reorderHandler[1](e)
    }


    return (
        <div className="quizHead">
            <h2>{firstCapital(quiz.title)}</h2>
            <span className="restrict_admin">
                {/*<button onClick={reorder}>Re-order Questions</button>*/}
                <FormControlLabel
                    control={<Switch
                        inputProps={{'aria-label': 'Switch demo'}}
                        checked={reorderHandler[0]}
                        onChange={reorder}
                    />}
                    label="Choices"
                    className="toggleSwitchWrapper"
                />
            </span>

        </div>
    );
}