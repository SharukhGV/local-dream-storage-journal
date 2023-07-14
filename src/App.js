import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { Switch } from "react-router-dom";
import Nav from "./Components/Nav";
import Edit from "./Pages/Edit";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import NewForm from "./Pages/NewForm";
import Show from "./Pages/Show";
import "./App.css";
import { useEffect } from "react";
// var dataJSON =  require("./Components/data.json")


// import SignIn from "./Components/auth/SignIn";
// import SignUP from "./Components/auth/SignUp";
// import PrivateRoute from "./Components/auth/PrivateRoute";
// import { AuthContextProvider } from "./Components/auth/AuthContext";
// window.localStorage.setItem("dataJSON",JSON.stringify(dataJSON))

function App() {
  

useEffect(()=>{

  if(window.localStorage.getItem("dataJSON")){

      window.localStorage.getItem("dataJSON");

  }else{
  window.localStorage.setItem("dataJSON", JSON.stringify([]));
  }
},[])

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route  path="/dreams" element={<Index />}>
        </Route>

        <Route  path="/dreams/:id" element={<Show />}>
        </Route>

        <Route  path="/dreams/:id/edit" element={<Edit />}>
        </Route>

        <Route  path="/dreams/new" element={<NewForm />}></Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
