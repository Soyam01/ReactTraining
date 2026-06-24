import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <div className="flex bg-slate-300 flex-col md:flex-row py-1.25">
            <div className="logo w-full md:w-1/4 text-center text-2xl font-bold text-blue-700 cursor-pointer">STORE FRONT</div>
            <div className="sear w-full md:w-1/4">
                <input type="search" name="" id="" />
                <button>Search</button>
                
            </div>
        </div>
        <div className='bg-slate-200 sticky top-0 z-99'>
            <div className="flex justify-evenly w-1/2 m-auto py-4">
				<Link to='/home' className='hover:text-slate-900'>Home</Link>
				<Link to='/about' className='hover:text-slate-900'>ABOUT</Link>
				<Link to='/services' className='hover:text-slate-900'>SERVICES</Link>
              <Link to='/counter' className='hover:text-slate-900'>COUNTER</Link>
				<Link to='/blogs' className='hover:text-slate-900'>BLOGS</Link>
				<Link to='/contact' className='hover:text-slate-900'>CONTACT</Link>
			</div>
        </div>
    </>
  )
}

export default Header