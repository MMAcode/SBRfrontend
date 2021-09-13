import React from 'react';
import RESTRequestsService from "../services/RESTRequestsService";
import appContextSource from "../services/appContextSource";

export default function Quizzes(props) {
    const appContext = React.useContext(appContextSource);
    // appContext.data.quizzes

    const handleRestRequest_quizzesAllIn = ()=> {
        RESTRequestsService.getQuizzes_AllIn()
            .then((x)=> {
                console.log("request successfull; following data received:", x.data)
                appContext.setData((previousData)=>({...previousData, quizzes: x}))
            })
            .catch(e=> {
                console.log("error receiving data:", e)
            });
    }

    return (
        <div>
            <h1>Quizzes:</h1>
            <button onClick={handleRestRequest_quizzesAllIn}> get quizzes</button>
            {/*<AsyncData data={}/>*/}
        </div>
    );
}