import React, { useReducer } from 'react'

const initialState = {
    name: "",
    email: "",
    password: "",
    error: "",
}

const reducer = (state, action) => {
    switch(action.type) {
        case "SET_NAME":
            return {...state,name: action.payload}
        case "SET_EMAIL":
            return {...state,email: action.payload}
        case "SET_PASSWORD":
            return {...state,password: action.payload}
        case "SET_ERROR":
            return {...state,error: action.payload}
        case "CLEAR_FOFRM":
            return initialState
        default:
            return state
    }
}

const RegistrationForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!state.name || !state.email || !state.password) {
            dispatch({ type: "SET_ERROR", payload: 'Толық жазыңыз' })
            return
        }

        console.log('Тіркелу сәтті', state)

        dispatch({type: 'CLEAR_FORM' })
    }

    return (
        <div>
            <h2>Тіркелу</h2>
            {state.error && <p style={{ color: "red" }}>{state.error}</p>}
            <form onSubmit={handleSubmit}>

                <div>
                    <label>Name:</label>
                    <input 
                        type="text" 
                        value={state.name}
                        onChange={(e) => dispatch({type: "SET_NAME",payload: e.target.value})}
                    />
                </div>

                <div>
                    <label>Email:</label>
                    <input 
                        type="email"
                        value={state.email}
                        onChange={(e) => dispatch({type: "SET_EMAIL",payloade: e.target.value})}
                    />
                </div>

                <div>
                    <label>Password:</label>
                    <input 
                        type="password"
                        value={state.password}
                        onChange={(e) => dispatch({type: "SET_PASSWORD",payload: e.target.value})}
                    />
                </div>

            </form>
        </div>
    )
}

export default RegistrationForm