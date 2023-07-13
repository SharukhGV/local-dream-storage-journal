// import axios from "axios";
// import { useState, useEffect } from "react";
import Dream from "./Dream";
// var dataJSON =  require("./data.json")

function Dreams(){
   
      // const [dreams, setdreams] = useState([]);
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

let newObj = localStorage.getItem("dataJSON")
const dreams = JSON.parse(newObj)

      return (
        <table className="thedreamtable">
          <thead>
    <tr>
    <th>Dream Number</th>
    <th>Dream Name</th>
    <th>Topic</th>
  </tr></thead>
              {dreams.map((individualdreams, index) => {

                return (
                  
                  <Dream
                    key={individualdreams.id} id={individualdreams.id} date={individualdreams.date} name={individualdreams.name} isGoodQ={individualdreams.good_dream} description={individualdreams.dream_description} topic={individualdreams.topic} night={individualdreams.night} index={index}
                  />
                );
              })}
         
        </table>
      );
    }
    

export default Dreams;