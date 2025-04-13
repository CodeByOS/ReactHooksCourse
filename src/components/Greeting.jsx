// Import React and the useContext hook from the React library
import React, { useContext } from 'react'

// Import the LanguageContext that was created elsewhere in the app
import { LanguageContext } from '../context/LanguageProvider'

// This is a functional component called Greeting
const Greeting = () => {
    // useContext hook allows us to access the value provided by LanguageContext
    // Destructuring to get `language` and `toggleLanguage` from the context
    const { language, toggleLanguage } = useContext(LanguageContext);

    /*
      The useContext hook simplifies consuming values from React Contexts.
      Instead of wrapping components with <LanguageContext.Consumer>,
      we can directly access context values here.
      This makes the code cleaner and easier to read.
    */

    return (
        <div>
            {/* Display the current language value from context */}
            <p>{language}</p>

            {/* When button is clicked, it calls toggleLanguage to switch the language */}
            <button onClick={toggleLanguage}>Switch Language</button>
        </div>
    )
}

// Export the component so it can be used in other parts of the app
export default Greeting
