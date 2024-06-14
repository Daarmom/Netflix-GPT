import React from 'react'

export const checkValidData = (email, password) => {
  
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  
    if(!isEmailValid) return 'Email Id is Invalid';
    if(!isPasswordValid) return 'Password is Invalid';
    return null;
};
