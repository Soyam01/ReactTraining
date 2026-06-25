import React, { useState, createContext } from 'react'
import MyRouters from './MyRouters';
import { MyContextProvider } from './hooks/MyContext';

export const MyThemeContext = createContext()

function App(){

  let [theme, setTheme] = useState('light')

  
  return (
    <>
    <MyThemeContext.Provider value={{theme, setTheme}}>
      <MyContextProvider>
        <MyRouters />
      </MyContextProvider>
    </MyThemeContext.Provider>
    </>
  )
}

export default App;

