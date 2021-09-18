import React, {useEffect} from 'react';
import EditChoice from "./EditChoice";
export default function CorrectAnswer({data:[data,choicePositionFrom0]}) {
    return (
        <div>
            <span className="m-1">{data.correctAnswer.toString()}</span>
            {/*<RestrictedAccess>*/}
                <EditChoice data={[data,choicePositionFrom0]}/>

            {/*</RestrictedAccess>*/}
        </div>
    );
}