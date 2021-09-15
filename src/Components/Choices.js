import React from 'react';
export default function T({data}) {
    return (
        <div>
            <h4>Options:</h4>
            {data.map(option => <p>{option.title}</p>)}

        </div>
    );
}