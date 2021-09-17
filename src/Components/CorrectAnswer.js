import React, {useEffect} from 'react';
import Choice from "./Choice";
import RestrictedAccess from "./RestrictedAccess";
import {quizContextSource} from "./Quiz";
import appContextSource from "../services/appContextSource";
import EnumsClass from "../services/EnumsClass";
import {getChoiceIndex, getQuestionIndex, getQuizIndex} from "../services/helperMethods";
import EditChoice from "./EditChoice";
export default function CorrectAnswer({data}) {




    return (
        <div>
            <span className="m-1">{data.correctAnswer.toString()}</span>
            {/*<RestrictedAccess>*/}
                <EditChoice data={data}/>

            {/*</RestrictedAccess>*/}
        </div>
    );
}