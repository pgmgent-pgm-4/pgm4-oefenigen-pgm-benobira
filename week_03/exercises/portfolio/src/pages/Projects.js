import React from 'react'
import Project from './Project'
import styles from './projects.module.css'

export default function Projects() {
  const projects = [
    {
      title: 'Project 1',
      description: 'This is a description of project 1',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Project 2',
      description: 'This is a description of project 2',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Project 3',
      description: 'This is a description of project 3',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Project 4',
      description: 'This is a description of project 4',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Project 5',
      description: 'This is a description of project 5',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Project 6',
      description: 'This is a description of project 6',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Project 7',
      description: 'This is a description of project 7',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Project 8',
      description: 'This is a description of project 8',
      image: 'https://via.placeholder.com/150'
    }
  ]
  return (
    <section>
      <h1>Projects</h1>
      <section className={styles.projects}>
      {projects.map((project, index) => (
        <Project key={`project-${index}`} project={project}/>
      ))}
      </section>
    </section>
  )
}
