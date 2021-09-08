import React, {useEffect, useState} from 'react';
import requestsService from "../services/RESTRequestsService";
import ReactJson from "react-json-view";

const HandleAsyncData = () => {
    const [state, setState] = useState({x:1});

    useEffect(()=>{
        setState("loading data")
        requestsService
            .getUsers()
            .then(response => {
                // (async()=>{
                //     await new Promise(resolve => setTimeout(resolve, 1350));
                //     setState(response)
                // })()
                setState(response)
                console.log("response: ",response);
            })
            .catch(error => {
                // setState(error);
                setState({error:":-("});
                console.log("miroError: ",typeof error);
                console.log("miroError2: ",typeof state == "object");
                console.log("miroErrorInfo: ", error);




            });
    },[])

    useEffect(()=>{
        console.log("currentState:", state);
        console.log("currentState2:", typeof state);
        console.log("currentState3:", (typeof state == "object"));
        console.log("currentState3:", (typeof state == "object") ? state : {});
    },[state])


    return (
        <div>
            <h1>Async Data</h1>
            {/*<div>{state.toString()}</div>*/}
            <div>{JSON.stringify(state)}</div>
            <div>{JSON.stringify(typeof state)}</div>
            <ReactJson src={(typeof state == "object") ? state : {}}  style={{textAlign:'left', backgroundColor:'lightGray'}}/>
            {/*<ReactJson src={{}}  style={{textAlign:'left', backgroundColor:'lightGray'}}/>*/}
            <br/>
        </div>
    );
};

export default HandleAsyncData;