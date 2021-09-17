import React from 'react';
import useLoginAs, {useLoginSimple} from "./useLoginAs";
export default function HookProcessUser({data: userData, setComponentNeeded: setThisComponentNeeded}) {
    console.log("hi")
    console.log()
    useLoginSimple(userData);
    setThisComponentNeeded(false);
    return null;
}