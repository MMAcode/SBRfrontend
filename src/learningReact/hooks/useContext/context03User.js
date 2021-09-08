import React from 'react';
import Context01 from "./context01Source";

//contextUser has to be a child of contextProvider!
function Context03User(props) {
    const context01 = useContext(Context01);
    return (
        <div>{context01.data}</div>
    );
}

export default Context03User;