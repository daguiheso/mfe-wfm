import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ signedIn, onSignOut }) => {
  const onClick = () => {
    if (signedIn && onSignOut) {
      onSignOut();
    }
  };

  return (
    <header className='header bg-warning'>
      <div className='container'>
        <div className='d-flex justify-content-lg-between py-3'>
          <div className='col-3 d-flex align-items-center'>
            <p className='mb-0 text-white'>Expert</p>
          </div>
          <div className='col-6 d-flex justify-content-end'>
            <ul className='d-flex mb-0 pl-0'>
              <li className='list-group-item p-2 d-flex align-items-center'>
                <Link className='text-white' to='/pricing'>daguiheso</Link>
              </li>
              <li className='list-group-item p-2'>
                <Link className='text-white' to='/' onClick={onClick}>
                  <button className='btn btn-outline-primary'>
                    {signedIn ? '/' : 'Login'}
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header