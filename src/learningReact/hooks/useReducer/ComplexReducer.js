import React, {useReducer} from 'react';

const initialState = 0;

const actions = {ADD:"ADD", SUBTRACT:"SUBTRACT"}
const reducer = (state, action) => {
    console.log(action)
    switch (action.type){
        case actions.ADD: return state + action.value
        case actions.SUBTRACT: return state - action.value
    }
}

export default function ComplexReducer() {

    const [state, actionDispatch] = useReducer(reducer,initialState)


    return (
        <div>
            <button onClick={()=>actionDispatch({type:actions.ADD, value:50})}>add50</button>
            <button onClick={()=>actionDispatch({type:actions.SUBTRACT, value:4})}>add4</button>
            <p>{state}</p>
        </div>
    );
}