import React from 'react'
import './Header.css'
function Header(){
  return(
    <header>
      <span>Home</span>
      <span className='right'>Login</span>
      <span className='right'>Register</span>
    </header>
  )
}
export default Header;
