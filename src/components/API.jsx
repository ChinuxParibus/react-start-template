import React from 'react'
import '../loader.css'

export default function API() {
  const [posts, setPosts] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'GET'
    }).then((response) => {
      return response.json()
    }).then((data) => {
      setPosts(data)
      setIsLoading(false)
    }).catch((error) => {
      /* Error */
    })
  }, [])

  return (
    <div className="container">
      {
        isLoading
        ? <div className="d-flex justify-content-center mt-4">
            <div className="lds-spinner">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        : posts.map(post => {
          return (
            <div key={post.id} className="card my-2">
              <div className="card-body">
                <h1 className="lead">{post.title}</h1>
                <p>{post.body}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}