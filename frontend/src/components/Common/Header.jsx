import React from 'react'
import Topbar from '../Layout/Topbar'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header>
    {/* topbar */}
    <Topbar/>
    {/* navbar */}
    <Navbar/>
    {/* cart drawer */}
    </header>
  )
}

export default Header