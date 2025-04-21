import React,{useReducer} from 'react'
import './App.css'

const counterReducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 }
        case "DECREMENT":
            return { count: state.count - 1 }
        case "RESET":
            return { count: 0 }
        default:
            return state;
    }
}

function Counter() {
    const [state, dispatch] = useReducer(counterReducer, { counter: 0 })
    return (
        <div>

            <h2> Counter : {state.count}</h2>

            <button onClick={() => dispatch({ type: "INCREMENT" })}>increase</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>Delete</button>
            <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>


        </div>
    )
}

export default Counter