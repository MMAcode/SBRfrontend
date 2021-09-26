import React from 'react';
import Choice from "./choice/Choice";
import RestrictedAccess from "../../../RestrictedAccess";
import EditAddChoice from "./EditAddChoice";

export default function Choices({data}) {
    return (
            <div
                className="choices"
            >
                {data.map((choice,positionFrom0) => <Choice data={[choice,positionFrom0]} key={positionFrom0}/>)}
                {/*<RestrictedAccess>*/}
                    <EditAddChoice/>
                {/*</RestrictedAccess>*/}
            </div>
    );
}