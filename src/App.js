import './App.css';
import HandleAsyncData from "./learningReact/HandleAsyncData";
import SimpleReducer from "./learningReact/hooks/useReducer/SimpleReducer";
import ComplexReducer from "./learningReact/hooks/useReducer/ComplexReducer";
import LoginPage from "./Components/LoginPage";
import TestingQueries from "./Components/TestingQueries";
import localDataService from "./services/localDataService";
import React, {useEffect} from "react";
import appContextSource from "./services/appContextSource";
import AppENUMS from "./services/EnumsClass";
import QuizzesWrapper from "./Components/quizzes/QuizzesWrapper";
import AccodrionMaterial from "./Components/AccodrionMaterial";
import Collapsable from "./Components/Collapsable"
// import {Accordion} from "react-bootstrap";
// import Accordion from 'react-bootstrap/Accordion'
import {Alert} from "react-bootstrap";
// import Accordion from "react-bootstrap/cjs/Accordion";
import AccordionSingle from "./Components/AccordionSingle";
import bootstrap from 'bootstrap'
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import RestrictedAccess from "./Components/RestrictedAccess";
import {useLoginSimple} from "./hooks/useLoginAs";
// import {Toast} from 'bootstrap';



const defaultAppState = {
    user: {
        data: {
            username: "x1",
            password: 'x1',
            role: 'USER'
        },
        status: AppENUMS.status.loaded
    },
    quizzes: {
        data: {},
        status: AppENUMS.status.notStarted
    }
};

function App() {
    useEffect(() => {
        // localDataService.setUserData(defaultAppState.user.username, defaultAppState.user.password, defaultAppState.user.role);
        console.log("xy2:", defaultAppState.user.data.username, defaultAppState.user.data.password, defaultAppState.user.data.role)
        localDataService.setUserDataInLocalService(defaultAppState.user.data.username, defaultAppState.user.data.password, defaultAppState.user.data.role);
        console.log("appState changed");
    }, [])

    const [appState, appStateSet] = React.useState(defaultAppState);
    const stateForContext = {
        data: appState,
        setData: appStateSet
    }

    useEffect(() => {
        console.log("Context data updated to: ", stateForContext.data, " u:", stateForContext.data?.user?.data?.username, "r:", stateForContext.data?.user?.data?.role)
        if (stateForContext.data?.user?.data?.role != AppENUMS.role.admin) {
            document.querySelectorAll(".restrict_admin").forEach(e => {e.classList.add("hideIt")});
        } else {
            document.querySelectorAll(".restrict_admin").forEach(e => {e.classList.remove("hideIt")});
        }
    }, [stateForContext, appState, defaultAppState])


    return (
        <div className="App" style={{background: "lightGray", minHeight: "100vh"}}>
            <appContextSource.Provider value={stateForContext}>
                {/*<HandleAsyncData/>*/}
                {/*<SimpleReducer/>*/}
                {/*<br/>*/}
                {/*<ComplexReducer/>*/}
                <LoginPage/>
                {/*<TestingQueries/>*/}
                {/*<RestrictedBy roleAllowed={AppENUMS.role.manager}></RestrictedBy>*/}
                <QuizzesWrapper/>

            </appContextSource.Provider>
        </div>
    );
}

export default App;
