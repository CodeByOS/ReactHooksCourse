// Import React and necessary hooks from the React library
import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';

// Create a new context for language.
// This will be used with the useContext hook in other components.
export const LanguageContext = createContext();

/*
  LanguageProvider is a context provider component.
  It wraps parts of the app where we want the language state to be accessible.
*/
const LanguageProvider = ({ children }) => {
    // useState is used to manage the current language state
    const [language, setLanguage] = useState('en');

    // toggleLanguage is a function to switch between English ('en') and Arabic ('ar')
    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
    }

    /*
      The LanguageContext.Provider wraps the children components,
      and provides the current language and the toggle function via context.

      Any component inside this provider can now use the useContext(LanguageContext)
      hook to access `language` and `toggleLanguage`.
    */
    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

// Export the provider so it can be used to wrap the application (typically in App.jsx)
export default LanguageProvider;
