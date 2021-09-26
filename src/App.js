import './styles/App.scss';
import LoginPage from "./Components/user/LoginPage";
import React, {useEffect} from "react";
import appContextSource from "./services/appContextSource";
import {userContextSource} from "./services/contextsService";
import AppENUMS from "./services/EnumsClass";
import QuizzesWrapper from "./Components/quizzes/QuizzesWrapper";
import ContextMonitor from "./Components/ContextMonitor";
import StylingTool from "./Components/styling/StylingTool";

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
