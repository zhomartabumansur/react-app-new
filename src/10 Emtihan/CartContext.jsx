import js from '@eslint/js'
import React from 'react'

const cartContext = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return {}
        case "REMOVE_ITEM":
            return {}
        case "CLEAR_CART":
            return {}
        default:
            return state
    }
}

const products = [
    { id: 1, name: "Book", price: 2000 },
    { id: 2, name: "Pen", price: 150 },
    { id: 3, name: "Laptop", price: 50000},
]

export default function Products() {

    return (
        <div>
            <h2>Products</h2>
            {products} 
            <button onClick={() => dispatch({ type: "ADD_ITEM" })}>Add to Cart</button>
        </div>
    )
}

export default function Cart() {

    return (
        <div>
            <h2>Cart 🛒</h2>
            <button onClick={() => dispatch({ type: "REMOVE_ITEM" })}>Remove Item</button>

            <button onClick={() => dispatch({ type: "CLEAR_CART" })}>Clear Cart</button>       
        </div>
    )
}