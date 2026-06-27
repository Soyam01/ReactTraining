import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Post = () => {
    let params = useParams()
    //params - {id : 12}
    const id = params.id 
    
    let [post, setPost] = useState({})

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => setPost(response.data))
        .catch(error => console.log(error))
    }, [id])
  return (
    <div className='p-5 m-5 w-1/2 mx-auto shadow-lg'>
        <h2>{id}. {post.title}</h2>
        <p>
            {post.body}
        </p>
    </div>
  )
}

export default Post