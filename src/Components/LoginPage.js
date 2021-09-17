import React, {useContext, useEffect} from 'react';
import axios from "axios";
import {urlCore} from "../services/RESTRequestsService";
import appContextSource from "../services/appContextSource";
import localDataService from "../services/localDataService";
import AppENUMS from "../services/EnumsClass";
import {getRole} from "../services/helperMethods";
import useLoginAs from "../hooks/useLoginAs";
import ForHookUseLoginAs from "../hooks/ForHookUseLoginAs";

export default function LoginPage(props) {
    const appContext = useContext(appContextSource);

    // useEffect(()=>{loginAs("x3")},[])
    useEffect(()=>{loginAs("x3")},[])

    const getUsers = () => {
        console.log("ahoj")
        axios.get(`${urlCore}/users`
            , {headers: {authorization: 'Basic ' + window.btoa("x1:x1")}}
        )
            .then((x) => console.log("users in x1 good result:", x))
            .catch(e => console.log("error users x1:", e))
    }
    const loginAsX1 = () => {
        console.log("ahoj login x1")
        axios.get(`${urlCore}/basicauth`
            , {headers: {authorization: 'Basic ' + window.btoa("x1:x1")}}
        )
            .then((x) => {
                console.log("login in x1 good result:", x);
                updateUserLoginDetails("x1", "x1", "USER");
            })
            .catch(e => console.log("error logingin x1:", e))
    }

    const updateUserLoginDetails = (u, p, r) => {
        localDataService.setUserDataInLocalService(u, p, r);
        appContext.setData((d) => ({
            ...d, user: {
                data: localDataService.data.user,
                status: AppENUMS.status.loaded
            }
        }))
    }


    // const userState = React.useState(false);
    const loginAs = (userDetails) => {

        // axios.get(`${urlCore}/basicauth`
        //     , { headers: { authorization: 'Basic ' + window.btoa("x1:x1") } }
        // )
        //     .then((x)=>console.log("login in x1 good result:",x))
        //     .catch(e=>console.log("error logingin x1:", e))


        // userState[1](userDetails);
        updateUserLoginDetails(userDetails, userDetails, getRole(userDetails));
    }

    // const showUserData = ()=>{
    //     console.log(localDataService.data.user.username);
    // }

    return (
        <div>
            <h1>login page</h1>
            <p>current user role: {appContext.data?.user?.data?.role}</p>
            <button onClick={() => getUsers()}>get data from server (/users)</button>
            <button onClick={() => loginAs("x1")}>login as x1</button>
            <button onClick={() => loginAs("x2")}>login as x2</button>
            <button onClick={() => loginAs("x3")}>login as x3</button>
            {/*{userState[0] && <ForHookUseLoginAs data={userState[0]} setComponentNeeded={userState[1]}/>}*/}
            {/*<button onClick={showUserData}>show user details in LocalDataService</button>*/}
        </div>
    );

}