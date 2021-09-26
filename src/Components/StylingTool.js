import React, {useEffect, useState} from 'react';
import Switch from "@material-ui/core/Switch";
import DarkModeSwitch from "./styling/DarkModeSwitch";

export default function StylingTool(props) {
    let val = window.getComputedStyle(document.documentElement).getPropertyValue('--pf-colorB1_s');
    const valHandler = useState(val);
    // let valNr = parseInt(val,10) -140;
    // console.log("style:", val, valNr);

    // const add = (amount)=>{
    //     console.log("clicked")
    // }

    const handleInput=(e)=>{
        let value = e.target.value;
        // console.log("vvvale:",value);
        valHandler[1](value);


    }

    useEffect(()=>{
        console.log("vvvale:",valHandler[0]);
        document.documentElement.style.setProperty('--pf-colorB1_s',valHandler[0])
    },[valHandler])

    return (
        <div style={{textAlign: "left"}}>
            <span>style it: current val:{val}</span>
            {/*<button onClick={()=>add(40)}>+40</button>*/}
            <input //hue 0-360
                // onInput={handleInput}
                // id="typeinp"
                type="range"
                min="0" max="360"
                value={valHandler[0]}
                onChange={handleInput}
                step="1"
            />
            <DarkModeSwitch/>
            <div>
                colors
                <span className="colorPmm">primary</span>
                <span className="colorSmm">sec</span>
                <span className="colorTmm">text</span>
                <span className="colorHmm">headers</span>
                <span className="colorB1mm">bg</span>
                <span className="colorB2mm">bg2</span>
            </div>
            {/*const label = { inputProps: { 'aria-label': 'Switch demo' } };*/}
            {/*<Switch {...label}/>*/}



        </div>
    );
}