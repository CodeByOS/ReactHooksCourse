// Importing necessary hooks from React
import React, { useEffect, useReducer } from 'react'

// Initial state for the useReducer hook
const initialState = {
    loading: false,  // Indicates whether the data is currently being loaded
    data: null,      // Will hold the fetched data
    error: null      // Will hold any error message if the fetch fails
};

// Reducer function to handle state changes based on action types
const reducer = (state, {type, payload}) => {
    switch(type) {
        case 'FETCH_INIT' :
            // Set loading to true and clear any existing errors
            return {...state, loading: true, error: null};

        case 'FETCH_SUCCESS':
            // Set loading to false and store the fetched data
            return {...state, loading: false, data: payload};

        case 'FETCH_FAILED':
            // Set loading to false and store the error message
            return {...state, loading: false, error: payload};

        default:
            // If the action type is unknown, return the current state unchanged
            return state;
    }
}

// Functional component that fetches data using useReducer and useEffect
const FetchDataWithReducer = () => {
    // useReducer hook to manage local state using the reducer and initialState
    const [state, dispatch] = useReducer(reducer, initialState);

    // useEffect hook to perform side effects—in this case, fetching data from an API
    useEffect(() => {
        // Creating an AbortController to allow aborting the fetch request if needed
        const controller = new AbortController();
        const {signal} = controller;

        // A flag to indicate whether the component was unmounted
        let didCancel = false;

        // Async function to fetch data
        const fetchData = async() => {
            // Dispatch FETCH_INIT to indicate loading has started
            dispatch({type: 'FETCH_INIT'});

            try {
                // Making a GET request to an API with an abort signal
                const response = await fetch('https://dummyjson.com/products', {signal});

                // If response is not ok (e.g. status is not 200–299), throw an error
                if (!response.ok) {
                    throw new Error('Failed to fetch');
                }

                // Parse the JSON body of the response
                const result = await response.json();

                // If the component hasn't unmounted, dispatch success action
                if(!didCancel) {
                    dispatch({type: 'FETCH_SUCCESS', payload: result});
                }

            } catch (error) {
                // Only handle the error if the component hasn't unmounted
                if (!didCancel) {
                    // If the fetch was aborted, just log it
                    if(error.name === 'AbortError') {
                        console.log('Fetch Aborted');
                    } else {
                        // Otherwise, dispatch an error action with the error message
                        dispatch({type: 'FETCH_FAILED', payload: error.message})
                    }
                }
            }
        };

        // Call the fetch function
        fetchData();

        // Cleanup function to set didCancel to true and abort fetch if component unmounts
        return () => {
            didCancel = true;
            controller.abort();  // Abort the fetch request
        }
    }, []); // Empty dependency array means this effect runs only once (on mount)

    // Conditional rendering based on loading and error state
    if (state.loading) return <p>Loading...</p>
    if (state.error) return <div>Error: {state.error}</div>

    // Main render of the component when data is successfully fetched
    return (
        <div>
            <div>
                <h2>Products</h2>
                <ul>
                    {/* Mapping over the fetched products and displaying them */}
                    {state.data?.products?.map(product => (
                        <li key={product.id}>
                            <strong>{product.title}</strong> - ${product.price}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

// Exporting the component as the default export of the module
export default FetchDataWithReducer
