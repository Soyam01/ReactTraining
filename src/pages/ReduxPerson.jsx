import React from 'react'
import { useSelector } from 'react-redux'

const ReduxPerson = () => {

let {name, phone } = useSelector(store => store)  

  return (
    <div>
        <h1>NAME: {name}</h1>
        <H2>PHONE: {phone}</H2>
    </div>
  )
}

export default ReduxPerson