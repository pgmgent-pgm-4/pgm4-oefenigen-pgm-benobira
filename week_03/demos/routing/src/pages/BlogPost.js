import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function BlogPost() {
    const {postId} = useParams();
    const [post, setPost] = useState([]);
    useEffect(() => {
        // Fetch the data from https://dummyjson.com/posts
        const url = `https://dummyjson.com/posts/${postId}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setPost(data))
            .catch(error => console.error(error));
    }, [postId]);
  return (
    <div>
        {post && (
            <>
                <h2>{post.title}</h2>
                <div>{post.tags?.join(" - ")}</div>
                <p>{post.body}</p>
            </>
        )}
    </div>
  )
}
