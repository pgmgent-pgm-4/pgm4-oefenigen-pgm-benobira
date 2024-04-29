import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Blog() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        // Fetch the data from https://dummyjson.com/posts
        const url = 'https://dummyjson.com/posts';
        fetch(url)
            .then(response => response.json())
            .then(data => setPosts(data.posts))
            .catch(error => console.error(error));
    }, []);
  return (
    <>
        <h1>Blog</h1>
        {posts.map((post, index) => (
            <div key={`post-${index}`}>
                <Link to={`/blog/${post.id}`}>{post.title}</Link>
            </div>
        ))}
    </>
  )
}
