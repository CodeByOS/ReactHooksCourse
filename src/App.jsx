import Counter from "./components/Counter";
// 1️⃣ Import the context provider to wrap your app
import CountProvider from "./context/CountProvider";

function App() {
  return (
    // 2️⃣ Wrap your component tree with the provider to make state accessible globally
    <CountProvider>
      {/* 3️⃣ This component consumes the context using useContext */}
      <Counter />
    </CountProvider>
  );
}

export default App;
