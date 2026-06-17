import React from 'react'
import RevisionHeader from './Revision'
import { Outlet } from 'react-router-dom'

const RivisionLayout = () => {
  return (
    <>
        <RevisionHeader />
        <Outlet />
    </>
  )
}

export default RivisionLayout