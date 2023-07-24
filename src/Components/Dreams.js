// import axios from "axios";
import { useEffect,useState } from "react";
import Dream from "./Dream";
import vault from "./vault.png"
// var dataJSON =  require("./data.json")
// import { useNavigate } from "react-router-dom";
function Dreams(){
         const [dreams7, setdreams7] = useState([]);

        // const navigate = useNavigate();


  useEffect(()=>{
//  window.localStorage.getItem('dataJSON')
  const newObj =  JSON.parse(window.localStorage.getItem('dataJSON'))    
// window.localStorage.getItem('dataJSON')
    setdreams7(newObj)

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

          <div className="cardContact">

                  {/* <div className="spacerDIV"></div> */}
        {/* <div  className="spacerDIV"><strong>🛏️ DREAM VAULT 💭</strong></div> */}
<img src={vault} alt="Dram Title for All dreams called Dream Vault"></img>
                  {/* <div className="spacerDIV"></div> */}

<div className="cardContact">
<div class="background-container">
<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png" alt=""></img>
<div class="stars"></div>
<div class="twinkling"></div>
<div class="clouds"></div></div>
        <table className="thedreamtable">
          <thead>
    <tr>
    <th>Dream Number</th>
    <th>Dream Name</th>
    <th>Topic</th>
  </tr></thead>
              { dreams7.map((individualdreams, index) => {

                return (
                  
                  <Dream
                    key={individualdreams.id} individualdreams={individualdreams} id={individualdreams.id}  name={individualdreams.name}  topic={individualdreams.topic} night={individualdreams.night} index={index}
                  />
                );
              })}
         
        </table>
     </div></div>
      );
    }
    

export default Dreams;