import React, {useContext} from 'react';
import axios from "axios";
import {urlCore} from "../services/RESTRequestsService";
import appContextSource from "../services/appContextSource";
import localDataService from "../services/localDataService";
export default function LoginPage(props) {
    const appContext = useContext(appContextSource);



    const getUsers = ()=> {
        console.log("ahoj")
        axios.get(`${urlCore}/users`
            ,{ headers: { authorization: 'Basic ' + window.btoa("x1:x1") } }
            )
            .then((x)=>console.log("users in x1 good result:",x))
            .catch(e=>console.log("error users x1:", e))
    }
    const loginAsX1 = ()=> {
        console.log("ahoj login x1")
        axios.get(`${urlCore}/basicauth`
            , { headers: { authorization: 'Basic ' + window.btoa("x1:x1") } }
            )
            .then((x)=>console.log("login in x1 good result:",x))
            .catch(e=>console.log("error logingin x1:", e))
    }

    const updateUserLoginDetails = (u,p) => {
        localDataService.setUser(u,p);
        appContext.setData((d)=>({...d,user:localDataService.data.user}))
    }

    const loginAsX2 = ()=> {
        updateUserLoginDetails("x2","x2");
        // axios.get(`${urlCore}/basicauth`
        //     , { headers: { authorization: 'Basic ' + window.btoa("x1:x1") } }
        // )
        //     .then((x)=>console.log("login in x1 good result:",x))
        //     .catch(e=>console.log("error logingin x1:", e))

    }

    const showUserData = ()=>{
        console.log(localDataService.data.user.username);
    }

    return (
        <div>
            <h1>login page</h1>
            <button onClick={()=>getUsers()}>get data from server (/users)</button>
            <button onClick={()=>loginAsX1()}>login as x1</button>
            <button onClick={()=>loginAsX2()}>login as x2</button>
            <button onClick={showUserData}>show user details in LocalDataService</button>
        </div>
    );
}