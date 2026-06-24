import React from 'react'
import MyRouters from './MyRouters';
import { MyContextProvider } from './hooks/MyContext';

function App(){
  return (
    <>
    <MyContextProvider>
      <MyRouters />
    </MyContextProvider>
    </>
  )
}

export default App;

