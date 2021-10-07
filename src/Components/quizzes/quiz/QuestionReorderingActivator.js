import React, {useEffect, useState} from 'react';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

export default function QuestionReorderingActivator(props) {
    const reorderHandler = useState(false);

    // useEffect(() => {
    //     // console.log("reorder questions change registered", reorderHandler[0])
    // }, [reorderHandler])
    const reorder = (e) => {
        e.stopPropagation();
        // e.preventDefault();


        let isActivated = e.target.checked
        // console.log(isActivated)

        if (isActivated) {
            document.querySelectorAll(".choices").forEach(e => {
                e.classList.add("hideIt")
            });

            document.querySelectorAll(".overlay").forEach(o=>{
                o.classList.remove("hideIt")
            })
        } else {
            document.querySelectorAll(".choices").forEach(e => {
                e.classList.remove("hideIt")
            });

            document.querySelectorAll(".overlay").forEach(o=>{
                o.classList.add("hideIt")
            })
        }
        // reorderHandler[1](before => !before)
        reorderHandler[1](isActivated)
    }


    return (
        <div style={{textAlign:"right"}} className="restrict_admin" id="questionReorderingActivator">
            <FormControlLabel
                control={<Switch
                    inputProps={{'aria-label': 'UserSwitch demo'}}
                    checked={reorderHandler[0]}
                    onChange={reorder}
                />}
                label="Reorder Questions"
                className="toggleSwitchWrapper"
            />
        </div>
    );
}