import React, {useEffect, useState} from 'react';
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default function DarkModeSwitch(props) {
    const darkModeHandler = useState(false);

    useEffect(()=>{
        let isDarkTheme = localStorage.getItem('darkTheme') === 'true';
        if (isDarkTheme) {
            // document.documentElement.setAttribute("theme", "dark");
            // darkModeHandler[1](isDarkTheme);
            handleDarkmodeChange(isDarkTheme);
        }
    },[])
    const handleDarkmodeChange = (isDark)=>{
        darkModeHandler[1](isDark);
        document.documentElement.setAttribute("theme", isDark ? "dark" : "");
        localStorage.setItem("darkTheme",isDark.toString());
        // console.log(isDark);
    }

    return (
        <FormControlLabel
        control={<Switch
            inputProps={{'aria-label': 'Switch demo'}}
            checked={darkModeHandler[0]}
            onChange={(e) => handleDarkmodeChange(e.target.checked)}
        />}
        label="Dark Theme"
        // id="darkSwitch"
        className="toggleSwitchWrapper"
        />
    );
}