import React, { useReducer } from 'react'

// Functional component
const ExampleThree = () => {
    // Initial state object containing the counter and the increment step
    const initialValue = {
        counter : 0,
        incrementBy : 1,
    }

    // Reducer function that takes the current state and an action
    const reducer = (state, { type, payload }) => {
        switch(type) {
            case 'INCREMENT':
                // Increase counter by the value of incrementBy
                return { ...state, counter: state.counter + state.incrementBy }

            case 'DECREMENT':
                // Decrease counter by the value of incrementBy
                return { ...state, counter: state.counter - state.incrementBy }

            case 'RESET': 
                // Reset counter to 0
                return { ...state, counter: 0 }

            case 'SET_INCREMENT_BY':
                // Update incrementBy based on input (ensure it's a number)
                return { ...state, incrementBy: Number(payload) }

            default:
                // Return current state if action type is unknown
                return state
        }
    }

    // useReducer hook returns the current state and a dispatch function
    const [state, dispatch] = useReducer(reducer, initialValue);

    return (
        <div>
            {/* Display the current counter value */}
            <h2>{state.counter}</h2>

            <div>
                {/* Input to update incrementBy value */}
                <input 
                    type="text"
                    value={state.incrementBy}
                    // Dispatch SET_INCREMENT_BY action when input changes
                    onChange={e => dispatch({ type: 'SET_INCREMENT_BY', payload: e.target.value })}
                />
            </div>

            {/* Button to dispatch INCREMENT action */}
            <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>

            {/* Button to dispatch DECREMENT action */}
            <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>

            {/* Button to dispatch RESET action */}
            <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
        </div>
    )
}

export default ExampleThree
