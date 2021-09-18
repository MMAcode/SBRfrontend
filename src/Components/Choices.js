import React from 'react';
import Choice from "./Choice";
import RestrictedAccess from "./RestrictedAccess";
import EditAddChoice from "./EditAddChoice";

export default function Choices({data}) {
    return (
        <div
            style={{
                marginLeft: '1rem'
            }}
        >
            {/*<h4>Choices:</h4>*/}

            <div
                // className="d-flex justify-content-around"
            style={{
                display:'flex',
                alignItems:'stretch',
                justifyContent:'center',
                flexWrap:'wrap'
            }}
            >
                {data.map((choice,positionFrom0) => <Choice data={[choice,positionFrom0]} key={positionFrom0}/>)}
                <RestrictedAccess>
                    <EditAddChoice/>
                </RestrictedAccess>
            </div>
        </div>
    );
}