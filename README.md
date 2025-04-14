# 📦 Fetching Data Using useReducer in React

This example demonstrates how to fetch data from an API using the `useReducer` hook along with `useEffect`. It's a clean way to manage loading, success, and error states in a React functional component.

---

## 🧠 Why useReducer?

While `useState` is great for simple state management, `useReducer` is better when:

- The state logic is complex (e.g., multiple related values like loading, error, data).
- You want a more predictable and structured state transition (like Redux, but local).

---

## 🚀 How It Works

### 1. **Initial State**

```jsx
const initialState = {
  loading: false,
  data: null,
  error: null
};
```
We keep track of:
- **loading** : Whether the fetch is ongoing.
- **data** : The successfully fetched data.
- **error** : Any error message that occurs during fetch.

### 2. **Reducer Function**
```jsx
const reducer = (state, { type, payload }) => {
  switch(type) {
    case 'FETCH_INIT':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, data: payload };
    case 'FETCH_FAILED':
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
}
```
This handles three types of actions:
- `FETCH_INIT` : Before the fetch starts.
- `FETCH_SUCCESS` : When data is successfully fetched.
- `FETCH_FAILED` : When an error occurs.

### 3. **Fetching Data with useEffect**

```jsx
useEffect(() => {
  const controller = new AbortController();
  const { signal } = controller;
  let didCancel = false;

  const fetchData = async () => {
    dispatch({ type: 'FETCH_INIT' });

    try {
      const response = await fetch('https://dummyjson.com/products', { signal });
      if (!response.ok) throw new Error('Failed to fetch');
      const result = await response.json();

      if (!didCancel) {
        dispatch({ type: 'FETCH_SUCCESS', payload: result });
      }
    } catch (error) {
      if (!didCancel) {
        if (error.name === 'AbortError') {
          console.log('Fetch Aborted');
        } else {
          dispatch({ type: 'FETCH_FAILED', payload: error.message });
        }
      }
    }
  };

  fetchData();

  return () => {
    didCancel = true;
    controller.abort();
  };
}, []);

```

This fetches data only once when the component mounts. We use `AbortController` to cancel the request if the component unmounts during the fetch.

### 4. **Rendering the Result**

```jsx
if (state.loading) return <p>Loading...</p>;
if (state.error) return <div>Error: {state.error}</div>;

return (
  <div>
    <h2>Products</h2>
    <ul>
      {state.data?.products?.map(product => (
        <li key={product.id}>
          <strong>{product.title}</strong> - ${product.price}
        </li>
      ))}
    </ul>
  </div>
);
```
We conditionally render:
- A loading indicator
- An error message
- Or the list of products

Optional chaining (`?.`) is used to safely access `products` from the `data`.

# ✅ Benefits of This Approach

- Cleaner and more scalable than using multiple `useState`. 
- Easy to extend (e.g., add retries, pagination, etc.).
- Keeps logic and state transitions predictable and organized.