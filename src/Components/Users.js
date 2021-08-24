import React, {useState} from 'react';
import requestsService from "../services/requestsService";

const Users = () => {
    const [state, setState] = useState({});

    requestsService
        .getUsers()
        .then(response => setState(response))
        .catch(error => setState(error));
    return (
        <div>
            <div>users are here</div>
            <div>{state.toString()}</div>
        </div>
    );
};

export default Users;