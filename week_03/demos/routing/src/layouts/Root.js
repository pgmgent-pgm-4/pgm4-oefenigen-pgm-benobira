import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'

export default function Root() {
  return (
    <>
        <Navigation />
        <main>
            {/* Hier komt de content van de pagina */}
            <Outlet />
        </main>
    </>
  )
}
