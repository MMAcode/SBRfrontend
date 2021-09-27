import React, {useEffect, useState} from 'react';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

export default function ChoiceHider(props) {
    const reorderHandler = useState(true);

    useEffect(() => {
        console.log("reorder questions change registered", reorderHandler[0])
    }, [reorderHandler])
    const reorder = (e) => {
        e.stopPropagation();
        // e.preventDefault();
        console.log(e.target)

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
        <div style={{textAlign:"right"}}>
            <FormControlLabel
                control={<Switch
                    inputProps={{'aria-label': 'Switch demo'}}
                    checked={reorderHandler[0]}
                    onChange={reorder}
                />}
                label="Choices"
                className="toggleSwitchWrapper"
            />
        </div>
    );
}