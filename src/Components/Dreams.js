// import axios from "axios";
import { useState, useEffect } from "react";
import Dream from "./Dream";
// var dataJSON =  require("./data.json")

function Dreams(){
         const [dreams7, setdreams7] = useState([]);

         useEffect(()=>{
          // window.localStorage.setItem("dataJSON", JSON.stringify([]));
        
          window.localStorage.getItem("dataJSON");
        },[])



  useEffect(()=>{
    
    let newObj = window.localStorage.getItem("dataJSON")

    setdreams7(JSON.parse(newObj))
    

  },[])
      // const API = process.env.REACT_APP_API_URL;
      // useEffect(()=>{
      //         let newObj = JSON.parse(localStorage.getItem("dataJSON"))

      //   setdreams(newObj)
      // },[])
      // let newObj = JSON.parse(localStorage.getItem("dataJSON"))
      // useEffect(() => {
// console.log(newObj)

      //   fetch(dataJSON)
      //     .then((response) => setdreams(response.data))
      //     .catch((e) => console.error("catch", e));
      // }, []);

      // localStorage.setItem("dataJSON",JSON.stringify(dataJSON))
      // let dreamCLOUD7 = localStorage.getItem("dataJSON")
      // let dreamCLOUD9 = JSON.parse(dreamCLOUD7)
// console.log(dreamCLOUD9)



      return (
        <table className="thedreamtable">
          <thead>
    <tr>
    <th>Dream Number</th>
    <th>Dream Name</th>
    <th>Topic</th>
  </tr></thead>
              {!!dreams7 ? dreams7.map((individualdreams, index) => {

                return (
                  
                  <Dream
                    key={individualdreams.id} individualdreams={individualdreams} id={individualdreams.id}  name={individualdreams.name}  topic={individualdreams.topic} night={individualdreams.night} index={index}
                  />
                );
              }):<div></div>}
         
        </table>
      );
    }
    

export default Dreams;