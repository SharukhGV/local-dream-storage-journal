// import React, {  useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from '../firebase';
// import {  signOut } from "firebase/auth";
// import { Navigate } from 'react-router-dom';
// import DreamSound from "../Components/DreamSound"
 
const Home = () => {
    // const navigate = useNavigate();
// const [userShow, setUserShow]=useState(false)
// const [userShowNAME, setUserShowNAME]=useState('')

    const pixstyle= {
        fontSize:"15px"
    }
    // useEffect(()=>{
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //           // User is signed in, see docs for a list of available properties
    //           // https://firebase.google.com/docs/reference/js/firebase.User
    //           const uid = user.uid;
    //           setUserShow(true);
    //           setUserShowNAME(`Welcome Back ${user.email}`);
    //           // ...
    //           console.log("uid", uid)

    //         } else {
    //           // User is signed out
    //           // ...
    //           console.log("user is logged out");
    //           setUserShow(false);
    //           setUserShowNAME(`Sweet Dreams! See You Soon!`);

    //         }
    //       });
         
    // }, [])

    // function navigateLoginMENU(e) {
    //     e.preventDefault()
    //     navigate('/login')
    //   }

    //   function navigateSignUpMENU(e) {
    //     e.preventDefault()

    //     navigate('/signup')
    //   }
 
 

    // const handleLogout = () => {               
    //     signOut(auth).then(() => {
    //     // Sign-out successful.
    //         navigate("/");
    //         console.log("Signed out successfully")
    //     }).catch((error) => {
    //     // An error happened.
    //     });
    // }
    return(
      
<div className="cardContact">

    <div className="homePAge">
        <div className="spacerDIV"></div>
    <h1>Dream Catcher</h1>
    <p>A Dream Journal Focused on Simplicity</p>
    {/* <p style={pixstyle}>August Kekulé figured out the chemical configuration structure of Benzene. He notably says that he came about this discovery through a dream he had of a snake biting its own tail. August Kekulé, the scientist responsible for this contribution to field of organic chemistry has been proven to be correct today through various spectroscopic techniques.</p>  */}
    <p style={pixstyle}>Everyone has dreams! This application is a digital journal built to keep track of the dreams that you had while sleeping! In the section about Good dreams, bad dreams, or neutral dreams, it is totally up to User discretion to determine whether their dream was good or bad or neutral. An example of a good dream could be you wake up feeling happy and hopeful. An example of a bad dream could be waking up in a state of terror. A neutral dream could be something you dreamed about that happened in the previous day.
          </p>
    </div>
</div>
    )}
    
    export default Home