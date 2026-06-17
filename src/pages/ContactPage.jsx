import React from 'react'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'

const ContactPage = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10 md:px-10 lg:px-16">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
          Contact Us
        </p>
        <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
          Get in touch with us
        </h1>
        <p className="mt-4 text-base leading-8 text-gray-700 md:text-lg">
          Have a question, project idea, or support request? Send a message and we will get back to you as soon as possible.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-xl text-blue-700">
            <FaPhoneAlt />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">Call Us</h2>
          <p className="mt-2 text-gray-600">+1 234 567 890</p>
        </article>

        <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-xl text-emerald-700">
            <FaEnvelope />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">Email</h2>
          <p className="mt-2 text-gray-600">support@example.com</p>
        </article>

        <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-xl text-amber-700">
            <FaMapMarkerAlt />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">Location</h2>
          <p className="mt-2 text-gray-600">Open Monday to Friday</p>
        </article>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <form className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl">
          <h2 className="text-2xl font-semibold text-gray-900">Send a message</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            className="mt-4 w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
          />

          <textarea
            rows="6"
            placeholder="Write your message here"
            className="mt-4 w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
          />

          <button
            type="submit"
            className="mt-5 rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>

        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
          <div className="border-b border-gray-200 px-6 py-5">
            <h2 className="text-2xl font-semibold text-gray-900">Find us on the map</h2>
            <p className="mt-2 text-gray-600">You can locate our office below.</p>
          </div>

          <iframe
            title="Office Location"
            src="https://www.google.com/maps?q=New%20York&output=embed"
            className="h-105 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

export default ContactPage