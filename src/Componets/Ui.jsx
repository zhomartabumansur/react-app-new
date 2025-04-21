import React, { useEffect, useReducer } from 'react'

const initialState = {
    loading: false, 
    data: null,
    error: ""
}

const reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_START":
            return{...state, loading: true, error: ""}
        case "FETCH_SUCCESS":
            return{...state, loading: false, data: action.payolad}
        case "FETCH_ERROR":
            return{...state, loading: false, error: action.payolad}
        default:
            return state
    }
}

function Ui() {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        const productsData = async () => {
            dispatch({ type: "FETCH_START" })
        try {
            const responce = await fetch("https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/books")
            const data = await responce.json()
            dispatch({ type: "FETCH_SUCCESS", payload: data })
        }
        catch (error) {
            dispatch({ type: "FETCH_ERROR", payload: "ERORR 404"})

        } }
        productsData()
    }, [])

    return(
        <div>
            <h2>API+UseReducer</h2>

            {state.loading && <p>Loading</p>}
            {state.error && <p style={{ color: "red" }}>{state.error}</p>}

            {state.data && (
                <div>
                    {state.data.map((item) => (
                        <div key={item.id} style={{ border: "5px solid black"}}>
                            <h2>{item.title}</h2>
                            <img src={item.image} style={{width: "700px"}}/>    
                            <p>{item.description}</p>
                            <p>{item.price}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Ui