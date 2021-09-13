import React from 'react';
import AppENUMS from "../services/EnumsClass";
import Loading from "./Loading";
import ReactJson from "react-json-view";

export default function AsyncData({status, children}) {
    console.log("currentAsyncDataLoadingStatus:",status);

    // const after = (time ,x) =>{
    //     const doLater = async()=>{
    //         await new Promise(resolve => setTimeout(resolve, 350));
    //
    //     };
    //     doLater().then(xy => xy);
    // }
    return (
        <div
            // style={{border:"1px solid gray"}}
        >
            {/*<p>AsyncData:</p>*/}
            {/*<ReactJson src={props}  style={{textAlign:'left', backgroundColor:'lightGray'}}/>*/}
            {status==AppENUMS.status.notStarted && "((DEBUG INFO: Data not yet requested))"}
            {status==AppENUMS.status.loading && <Loading/>}
            {status==AppENUMS.status.loaded && children}
            {status==AppENUMS.status.failed && "error"}

        </div>
    );
}