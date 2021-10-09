import React from 'react';
import Choice from "./choice/Choice";
import RestrictedAccess from "../../../user/RestrictedAccess";
import EditAddChoice from "./EditAddChoice";

export default function Choices({data}) {
    return (
        <div className="questionBody">
            <div className="choices">
                {data.map((choice, positionFrom0) =>
                    <Choice data={[choice, positionFrom0]} key={positionFrom0}/>
                )}
            </div>
            <EditAddChoice/>
        </div>
    );
}