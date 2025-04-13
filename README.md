# 🧠 Understanding `useContext` in React

The `useContext` hook in React is a powerful tool that allows components to access and consume values from a Context without the need to pass props manually through every level of the component tree.

## 🔧 What is Context?

Context provides a way to share data globally across your component tree — such as theme, authentication, or language — without having to pass props down manually at every level.

## 🚀 How useContext Works

1. Create the Context
Use `createContext()` to create a context object:

```jsx
import { createContext } from 'react';
export const LanguageContext = createContext();
``` 

2. Provide the Context

```jsx
<LanguageContext.Provider value={{ language, toggleLanguage }}>
  {children}
</LanguageContext.Provider>

``` 
3. Consume the Context

Inside any child component, use the `useContext` hook to access the values:

```jsx
import { useContext } from 'react';
import { LanguageContext } from './context/LanguageProvider';

const { language, toggleLanguage } = useContext(LanguageContext);

``` 

## 🧪 Why use useContext?

- Simplifies prop drilling (no need to pass props through every component).

- Makes global state easier to manage and access.

- Keeps code cleaner and more maintainable.

## 📌 Example from this project

In this app, we use `useContext` to toggle the app's language between English (`en`) and Arabic (`ar`):

- `LanguageProvider` defines and provides the language context.

- `Greeting` consumes the context using `useContext` to show and switch the language.