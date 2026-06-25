import React, { useContext, useState } from 'react'
import { BsCart, BsPersonPlus } from 'react-icons/bs'
import { RiLoginBoxFill } from 'react-icons/ri'
import { BsSearch } from 'react-icons/bs'
import { Link, NavLink } from 'react-router-dom'
import { MyThemeContext } from '../../App'

const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Services', to: '/services' },
]

const Header = () => {

	let { theme, setTheme } = useContext(MyThemeContext)

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

  return (
    <header className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
      theme === 'light' 
        ? 'bg-white text-slate-900 border-slate-200/70 shadow-lg shadow-slate-200/10' 
        : 'bg-slate-950/95 text-white border-slate-200/70 shadow-lg shadow-slate-950/10'
    } backdrop-blur`}>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-xl font-bold tracking-[0.25em] text-white">STORE FRONT</div>
            <p className="mt-1 text-xs uppercase tracking-[0.35em] text-slate-400">Simple React demo</p>
          </div>
        </div>

        <nav aria-label="Primary" className="flex flex-wrap items-center gap-2 md:justify-end">
				<NavLink to='/home' className={({ isActive }) => `rounded-full px-4 py-2 text-sm font-medium transition ${isActive ? (theme === 'light' ? 'bg-slate-900 text-white' : 'bg-white text-slate-950') : (theme === 'light' ? 'text-slate-600 hover:bg-slate-100' : 'text-slate-300 hover:bg-slate-800 hover:text-white')}`}>
					Home
				</NavLink>
				<NavLink to='/about' className={({ isActive }) => `rounded-full px-4 py-2 text-sm font-medium transition ${isActive ? (theme === 'light' ? 'bg-slate-900 text-white' : 'bg-white text-slate-950') : (theme === 'light' ? 'text-slate-600 hover:bg-slate-100' : 'text-slate-300 hover:bg-slate-800 hover:text-white')}`}>
					About
				</NavLink>
				<NavLink to='/services' className={({ isActive }) => `rounded-full px-4 py-2 text-sm font-medium transition ${isActive ? (theme === 'light' ? 'bg-slate-900 text-white' : 'bg-white text-slate-950') : (theme === 'light' ? 'text-slate-600 hover:bg-slate-100' : 'text-slate-300 hover:bg-slate-800 hover:text-white')}`}>
					Services
				</NavLink>
				<NavLink to='/counter' className={({ isActive }) => `rounded-full px-4 py-2 text-sm font-medium transition ${isActive ? 'bg-emerald-400 text-slate-950 shadow-sm' : (theme === 'light' ? 'text-slate-600 hover:bg-slate-100' : 'text-slate-300 hover:bg-slate-800 hover:text-white')}`}>
					Counter
				</NavLink>
				<NavLink to='/contact' className={({ isActive }) => `rounded-full px-4 py-2 text-sm font-medium transition ${isActive ? (theme === 'light' ? 'bg-slate-900 text-white' : 'bg-white text-slate-950') : (theme === 'light' ? 'text-slate-600 hover:bg-slate-100' : 'text-slate-300 hover:bg-slate-800 hover:text-white')}`}>
					Contact
				</NavLink>
				<button 
					onClick={toggleTheme}
					className={`rounded-full px-4 py-2 text-sm font-medium transition ${
						theme === 'light'
							? 'bg-slate-900 hover:bg-slate-800 text-white'
							: 'bg-slate-800 hover:bg-slate-700 text-white'
					}`}
				>
					{theme === 'light' ? 'Dark Mode' : 'Light Mode'}
				</button>
			</nav>
      </div>
    </header>
  )
}

export default Header