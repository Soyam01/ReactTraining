import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
        <Header />
        <section style={{minHeight: '80vh'}}>
            <Outlet />
        </section>
       <Footer /> 
    </>
  )
}

export default Layout