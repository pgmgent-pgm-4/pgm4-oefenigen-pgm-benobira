import React from 'react'
import Author from './Author'

export default function Post({title, author, synopsis, story, publishDate}) {
  return (
    <div>
      <h2>{title}</h2>
      <Author name={author.name} picture={author.picture} />
      <p>{synopsis}</p>
      <p>{story}</p>
      <p>{publishDate}</p>
    </div>
  )
}
