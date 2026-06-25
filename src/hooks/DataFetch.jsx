import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const DataFetch = () => {
    let [post, setPosts] = useState([])
    let [length, setLength] = useState(20)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((response) => {
            return response.json()
        })
        .then(data => setPosts(data.slice(0,length)))
        .catch((error) => {console.log(error)})
    }, [])

  return (
    <div>
        {
            post.map((post) => {
                return <div className='p-5 shadow-2xl rounded-2xl' key={post.id}>
                        <Link to={`/post/${post.id}`}>{post.id}. {post.title}</Link>
                    </div>
            })
        }
        {
            length < 100 ? 
            <button onClick={() => setLength(length + 20)}>SHOW MORE</button>
            :
            <div>ALL POST LOADED</div>
        }
        {
            length > 20 && 
            <button>Show Less</button>
        }
    </div>
  )
}

export default DataFetch