import React from 'react';
import Choices from "./Choices";

export const questionContextSource = React.createContext({});

export default function Question({data:[data,questionPositionFrom0]}) {
    const questionHandlingArray = React.useState({data,positionFrom0:questionPositionFrom0});

    return (
        <div
            style={{
                // border:'1px dotted gray',
                backgroundColor: "lightGray",
                padding: '1rem',
                margin: '1rem 0'
            }}
        >
            <questionContextSource.Provider value={questionHandlingArray}>
                <h3><strong>Question {questionPositionFrom0+1}:</strong></h3>
                <h3 className="text-center">{data.title}????</h3>
                {data.choices && <Choices data={data.choices}/>}
                {/*<ReactJson src={data}  style={{textAlign:'left', backgroundColor:'lightGray'}}/>*/}
            </questionContextSource.Provider>
        </div>
    );
}