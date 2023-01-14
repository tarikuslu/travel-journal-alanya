import React from 'react'
import earth from '../../public/earth.svg'
import '../styles/Nav-style.css'
export default function Nav() {
  return (
    <nav>
        <img src={earth} alt="" />
        <h1>travel point: alanya</h1>
    </nav>
  )
}
