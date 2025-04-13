// Import the Greeting component, which will use the language context
import Greeting from "./components/Greeting";

// Import the LanguageProvider, which provides the context to its children
import LanguageProvider from "./context/LanguageProvider";

function App() {
  return (
    <div>
      {/* 
        LanguageProvider wraps around components that need access to the context.
        It supplies the `language` and `toggleLanguage` values to its children via React's Context API.
      */}
      <LanguageProvider>
        {/* 
          Greeting is a child of LanguageProvider, so it can access the context
          using the useContext(LanguageContext) hook inside it.
        */}
        <Greeting />
      </LanguageProvider>
    </div>
  );
}

export default App;
