import React from 'react'
import {Link,NavLink} from 'react-router-dom'

const Loginlout = () => {
  return (
    <>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
  <div class="container-fluid">
    
    <div class="collapse navbar-collapse" id="mynavbar">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <Link class="nav-link">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" >Contact</Link>
        </li>
      </ul>
      <form class="d-flex">       
    <li><Link to={'/login'} class="btn btn-primary" style={{marginRight:"10px"}} type="button">Login</Link></li>
      <li><Link to={'/logout'} class="btn btn-primary" type="button">Logout</Link></li>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Loginlout