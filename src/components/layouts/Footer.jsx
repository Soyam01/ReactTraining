import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 md:grid-cols-3 md:px-6">
        <div>
          <h2 className="text-lg font-semibold tracking-[0.2em] text-white">STORE FRONT</h2>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
            A small React app with a clean layout, reusable routes, and a simple counter page.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-white">Quick Links</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            <Link to="/home" className="transition hover:text-white">Home</Link>
            <Link to="/services" className="transition hover:text-white">Services</Link>
            <Link to="/counter" className="transition hover:text-white">Counter</Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-white">Contact</h3>
          <div className="mt-4 space-y-2 text-sm text-slate-400">
            <p>Built for practice and experimentation.</p>
            <p>React Router + Tailwind CSS</p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 px-4 py-4 text-center text-xs uppercase tracking-[0.25em] text-slate-500 md:px-6">
        © 2026 Store Front. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer