import React from 'react'
import { NavLink } from 'react-router-dom'
import {ROUTES} from '../routes/routes';

export default function Navigation() {
  return (
    <>
      {/* Geen a href tags gebruiken, maar Link / NavLink componenten omdat a href tags de pagina opnieuw laden. */}
      <NavLink to={ROUTES.home.path}>Home</NavLink>
      <NavLink to={ROUTES.about.path}>About</NavLink>
      <NavLink to={ROUTES.contact.path}>Contact</NavLink>
      <NavLink to={ROUTES.blog.path}>Blog</NavLink>
    </>
  )
}
