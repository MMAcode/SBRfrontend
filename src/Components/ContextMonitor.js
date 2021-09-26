import React, {useEffect} from 'react';
import appContextSource from "../services/appContextSource";
import {userContextSource} from "../services/contextsService";
export default function ContextMonitor(props) {
    const appContextData = React.useContext(appContextSource);
    const userContext = React.useContext(userContextSource);

    useEffect(() => {
        console.log("AppContext data updated to: ", appContextData, " u:", appContextData?.user?.data?.username, "r:", appContextData?.user?.data?.role)
    }, [appContextData])

    useEffect(()=>{
        console.log("userContext data updated to: ", userContext)
    },[userContext])

    return null;
}