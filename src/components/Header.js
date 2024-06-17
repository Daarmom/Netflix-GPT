import React, { useEffect } from 'react'
import {onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from '../utils/firebase.js'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice.js';
import {LOGO, NETFLIX_LOGO, SUPPORTED_LANGUAGES} from '../utils/constants.js'
import { toggleGptSearchView } from '../utils/gptSlice.js';
import { changeLanguage } from '../utils/configSlice.js';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user)
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
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

  const handleGPTSearchClick = () =>{
    //Toggle GPT Search
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e) => {
    console.log(e);
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
        <img className='w-44 mx-auto md:mx-0' src={NETFLIX_LOGO}
        alt='logo'></img>

      {user && <div className='p-2 flex justify-between'>
        {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
        <button className='py-2 px-4 mx-2 my-2 rounded-lg bg-purple-800 text-white' onClick={handleGPTSearchClick}>
          {showGptSearch ? "Homepage" : "GPT Search"}
        </button>
        
        <img className="py-2 w-10 h-14" alt='UserIcon' src={LOGO}></img>
        {/* <img onClick={handleSignOut} alt='arrow' src="https://www.shutterstock.com/image-vector/down-arrow-vector-icon-isolated-600nw-1187766172.jpg"></img> */}
        
        <button onClick={handleSignOut} className='text-white font-bold px-2'>Sign Out</button>
      </div>}

    </div> 
  )
}

export default Header;