import React from 'react'
import { Link } from 'react-router-dom'

export default ({ currentUser, user }) => {
  return (
    <nav className='nav'>
      <div className='float-left'>
        <span className='nav-link nav-title'>Skate More</span>
      </div>
      <div className='float-right'>
        {currentUser
          ? (
            <span className='navtext'>
              <Link className='nav-link' to='/Profile'>Profile</Link>
              <Link className='nav-link' to='/logout'>Logout</Link>
              <Link className='nav-link' to='/edit'>Edit Profile</Link>
              <Link className='nav-link' to='/'>Map</Link>
            </span>
          )
          : (
            <span className='navtext'>
              <Link className='nav-link' to='/signup'>SignUp</Link>
              <Link className='nav-link' to='/login'>Login</Link>
              <Link className='nav-link' to='/'>Map</Link>
            </span>
          )
        }
      </div>
    </nav>
  )
}
