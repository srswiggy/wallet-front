import { Outlet, Link } from 'react-router-dom'
import React from 'react'

const Layout = () => {
  const logout = () => {
    localStorage.removeItem('username')
    localStorage.removeItem('password')
    window.location.href = '/login'
  }
  return (
    <div className='bg-gray-200'>
      <nav className='bg-slate-500 w-screen absolute flex justify-between'>
        <ul className='flex gap-6 py-4 px-10 text-white font-semibold'>
          <li>
            <Link to="/">Home</Link>
          </li>
          {!localStorage.getItem('username')
            ? <div className='flex gap-6'>
          <li>
            <Link to="/register">User Registration</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li></div>
            : null}
        </ul>
        {localStorage.getItem('username') ? <button className='py-4 px-10 text-white' onClick={() => logout()}>Logout</button> : null }
      </nav>

      <Outlet />
    </div>
  )
}

export default Layout
