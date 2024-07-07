import React from 'react'
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';

const Header = () => {
  
  return (
    <div className=''>
      <NavDesktop/>
      <NavMobile/>
    </div>
  )
}

export default Header;