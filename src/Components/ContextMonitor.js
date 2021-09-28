import React, {useEffect} from 'react';
import {appContextSource} from "../services/contextsService";
import {userContextSource} from "../services/contextsService";
import AppENUMS from "../services/EnumsClass";
export default function ContextMonitor(props) {
    const appContextData = React.useContext(appContextSource);
    const userContext = React.useContext(userContextSource);

    useEffect(() => {
        console.log("AppContext data updated to: ", appContextData)
    }, [appContextData])

    useEffect(()=>{
        console.log("userContext data updated to: ", userContext);

        if (userContext[0]?.role != AppENUMS.role.admin) {
            document.querySelectorAll(".restrict_admin").forEach(e => {
                e.classList.add("hideIt")
            });
        } else {
            document.querySelectorAll(".restrict_admin").forEach(e => {
                e.classList.remove("hideIt")
            });
        }
    },[userContext])

    return null;
}