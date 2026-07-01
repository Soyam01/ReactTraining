import React from 'react'
import { useSelector } from 'react-redux'

const ReduxCounter = () => {

let counterStore = useSelector((store) => {return store})
let count = counterStore.count


  return (
    <div className='h-[80] flex justify-center items-center text-3xl'>
        <h1>     
            Counter : {count}
        </h1>    
    </div>
  )
}

export default ReduxCounter