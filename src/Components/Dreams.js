// import axios from "axios";
import { useEffect,useState } from "react";
import Dream from "./Dream";
// import vault from "./vault.png"
import DownloadJSON from "./DownloadJSON";
// var dataJSON =  require("./data.json")
// import { useNavigate } from "react-router-dom";
import DownloadPDFButton from "./DownloadPDFButton";
function Dreams({fileData}){
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
<h1>All Dreams</h1>
                 <div>Your Dreams are stored locally on your browser. You can choose to download your data as a PDF (for your records) or JSON File (for reupload). To clear all dreams, you can clear the data on your browser. This app utilizes local storage instead of an external database to protect your privacy. </div>
                 {/* <div>Source Code can be found here: https://github.com/SharukhGV/local-dream-storage-journal </div> */}
{/* <img src={vault} alt="Dram Title for All dreams called Dream Vault"></img> */}

<div className="cardContact">

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
        <DownloadPDFButton />
        <DownloadJSON fileData={fileData} />

     </div></div>
      );
    }
    

export default Dreams;