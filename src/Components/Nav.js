import { NavLink } from "react-router-dom";
// import { useEffect,useState } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from '../firebase';
import brainHeart from "./brainHeart.png";
import { Link } from "react-router-dom";
function Nav() {
  // const [userShow, setUserShow]=useState(false)
  // const [userShowNAME, setUserShowNAME]=useState('')

  let activeStyle = {
    textDecoration:"none",
    color: "beige",
  };

  let nonactiveStyle = {
    textDecoration:"none",

    color: "limegreen",
  };

  // useEffect(()=>{
  //   onAuthStateChanged(auth, (user) => {
  //       if (user) {
  //         // User is signed in, see docs for a list of available properties
  //         // https://firebase.google.com/docs/reference/js/firebase.User
  //         const uid = user.uid;
  //         setUserShow(true);
  //         setUserShowNAME(`Welcome Back ${user.email}`);
  //         // ...
  //         console.log("uid", uid)

  //       } else {
  //         // User is signed out
  //         // ...
  //         console.log("user is logged out");
  //         setUserShow(false);
  //         setUserShowNAME(`Sweet Dreams! See You Soon!`);

  //       }
  //     });

  // }, [])

  return (
    <div> 
    <Link to="/"><img className="brain"
      style={{
        maxWidth: "25px",
        position: "absolute",
        left: "10px",
    top:"17px"
      }}
      src={brainHeart}
      alt="home logo button"
    /></Link>
    <nav className="navBar">
      <ul className="no-bullets">
        <li>
          {" "}
         
        </li>

        <li>
          <NavLink
            className="links"
            to="/dreams"
            exact="true"
            style={({ isActive }) => (isActive.isActive ? activeStyle : nonactiveStyle)}
          >
            All Dreams
          </NavLink>
        </li>

        <li>
          {" "}
          <NavLink
            className="links"
            to="/dreams/new"
            exact="true"
            style={({ isActive }) => (isActive.isActive ? activeStyle : nonactiveStyle)}
          >
            New Form
          </NavLink>
        </li>

        {/* <li> <NavLink
              className="links"
              to="/journal"
              exact="true"
              style={({ isActive }) =>
              isActive ? activeStyle : nonactiveStyle}
            >
              Journal
            </NavLink></li> */}

        {/* <li> <NavLink
              className="links"
              to="/login"
              exact="true"
              style={({ isActive }) =>
              isActive ? activeStyle : nonactiveStyle}
            >
              Login
            </NavLink></li> */}

        {/* <li> <NavLink
              className="links"
              to="/signup"
              exact="true"
              style={({ isActive }) =>
              isActive ? activeStyle : nonactiveStyle}
            >
              Sign Up
            </NavLink></li> */}
      </ul>
    </nav></div>
  );
}

export default Nav;
