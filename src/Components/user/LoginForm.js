import React, {useContext, useEffect, useState} from 'react';
import RESTRequestsService from "../../services/RESTRequestsService";
import localDataService from "../../services/localDataService";
import AppENUMS from "../../services/EnumsClass";
import {appContextSource} from "../../services/contextsService";
import {userContextSource} from "../../services/contextsService";
export default function T(props) {
    const appContext = useContext(appContextSource);
    const userContextHandler = useContext(userContextSource);
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
                    let authority = x?.data?.authorities[0];
                    if (authority){
                        localDataService.setUserDataInLocalService(username[0],password[0], authority);
                        // appContext.setData((d) => ({
                        //     ...d, user: {
                        //         data: localDataService.data.user.data,
                        //         status: AppENUMS.status.loaded
                        //     }
                        // }))
                        userContextHandler[1]({...localDataService?.data?.user?.data})


                    }

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