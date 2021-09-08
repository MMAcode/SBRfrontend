import React from 'react';
import Context01 from "./context01Source";

function Context02Provider(props) {
    let someState = {data:"state data"}
    return (
        <div>
            <Context01.Provider value={someState}>
            {/*    some inner components which will be accessing this context*/}
            {/*can contain other context providers if wanted*/}
            </Context01.Provider>
        </div>
    );
}

export default Context02Provider;