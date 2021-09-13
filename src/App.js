import './App.css';
import HandleAsyncData from "./learningReact/HandleAsyncData";
import SimpleReducer from "./learningReact/hooks/useReducer/SimpleReducer";
import ComplexReducer from "./learningReact/hooks/useReducer/ComplexReducer";
import LoginPage from "./Components/LoginPage";
import TestingQueries from "./Components/TestingQueries";
import localDataService from "./services/LocalDataService";
import React, {useEffect} from "react";
import appContextSource from "./services/appContextSource";


const appState = {
    user: {
        username: "x1",
        password: 'x1'
    }
};

function App() {
    useEffect(()=>{
        localDataService.data = appState;
        console.log("appState changed")
    },[appState])


    return (
        <div className="App">
            <appContextSource.Provider value={appState}>
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
