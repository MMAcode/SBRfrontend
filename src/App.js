import './styles/App.scss';
import HandleAsyncData from "./learningReact/HandleAsyncData";
import SimpleReducer from "./learningReact/hooks/useReducer/SimpleReducer";
import ComplexReducer from "./learningReact/hooks/useReducer/ComplexReducer";
import LoginPage from "./Components/LoginPage";
import TestingQueries from "./Components/TestingQueries";
import localDataService from "./services/localDataService";
import React, {useEffect} from "react";
import appContextSource from "./services/appContextSource";
import {userContextSource} from "./services/contextsService";
import AppENUMS from "./services/EnumsClass";
import QuizzesWrapper from "./Components/quizzes/QuizzesWrapper";
import AccodrionMaterial from "./Components/AccodrionMaterial";
import Collapsable from "./Components/Collapsable"
import ContextMonitor from "./Components/ContextMonitor";
import StylingTool from "./Components/StylingTool";

let defaultAppState = {
    quizzes: {
        data: {},
        status: AppENUMS.status.notStarted
    }
};

function App() {

    const [appContextData, appContextDataSet] = React.useState(defaultAppState);
    const userContextStateHandler = React.useState();



    return (
        <div className="App">
            <appContextSource.Provider value={{data:appContextData,setData:appContextDataSet}}>
                <userContextSource.Provider value={userContextStateHandler}>
                    <ContextMonitor/>
                    {/*<HandleAsyncData/>*/}
                    {/*<SimpleReducer/>*/}
                    {/*<br/>*/}
                    {/*<ComplexReducer/>*/}
                    <StylingTool/>
                    <LoginPage/>
                    {/*<TestingQueries/>*/}
                    {/*<RestrictedBy roleAllowed={AppENUMS.role.manager}></RestrictedBy>*/}
                    <QuizzesWrapper/>
                </userContextSource.Provider>
            </appContextSource.Provider>
        </div>
    );
}

export default App;
