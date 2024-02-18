import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserRegistration from './pages/UserRegistration'
import UserLogin from './pages/UserLogin'
import NotFound from './pages/NotFound'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'

function App () {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout></Layout>} >
                <Route index element={ <Dashboard/> }/>
                <Route path='/register' element={<UserRegistration />} />
                <Route path='/login' element={<UserLogin />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
