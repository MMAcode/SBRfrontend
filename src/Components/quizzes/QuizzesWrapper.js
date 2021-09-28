import React, {useEffect} from 'react';
import RESTRequestsService from "../../services/RESTRequestsService";
import {appContextSource} from "../../services/contextsService";
import EnumsClass from "../../services/EnumsClass";
import AsyncDataHandler from "../AsyncDataHandler";
import QuizzesLoaded from "./QuizzesLoaded";
import ReactJson from "react-json-view";
import AppENUMS from "../../services/EnumsClass";
import {useLoginSimple} from "../../hooks/useLoginAs";
import {userContextSource} from "../../services/contextsService";
// import QuizzesLoaded from "./QuizzesLoaded";

export default function QuizzesWrapper(props) {
    const appContext = React.useContext(appContextSource);
    const userContextHandler = React.useContext(userContextSource);
    React.useEffect(()=>{
        handleRestRequest_quizzesAllIn();
    },[userContextHandler[0]]);
    // React.useEffect(()=>{
        // if (userContextHandler[0]?.role != AppENUMS.role.admin) {
        //     document.querySelectorAll(".restrict_admin").forEach(e => {
        //         e.classList.add("hideIt")
        //     });
        // } else {
        //     document.querySelectorAll(".restrict_admin").forEach(e => {
        //         e.classList.remove("hideIt")
        //     });
        // }
    // },[appContext.data])



    const handleRestRequest_quizzesAllIn = () => {
        console.log("handleRestRequest_quizzesAllIn running");
        appContext.setData((previousData) => ({...previousData, quizzes: {status: EnumsClass.status.loading}}));
        RESTRequestsService.getQuizzes_AllIn()
            .then((x) => {
                console.log("all quizzes data received like this:",x)
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
                appContext.setData((previousData) => ({
                    ...previousData,
                    quizzes: {
                        data: e,
                        status: EnumsClass.status.failed
                    }
                }));
            });
    }

    return (
        <div className="quizzesWrapper">
            <button
                onClick={handleRestRequest_quizzesAllIn}
                disabled={appContext.data.quizzes.status == AppENUMS.status.loading}
            >
                get quizzes
            </button>

            <AsyncDataHandler status={appContext.data.quizzes.status} data={appContext.data.quizzes.data}>
                <QuizzesLoaded data={appContext.data.quizzes.data}/>
            </AsyncDataHandler>
        </div>
    );
}