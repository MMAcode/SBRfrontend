import React, {useEffect, useState} from 'react';
import requestsService from "../services/RESTrequestsService";

const HandleAsyncData = () => {
    const [state, setState] = useState({});

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
            })
            .catch(error => setState(error));
    },[])

    return (
        <div>
            <h1>Async Data</h1>
            {/*<div>{state.toString()}</div>*/}
            <div>{JSON.stringify(state)}</div>
            <br/>
        </div>
    );
};

export default HandleAsyncData;