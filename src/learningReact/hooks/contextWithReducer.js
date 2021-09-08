import React from 'react';

const initialState = {data:" initial state"};

const actions = {A:"A", B:"B"}
const reducer = (state, action)=>{
    switch(action){
        case actions.A:
            return {state, data += "A"}
        default:
            return state
    }
}

export default function AllIn(props) {
    const [state, actionDispatch] = useReducer(reducer,initialState);
    return (
        <div>

        </div>
    );
}