import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const ReduxPersons = () => {
    // let personStore = useSelector(store => store)

    // let name = useSelector(store => store.name)
    // let phone = useSelector(store => store.phone)

    let [nam, setName] = useState('')
    let [phon, setPhone] = useState('')
    
    let { name, phone } = useSelector(store => store)

    const updatePhone = e => {
        setPhone(e.target.value)
    }
    return (
        <div className='flex justify-center items-center flex-col h-[70vh]'>
            <h1>NAME: {name}</h1>
            <input type="text" className='border' placeholder='enter name' onChange={e => setName(e.target.value)}/>
            <button className='btn btn-light'>Update Name</button>
            
            <h2>PHONE: {phone}</h2>
            <input type="text" className='border' placeholder='enter phone' onChange={updatePhone}/>
            <button className='btn btn-light'>Update Phone</button>
        </div>
    )
}

export default ReduxPersons