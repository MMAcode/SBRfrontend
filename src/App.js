import './App.css';
import HandleAsyncData from "./learningReact/HandleAsyncData";
import SimpleReducer from "./learningReact/hooks/useReducer/SimpleReducer";
import ComplexReducer from "./learningReact/hooks/useReducer/ComplexReducer";
import LoginPage from "./Components/LoginPage";
import TestingQueries from "./Components/TestingQueries";
import localDataService from "./services/localDataService";
import React, {useEffect} from "react";
import appContextSource from "./services/appContextSource";


const defaultAppState = {
    user: {
        username: "x1",
        password: 'x1'
    }
};

function App() {
    useEffect(()=>{
        localDataService.setUser(defaultAppState.user.username,defaultAppState.user.password);
        console.log("appState changed");
    },[])

    const [appState, appStateSet] = React.useState(defaultAppState);
    const stateForContext = {
        data:appState,
        setData:appStateSet
    }

    useEffect(()=>{
        console.log("Context data updated to: ",stateForContext.data," u:",stateForContext.data?.user?.username )
    },[stateForContext,appState,defaultAppState])



    return (
        <div className="App">
            <appContextSource.Provider value={stateForContext}>
                {/*<HandleAsyncData/>*/}
                {/*<SimpleReducer/>*/}
                {/*<br/>*/}
                {/*<ComplexReducer/>*/}
                <LoginPage/>
                <TestingQueries/>
            </appContextSource.Provider>
        </div>
    );
}

export default App;
