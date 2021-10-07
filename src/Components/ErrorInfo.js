import React from 'react';
import ReactJson from "react-json-view";
export default function ErrorInfo({data}) {
    return (
        <div
        style={{
            backgroundColor:'rgba(255, 0, 0, 0.6)',
            padding:'2rem',
            margin:'2rem'
        }}>
            <h3 style={{color:'white'}}>{data}</h3>
            {/*<p>{data}</p>*/}
            {/*{typeof data === 'object' && <ReactJson src={data} style={{textAlign: 'left'}}/>}*/}

        </div>
    );
}