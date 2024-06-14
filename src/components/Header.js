import React from 'react'
import {signOut } from "firebase/auth";
import {auth} from '../utils/firebase.js'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user)
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/');
    }).catch((error) => {
      // An error happened.
      navigate('/error');
    });
  }
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
        <img className='w-44 mx-auto md:mx-0' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
        alt='logo'></img>
      {user && <div className='w-8 h-8 flex'>
        <img alt='UserIcon' src='https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg'></img>
        {/* <img alt='arrow' src='https://w7.pngwing.com/pngs/276/576/png-transparent-arrow-computer-icons-logo-white-down-arrow-miscellaneous-angle-rectangle.png'></img> */}
        <button onClick={handleSignOut} className='text-white font-bold'>Sign Out</button>
      </div>}
      
    </div>
    
  )
}

export default Header;