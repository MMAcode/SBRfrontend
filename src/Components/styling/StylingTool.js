import React, {useEffect, useState} from 'react';
import Switch from "@material-ui/core/Switch";
import DarkModeSwitch from "./DarkModeSwitch";
import ColorHandler from "./ColorHandler";

export default function StylingTool(props) {
    return (
        <div id="stylingTool">
            <DarkModeSwitch/>
            <ColorHandler/>
        </div>
    );
}