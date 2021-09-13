import React from 'react';
import RESTRequestsService from "../services/RESTRequestsService";
import appContextSource from "../services/appContextSource";
import EnumsClass from "../services/EnumsClass";
import AsyncData from "./AsyncData";
import QuizzesLoaded from "./QuizzesLoaded";
import ReactJson from "react-json-view";
import AppENUMS from "../services/EnumsClass";
// import QuizzesLoaded from "./QuizzesLoaded";

export default function QuizzesWrapper(props) {
    const appContext = React.useContext(appContextSource);

    React.useEffect(()=>{handleRestRequest_quizzesAllIn()},[]);

    const handleRestRequest_quizzesAllIn = () => {
        appContext.setData((previousData) => ({...previousData, quizzes: {status: EnumsClass.status.loading}}))
        RESTRequestsService.getQuizzes_AllIn()
            .then((x) => {
                appContext.setData((previousData) => ({
                    ...previousData,
                    quizzes: {
                        data: x.data,
                        status: EnumsClass.status.loaded
                    }
                }));
            })
            .catch(e => {
                console.log("error receiving data:", e)
            });
    }

    return (
        <div>
            {/*<h1>Quizzes:</h1>*/}

            <button
                onClick={handleRestRequest_quizzesAllIn}
                disabled={appContext.data.quizzes.status == AppENUMS.status.loading}
            >
                get quizzes
            </button>

            <AsyncData status={appContext.data.quizzes.status}>
                <QuizzesLoaded data={appContext.data.quizzes.data}/>
            </AsyncData>
        </div>
    );
}