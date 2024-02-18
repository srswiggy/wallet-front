import { Button } from 'flowbite-react'
import '../App.css'
import React, { useState } from 'react'

function UserLogin () {
  const [inputUsername, setInputUsername] = useState()
  const [inputPassword, setInputPassword] = useState()

  const handleLoginSubmit = (username, pass) => {
    console.log(username)
    console.log(pass)
    localStorage.setItem('username', username)
    localStorage.setItem('password', pass)
    window.location.href = '/'
  }

  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='w-[30vw] bg-white p-12 rounded-lg'>
        <h1 className='text-3xl text-center pb-8 font-medium'>Sign In</h1>
      <form>
      <div className="mb-6">
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
        <input type="name" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Input Username" required onChange={(value) => { setInputUsername(value.target.value) }}/>
    </div>
    <div className="mb-6">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required onChange={(value) => { setInputPassword(value.target.value) }}/>
    </div>
    <div className='flex justify-center'>
    <Button className='px-8' size="lg" onClick={() => { handleLoginSubmit(inputUsername, inputPassword) }}>Submit</Button>

    </div>
      </form>
    </div>
    </div>
  )
}

export default UserLogin
