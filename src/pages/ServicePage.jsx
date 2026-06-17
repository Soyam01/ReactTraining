import React from 'react'
import { FaCode, FaPaintBrush, FaBullhorn } from 'react-icons/fa'

const ServicePage = () => {
  return (
    <section className="mx-auto min-h-[80vh] max-w-7xl px-6 py-10 md:px-10 lg:px-16">
      <div className="mb-10 max-w-2xl">
        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
          Our Services
        </p>
        <h1 className="mb-2 text-center text-4xl font-bold text-gray-900 md:text-5xl">
          What we can do for you
        </h1>
        <p className="mt-4 text-base leading-8 text-gray-700 md:text-lg">
          We build clean, modern, and practical solutions that help your ideas stand out and work smoothly across devices.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <article className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <div className="mb-5 inline-flex mx-auto h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl text-blue-700">
            <FaCode />
          </div>
          <h2 className=" text-2xl font-semibold text-gray-900">Web Development</h2>
          <p className="mt-3 leading-7 text-gray-600">
            Fast, responsive, and maintainable front-end experiences built with modern React workflows.
          </p>
        </article>

        <article className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <div className="mb-5 inline-flex mx-auto h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-2xl text-emerald-700">
            <FaPaintBrush />
          </div>
          <h2 className=" text-2xl font-semibold text-gray-900">UI Design</h2>
          <p className="mt-3 leading-7 text-gray-600">
            Clear layouts and polished visual systems that keep the interface easy to use and pleasant to explore.
          </p>
        </article>

        <article className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <div className="mb-5 inline-flex mx-auto h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-2xl text-amber-700">
            <FaBullhorn />
          </div>
          <h2 className=" text-2xl font-semibold text-gray-900">Digital Marketing</h2>
          <p className="mt-3 leading-7 text-gray-600">
            Practical content and promotion support designed to help the right people find your work.
          </p>
        </article>
      </div>
    </section>
  )
}

export default ServicePage