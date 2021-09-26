import React, {useEffect, useState} from 'react';
import Switch from "@material-ui/core/Switch";
import DarkModeSwitch from "./styling/DarkModeSwitch";
import ColorHandler from "./styling/ColorHandler";

export default function StylingTool(props) {
    return (
        <div id="stylingTool">
            <DarkModeSwitch/>
            <ColorHandler/>
        </div>
    );
}