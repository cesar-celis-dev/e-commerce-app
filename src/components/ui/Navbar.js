import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>

      <div className='divnavbar'>
        <div className='navbarbtn'>
          <Link to="/">
            <button className='btnnav'>Home</button>
          </Link>
        </div>
        <div className='navbarbtn'>
          <Link to="/order">
            <button className='btnnav'>Order</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
