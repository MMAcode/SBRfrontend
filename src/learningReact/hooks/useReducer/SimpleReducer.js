import React, {useReducer} from 'react';

const initialState = 0;
const reducer = (state, action) => {
    switch (action){
        case "A": return state+10
        case "B": return state-1

    }
}

export default function SimpleReducer(props) {

    const [state, actionDispatch] = useReducer(reducer,initialState)


    return (
        <div>
            <button onClick={()=>actionDispatch("A")}>add1</button>
            <button onClick={()=>actionDispatch("B")}>add2</button>
            {state}
        </div>
    );
}