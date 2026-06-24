import React from 'react'

const Student = (props) => {
  return (
    <div className="p-10 text-2xl">
        <h1>    
            Name : {props.name}
        </h1>
        <h2>Roll no. : {props.roll}</h2>        
        <br/>
    </div>
  )
}

export default Student