import React, { useContext } from 'react'
import Student from '../components/layouts/Student'
import { MyContext } from '../hooks/MyContext'

const Classroom = () => {

    let msg = useContext(MyContext)

  return (
    <div>
        <h1>{msg}</h1>
        <Student name="shaktiman" roll="1"/>
        <Student name="ram" roll="2"/>
        <Student name="kalon" roll="3"/>
    </div>
  )
}

export default Classroom