import React from 'react'
import styles from './projects.module.css'

export default function Project({ project }) {
  return (
    <div className={styles.project}>
      <h1>{project.title}</h1>
      <img src={project.image} alt={project.title} />
      <p>{project.description}</p>
    </div>
  )
}
