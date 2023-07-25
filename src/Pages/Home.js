// import React, {  useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from '../firebase';
// import {  signOut } from "firebase/auth";
// import { Navigate } from 'react-router-dom';
// import DreamSound from "../Components/DreamSound"
// import jsPDF from 'jspdf';
import DownloadPDFButton from '../Components/DownloadPDFButton';
import dreamLogo from "./dreamlogo.png"
const Home = () => {
    // const navigate = useNavigate();
// const [userShow, setUserShow]=useState(false)
// const [userShowNAME, setUserShowNAME]=useState('')

    const pixstyle= {
        fontSize:"15px"
    }


    // const pixstyle7 ={
    //     fontSize:"7px"
    // }
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
<div class="background-container">
<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png" alt=""></img>
<div class="stars"></div>
<div class="twinkling"></div>
<div class="clouds"></div>
</div>
    <div className="homePAge">
    <img id="dreamLogo" src={dreamLogo} alt="website dream catcher logo"></img>
    <p>A Dream Journal Focused on Simplicity</p>
    {/* <p style={pixstyle7}>© COPYRIGHT 2023 Sharukh Velupillai</p>
    <p style={pixstyle7}>Background by Anastasia Goodwin</p> */}

    {/* <p style={pixstyle}>August Kekulé figured out the chemical configuration structure of Benzene. He notably says that he came about this discovery through a dream he had of a snake biting its own tail. August Kekulé, the scientist responsible for this contribution to field of organic chemistry has been proven to be correct today through various spectroscopic techniques.</p>  */}
    <p style={pixstyle}>Everyone has dreams! This application is a digital journal built to keep track of the dreams that you had while sleeping! In the section about good dreams, bad dreams, or neutral dreams, it is totally up to User discretion to determine whether their dream was good or bad or neutral. An example of a good dream could be you wake up feeling happy and hopeful. An example of a bad dream could be waking up in a state of terror. A neutral dream could be something you dreamed about that happened in the previous day.
          </p>
    </div>
  <div className='buttonPDF'> <DownloadPDFButton/></div> 
</div>
    )}
    
    export default Home