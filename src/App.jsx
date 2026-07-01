import React, { useState, createContext } from 'react'
import MyRouters from './MyRouters';
import { MyContextProvider } from './hooks/MyContext';
import { Provider } from 'react-redux';
import myStore from './redux/myStore';

export const MyThemeContext = createContext()

function App(){

  let [theme, setTheme] = useState('light')

  
  return (
    <>
    <Provider store={myStore}>

      <MyThemeContext.Provider value={{theme, setTheme}}>
        <MyContextProvider>
          <MyRouters />
        </MyContextProvider>
      </MyThemeContext.Provider>
    </Provider>
    </>
  )
}

export default App;

