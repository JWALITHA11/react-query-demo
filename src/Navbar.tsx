// import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <ul className='nav-items'>
        <li><Link to = "/source">Home</Link></li>
        <li><Link to = "/project">Login Form</Link></li>
        <li><Link to = "/query">Use Query</Link></li>
        <li><Link to = "/mutation">Use Mutation</Link></li>
        <li><Link to = "/props">Props</Link></li>
    </ul>
    </>
  )
}

export default Navbar