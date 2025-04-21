import React, { useReducer } from 'react'

const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TODO":
            return {
                todos: [
                    ...state.todos,
                    {
                        id: Date.now(),
                        title: action.payload,
                        completed: false,
                    },
                ],
            };
    }
}

const handleAddToDo = () => {
    if(input.trim()) {
        dispatch({ type: "ADD_TODO", payload: input })
        setInput("")
    }
}
 
function AddToDo() {
    const [state, dispatch] = useReducer(handleAddToDo)

    return (
        <div>
            <h2>Осы жерге жaзыңыз:</h2>
            <input type="text"/>

            <button  onClick={() => dispatch({ type: "ADD_TODO" })}>+</button>
            <button>-</button>
        </div>
    )
}

export default AddToDo