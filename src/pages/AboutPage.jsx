import React from 'react'

const AboutPage = () => {
  return (
    <section className="mx-auto grid min-h-[80vh] max-w-7xl grid-cols-1 items-center gap-8 px-6 py-10 md:grid-cols-2 md:px-10 lg:px-16">
      <div className="max-w-xl">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
          About
        </h1>
        <p className="text-base leading-8 text-gray-700 md:text-lg">
          There was a time and a place for Stephanie to use her magic. The problem was that she had a difficult time determining this. She wished she could simply use it when the desire hit and there wouldn't be any unforeseen consequences. Unfortunately, that's not how it worked and the consequences could be devastating if she accidentally used her magic at the wrong time.
        </p>
      </div>

      <div className="flex justify-center md:justify-end">
        <img
          src="/image.png"
          alt="About visual"
          className="w-full max-w-130 rounded-2xl shadow-2xl"
        />
      </div>
    </section>
  )
}

export default AboutPage