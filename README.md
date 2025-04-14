# 🧠 What is `useReducer`?

`useReducer` is a React Hook that is an alternative to `useState` — especially when your state logic is more complex or involves multiple sub-values, or when the next state depends on the previous one.

Think of it like a mini Redux reducer, built right into React.

## Syntax:

```jsx
const [state, dispatch] = useReducer(reducerFunction, initialState);
```

# 🔁 How useReducer works

## Example:

```jsx
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}
```

Now, in your component:

```jsx
const [state, dispatch] = useReducer(reducer, initialState);

<button onClick={() => dispatch({ type: 'INCREMENT' })}>
  Increment
</button>

```

- `state` is the current state.
- `dispatch` is a function to send actions to the reducer.
- `action` is an object that has at least a `type`.

# 🌐 What is useContext?

React's `useContext` is a way to share state or data globally in your component tree — without having to pass props down manually at every level (prop drilling).

## Create context:

```jsx
const MyContext = React.createContext();
```

## Use context:

```jsx
const value = useContext(MyContext);
```

But for this to work, you must wrap your component tree with a `Provider`:

```jsx
<MyContext.Provider value={something}>
  <App />
</MyContext.Provider>
```

# 💡 Why Combine useReducer with useContext?

This combo allows you to:
- ✅ Manage complex state (via `useReducer`)
- ✅ Share that state globally (via `useContext`)
- ✅ Avoid prop drilling
- ✅ Have a scalable architecture similar to Redux, but lighter

# 📌 Key Takeaways

```table
| Concept    | Purpose                                                            |
|------------|--------------------------------------------------------------------|
| `useReducer` | Manages complex state transitions based on action types          |
| `useContext` | Shares state and dispatch globally across the component tree     |
| `dispatch`   | Sends action objects to the reducer                               |
| `Provider`   | Makes the state/dispatch accessible to any child components        |

```

# 🧱 When to Use This Pattern?

## ✅ When:

- You have global state (e.g., user info, theme, settings).
- You want Redux-like structure without the overhead.
- You’re building modular, scalable apps with shared logic.

## 🚫 Don’t use if:

- Your state is very simple and only needed in a few components (just use `useState`).
- You’re already using a full state library (like Redux or Zustand).