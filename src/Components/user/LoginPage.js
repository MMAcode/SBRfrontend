import React, {useContext, useEffect} from 'react';
import axios from "axios";
import RESTRequestsService, {urlCore} from "../../services/RESTRequestsService";
import localDataService from "../../services/localDataService";
import LoginForm from "./LoginForm";
import {userContextSource} from "../../services/contextsService";

export default function LoginPage() {
    const userContextHandler = useContext(userContextSource);
    const getUserInfoFromCookie = ()=>{
        RESTRequestsService.getUserDetailsFromCookie()
            .then(({data})=> {
                localDataService.setUserDataInLocalService(data?.name, "", data?.authorities[0]);
                userContextHandler[1]({...localDataService?.data?.user?.data});
            })
            .catch(e=>console.log(e))
    }

    useEffect(() => {
        getUserInfoFromCookie();
    }, [])

    const loginAs = async (u, p) => userContextHandler[1](await RESTRequestsService.loginUser(u,p));
    // const loginAs = async (u, p) => {
    //     console.log("uuu:", await RESTRequestsService.loginUser(u, p))
    //     ;
    // }

    const logout = () => {
        RESTRequestsService.logoutUser()
        userContextHandler[1]({})
    }

    return (
        <div className="LoginPage_C" style={{borderBottom: "1px solid black"}}>
            {!userContextHandler[0]?.role
                ? <div>
                    <h1>login page</h1>
                    <p>current user role: {userContextHandler[0]?.role}</p>
                    <button onClick={() => loginAs("anonymous","anonymous")}>login as anonymous</button>
                    <button onClick={() => loginAs("x1","x1")}>login as x1</button>
                    <button onClick={() => loginAs("x2","x2")}>login as x2</button>
                    <button onClick={() => loginAs("x3","x3")}>login as x3</button>
                    <LoginForm/>
                    <p>{userContextHandler[0]?.error && userContextHandler[0].error }</p>
                </div>
                : <span style={{float: "right"}} >
                    <span>{userContextHandler[0]?.role} {userContextHandler[0]?.username}</span>
                    <button onClick={logout}>logout</button></span>
            }
        </div>
    );

}