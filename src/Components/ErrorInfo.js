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
            <h3>Error loading data from the server</h3>
            <ReactJson src={data}  style={{textAlign:'left'}}/>

        </div>
    );
}