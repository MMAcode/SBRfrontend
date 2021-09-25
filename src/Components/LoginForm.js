import React, {useEffect, useState} from 'react';
import RESTRequestsService from "../services/RESTRequestsService";
export default function T(props) {
    const username = useState("x1");
    const password = useState("x1");

    useEffect(()=>{
        console.log("u: ",username[0]," p: ",password[0])
    },[username[0],password[0]]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted");
        RESTRequestsService.loginUser(username[0],password[0])
                .then((x) => {
                    console.log("login from server success: result:", x);
                    // updateUserLoginDetails("x1", "x1", "USER");
                })
                .catch(e => console.log("error logingin to server:", e))
    }


    return (
        <div>
            <h3> Log-in Form</h3>
            <form onSubmit={handleSubmit}>
                {/*<p>:</p>*/}
                <input onChange={e=> username[1](e.target.value)} type='text' id='email2'
                       defaultValue={username[0]}
                       placeholder="Username..."/>
                {/*<p>password:</p>*/}
                <input onChange={e=> password[1](e.target.value)} id="password2" type='password' defaultValue={password[0]} placeholder="Password..."/>
                <button id="submitLogInWithEmailForm" type='submit'>Submit</button>
                <p id='LogInResult2'></p>
            </form>
        </div>
    );
}