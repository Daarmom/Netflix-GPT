import React, { useEffect } from 'react'
import {onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from '../utils/firebase.js'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice.js';
import {LOGO} from '../utils/constants.js'
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user)

  //Imperative function that can return a cleanup function
  useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const {uid, email, displayName} = user;
            dispatch(addUser({uid: uid, email: email, displayName: displayName}));
            navigate('/browse');
          } else {
            // User is signed out
            dispatch(removeUser());
            navigate('/');
        }
        });
        //Unsubscribe when component unmounts
        return ()=>unsubscribe();
    }, [])

  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful. OnAuthStateChanged will be called.
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
        <img className='w-44 mx-auto md:mx-0' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
        alt='logo'></img>
      {user && <div className='w-8 h-8 flex'>
        <img alt='UserIcon' src={LOGO}></img>
        {/* <img alt='arrow' src='https://w7.pngwing.com/pngs/276/576/png-transparent-arrow-computer-icons-logo-white-down-arrow-miscellaneous-angle-rectangle.png'></img> */}
        <button onClick={handleSignOut} className='text-white font-bold'>Sign Out</button>
      </div>}
      
    </div>
    
  )
}

export default Header;