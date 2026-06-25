import React, { useEffect, useState } from 'react'

const DataFetch = () => {
    let [post, setPosts] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((response) => {
            return response.json()
        })
        .then(data => setPosts(data))
        .catch((error) => {console.log(error)})
    }, [])

  return (
    <div>
        {
            post.map((post) => {
                return <div className='p-5 shadow-2xl rounded-2xl'>
                        <h2>{post.id}. {post.title}</h2>
                        <p>{post.body}</p>
                    </div>
            })
        }
    </div>
  )
}

export default DataFetch