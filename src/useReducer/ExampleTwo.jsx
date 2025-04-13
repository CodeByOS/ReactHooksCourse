import React, { useReducer } from 'react'

// A simple counter component using useReducer
const ExampleTwo = () => {
    // Define the initial state as an object
    const initialValue = { counter: 0 };

    // Reducer function handles how the state updates based on action type and payload
    const reducer = (state, { type, payload }) => {
        switch (type) {
            case 'INCREMENT':
                // Increase counter by payload value
                return { counter: state.counter + payload };
            case 'DECREMENT':
                // Decrease counter by payload value
                return { counter: state.counter - payload };
            case 'RESET':
                // Reset counter to 0
                return { counter: 0 };
            default:
                // Return current state for unknown actions (best practice)
                return { counter: state.counter };
        }
    }

    // useReducer returns the current state and a dispatch function to trigger state updates
    const [state, dispatch] = useReducer(reducer, initialValue);

    return (
        <div>
            {/* Display the current counter value */}
            <h2>{state.counter}</h2>

            {/* Dispatch an INCREMENT action with payload of 5 */}
            <button onClick={() => dispatch({ type: "INCREMENT", payload: 5 })}>
                Increment
            </button>

            {/* Dispatch a DECREMENT action with payload of 5 */}
            <button onClick={() => dispatch({ type: "DECREMENT", payload: 5 })}>
                Decrement
            </button>

            {/* Dispatch a RESET action (payload is not needed but passed anyway) */}
            <button onClick={() => dispatch({ type: "RESET", payload: 5 })}>
                Reset
            </button>
        </div>
    )
}

export default ExampleTwo;
