import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    
        <footer class="py-3 bg-success mt-auto" >
    <ul class="nav justify-content-center border-bottom pb-3 mb-3 ">
      <li class="nav-item "><Link to="/" className="nav-link px-3 " style={{"fontSize":"20px","color":"white"}}>Home</Link></li>
      <li class="nav-item"><Link to="/login" className="nav-link px-3 " style={{"fontSize":"20px","color":"white"}}>Login</Link></li>
    </ul>
    <p class="text-center px-4" style={{"fontSize":"25px","color":"white"}}>FOODIE</p>
    <p class="text-center px-4" style={{"fontSize":"13px","color":"white"}}>Mumbai, India</p>
  </footer>
    
  )
}
