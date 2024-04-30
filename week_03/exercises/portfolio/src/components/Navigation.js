import React from 'react'
import styles from './navigation.module.css'
import { NavLink } from 'react-router-dom'
import {ROUTES} from '../routes/routes';

export default function Navigation() {
  return (
    <nav className={styles.mainNav}>
      {/* Geen a href tags gebruiken, maar Link / NavLink componenten omdat a href tags de pagina opnieuw laden. */}
      <NavLink to={ROUTES.home.path}>Home</NavLink>
      <NavLink to={ROUTES.about.path}>About</NavLink>
      <NavLink to={ROUTES.contact.path}>Contact</NavLink>
      <NavLink to={ROUTES.projects.path}>Projects</NavLink>
      <NavLink to={ROUTES.resume.path}>Resume</NavLink>
    </nav>
  )
}