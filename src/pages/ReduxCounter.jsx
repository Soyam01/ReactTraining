import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ReduxCounter = () => {

let counterStore = useSelector((store) => {return store})
let count = counterStore.count

const dispatch = useDispatch()
  return (
    <div className='h-[80] flex justify-center items-center text-3xl'>
        <h1>     
            Counter : {count}
        </h1> 
        <button onClick={() => dispatch({type: "INCREASE"})}>INCREASE</button>   
        <button onClick={() => dispatch({type: "DECREASE"})}>DECREASE</button>   
        <button onClick={() => dispatch({type: "RESET"})}>RESET</button>   
    </div>
  )
}

export default ReduxCounter