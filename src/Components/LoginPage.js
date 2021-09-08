import React from 'react';
import axios from "axios";
import {urlCore} from "../services/RESTRequestsService";

export default function LoginPage(props) {

    const getUsers = ()=> {
        console.log("ahoj")
    }
    const loginAsX1 = ()=> {
        console.log("ahoj login x1")
        axios.get(`${urlCore}/basicauth`,
            { headers: { authorization: 'Basic ' + window.btoa("x1:x1") } })
            .then((x)=>console.log("login in x1 good result:",x))
            .catch(e=>console.log("error logingin x1:", e))
    }

    return (
        <div>
            <h1>login page</h1>
            <button onClick={()=>getUsers()}>get data from server (/users)</button>
            <button onClick={()=>loginAsX1()}>login as x1</button>
        </div>
    );
}