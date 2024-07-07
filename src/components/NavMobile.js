import React from 'react'
import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { SUPPORTED_LANGUAGES } from '../utils/constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from '../utils/store/configSlice';
import { auth } from '../utils/firebase';
import { toggleGptSearchView } from '../utils/store/gptSlice';
import { signOut } from 'firebase/auth';

const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, ()=>setOpen(false));
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleLanguageChange = (e) => {
    console.log(e);
    dispatch(changeLanguage(e.target.value));
  };

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

  return (
    <div ref={ref} className='md:hidden absolute bg-gradient-to-b from-black z-10'>
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
      <Hamburger toggled={isOpen} toggle={setOpen} size={20} color="#4FD1C5"/>
      {
        isOpen && 
          <div className=' fixed w-full bg-gradient-to-tr from-neutral-800'>
            <ul>
              <li onClick={() => setOpen((prev) => !prev)}
                className={
                      "flex items-center justify-between w-full p-5 rounded-xl bg-neutral-950"
                    }>
                <button className='py-2 px-4 mx-2 my-2 rounded-lg bg-purple-800 text-white' onClick={handleGPTSearchClick}>
                  {showGptSearch ? "Homepage" : "GPT Search"}
                </button>
              </li>

              <li onClick={() => setOpen((prev) => !prev)}
                className={
                      "flex items-center justify-between w-full p-5 rounded-xl bg-neutral-950"
                    }>
                <a onClick={handleSignOut} className='text-white font-bold px-2'>Sign Out</a>
              </li>
            </ul>
            
            
          </div>
      }
    </div>
  )
}

export default NavMobile