import React, {useContext, useEffect, useState} from 'react';
import RESTRequestsService from "../../services/RESTRequestsService";
import {userContextSource} from "../../services/contextsService";

export default function LoginForm() {
    const userContextHandler = useContext(userContextSource);
    const usernameHandler = useState("x1");
    const passwordHandler = useState("x1");

    const handleSubmit =async (e) => {
        e.preventDefault();
        userContextHandler[1](await RESTRequestsService.loginUser(usernameHandler[0], passwordHandler[0]))
    }

    return (
        <div>
            <h3> Log-in Form</h3>
            <form onSubmit={handleSubmit}>
                {/*<p>:</p>*/}
                <input onChange={e => usernameHandler[1](e.target.value)} type='text' id='username'
                       defaultValue={usernameHandler[0]}
                       placeholder="Username..."/>
                {/*<p>password:</p>*/}
                <input onChange={e => passwordHandler[1](e.target.value)} id="password" type='password'
                       defaultValue={passwordHandler[0]} placeholder="Password..."/>
                <button id="submitLogInWithEmailForm" type='submit'>Submit</button>
                <p id='LogInResult2'></p>
            </form>
        </div>
    );
}