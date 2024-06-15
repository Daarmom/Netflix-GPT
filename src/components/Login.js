import React, { useRef, useState } from 'react'
import Header from './Header'
import {checkValidData} from '../utils/validate'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import {auth} from '../utils/firebase.js'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice.js'
import { BG_IMG, USER_AVATAR } from '../utils/constants.js'

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const HandleButtonClick = ()=>{
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if(message) return;

    if(!isSignInForm){
      //Sign Up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value, photoURL: USER_AVATAR
        }).then(() => {
          // Profile updated!
          const {uid, email, displayName, photoURL} = auth.currentUser;
          dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
        }).catch((error) => {
          // An error occurred
          setErrorMessage(error.message);
        });

        // console.log(user);
        // navigate('/browse');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + " - " + errorMessage);
      });
    }else{
      //Sign In logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
      });
    }
  }

  const toggleSignInForm = () =>{
    setIsSignInForm(!isSignInForm);
  }
  return (

    <div>
      <Header/>
      <div className='absolute'>
        <img src={BG_IMG}
          alt='background-image'>
        </img>
      </div>
      <form onSubmit={e=>{e.preventDefault()}} className='w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </h1>
        {!isSignInForm && <input ref={name} type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'>
        </input>}
        <input ref={email} type='text' placeholder='Email Id' className='p-4 my-4 w-full bg-gray-700'>
        </input>
        <input ref={password} type='password' placeholder='password' className='p-4 my-4 w-full bg-gray-700'>
        </input>
        <p>{errorMessage}</p>
        <button onClick={HandleButtonClick} className='p-4 my-4 bg-red-700 w-full rounded-lg'>
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>
        <p className= 'py-4 cursor-pointer' onClick={toggleSignInForm}>
          {isSignInForm ? 'New to Netflix? Sign Up' : 'Already registered? Sign In'}
        </p>
      </form>
    
    </div>
  )
}

export default Login