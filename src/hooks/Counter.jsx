import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(0)

  return (
    <>
    <div className='h-[80vh] flex justify-center items-center text-4xl flex-col gap-6'>
        <div>Count: {count}</div>

        <div className='flex gap-4 text-base'>
          <button onClick={() => setCount((currentCount) => currentCount + 1)} className='bg-blue-500 hover:bg-blue-300 active:bg-blue-600 px-4 py-2 uppercase text-white rounded'>
            Increment
          </button>

          <button onClick={() => setCount((currentCount) => currentCount - 1)} className='bg-red-500 hover:bg-red-300 active:bg-red-600 px-4 py-2 uppercase text-white rounded'>
            Decrement
          </button>

          <button onClick={() => setCount(0)} className='bg-gray-700 hover:bg-gray-500 active:bg-black-800 px-4 py-2 uppercase text-white rounded'>
            Reset
          </button>
        </div>
    </div>
    <div className='h-[80vh] flex justify-center items-center text-4xl flex-col gap-6'>
        <div>Data: {data}</div>

        <div className='flex gap-4 text-base'>
          <button onClick={() => setData((currentCount) => currentCount + 100)} className='bg-blue
          -500 hover:bg-blue-300 active:bg-blue-600 px-4 py-2 uppercase text-white rounded'>
            Increment
          </button>

          <button onClick={() => setData((currentCount) => currentCount - 100)} className='bg-red-500 hover:bg-red-300 active:bg-red-600 px-4 py-2 uppercase text-white rounded'>
            Decrement
          </button>

          <button onClick={() => setData(0)} className='bg-gray-700 hover:bg-gray-500 active:bg-black-800 px-4 py-2 uppercase text-white rounded'>
            Reset
          </button>
        </div>
    </div>
    </>
  )
}

export default Counter