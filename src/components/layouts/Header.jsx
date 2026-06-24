import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-slate-950/95 text-white shadow-lg shadow-slate-950/10 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-xl font-bold tracking-[0.25em] text-white">STORE FRONT</div>
            <p className="mt-1 text-xs uppercase tracking-[0.35em] text-slate-400">Simple React demo</p>
          </div>
        </div>

        <nav aria-label="Primary" className="flex flex-wrap items-center gap-2 md:justify-end">
				<NavLink to='/home' className={({ isActive }) => `rounded-full px-4 py-2 text-sm font-medium transition ${isActive ? 'bg-white text-slate-950 shadow-sm' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}`}>
					Home
				</NavLink>
				<NavLink to='/about' className={({ isActive }) => `rounded-full px-4 py-2 text-sm font-medium transition ${isActive ? 'bg-white text-slate-950 shadow-sm' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}`}>
					About
				</NavLink>
				<NavLink to='/services' className={({ isActive }) => `rounded-full px-4 py-2 text-sm font-medium transition ${isActive ? 'bg-white text-slate-950 shadow-sm' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}`}>
					Services
				</NavLink>
				<NavLink to='/counter' className={({ isActive }) => `rounded-full px-4 py-2 text-sm font-medium transition ${isActive ? 'bg-emerald-400 text-slate-950 shadow-sm' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}`}>
					Counter
				</NavLink>
				<NavLink to='/contact' className={({ isActive }) => `rounded-full px-4 py-2 text-sm font-medium transition ${isActive ? 'bg-white text-slate-950 shadow-sm' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}`}>
					Contact
				</NavLink>
			</nav>
      </div>
    </header>
  )
}

export default Header