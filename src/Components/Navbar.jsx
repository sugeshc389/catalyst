import React from 'react'
import '../Styles/Navbar.css'

const Navbar = () => {
  return (

    <div className="container teal borderYtoX">
      <div className='logo'>Logo</div>
      <div >
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
       
      </div>
      <div className='line'></div>

    </div>


  )
}

export default Navbar
