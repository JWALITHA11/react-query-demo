// import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <ul className='nav-items'>
        <li><Link to = "/source">Home</Link></li>
        <li><Link to = "/project">Login Form</Link></li>
    </ul>
    </>
  )
}

export default Navbar