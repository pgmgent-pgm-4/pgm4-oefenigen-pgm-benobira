import React from 'react'
import { NavLink } from 'react-router-dom'
import {ROUTES} from '../routes/routes';

export default function Navigation() {
  return (
    <>
        <NavLink to={ROUTES.home.path}>{ROUTES.home.title}</NavLink>
        <NavLink to={ROUTES.login.path}>{ROUTES.login.title}</NavLink>
    </>
  )
}