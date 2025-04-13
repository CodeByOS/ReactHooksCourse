import React from 'react'
import { useReducer } from 'react'

// This component demonstrates the use of useReducer for state management
const ExampleOne = () => {

    // The reducer function defines how state should change based on the action
    const reducer = (state, action) => {
        switch(action) {
            case 'INCREMENT':
                return state + 1; // Increase state by 1
            case 'DECREMENT':
                return state - 1; // Decrease state by 1
            case 'RESET':
                return 0; // Reset state to 0
            default:
                return state; // Return current state if action is unrecognized
        }
    }

    // useReducer returns the current state and a dispatch function to trigger actions
    // The second argument is the initial state (in this case, 0)
    const [state, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            {/* Display the current state */}
            <h2>{state}</h2>

            {/* Dispatch different actions when buttons are clicked */}
            <button onClick={() => dispatch("INCREMENT")}>Increment</button>
            <button onClick={() => dispatch("DECREMENT")}>Decrement</button>
            <button onClick={() => dispatch("RESET")}>Reset</button>
        </div>
    )
}

export default ExampleOne
