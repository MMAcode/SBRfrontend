import React from 'react';
import RESTRequestsService from "../services/RESTRequestsService";
import localDataService from "../services/LocalDataService";

export default function Quizzes(props) {


    const handleRestRequest_quizzesAllIn = ()=> {
        RESTRequestsService.getQuizzes_AllIn()
            .then((x)=> {
                console.log("request successfull; following data received:", x)
            })
            .catch(e=> {
                console.log("error receiving data:", e)
            });
    }

    return (
        <div>
            <h1>Quizzes:</h1>
            <button onClick={handleRestRequest_quizzesAllIn}> get quizzes</button>
        </div>
    );
}