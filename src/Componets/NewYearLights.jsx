import React, {useReducer} from "react";

const initialState = {
    currentColorIndex: 0
}

const colors = ["red", "blue", "green", "orange", "pink", "white", "purple", "black", "yellow", "grey"]

function reducer(state, action) {
    switch (action.type) {
        case "NEXT-COLOR":
            return {
                currentColorIndex: (stats.currentColorIndex + 1) % colors.length
            }
        default:
            return state
    }
}

function NewYearLights() {
    const [state, dispatch] = useReducer(reducer, )
}

export default function NewYearLights() {
    return (
        <div>

        </div>
    )
}