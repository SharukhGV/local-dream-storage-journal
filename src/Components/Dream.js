// import { useState } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import DreamDetails from "./DreamDetails";
function Dream({ individualdreamID,individualdreams, id, isGoodQ, name, date, description, topic, night, index }) {
  // const { v4: uuidv4 } = require('uuid');
//   const {id} = useParams();
//   const [show, setShow] = useState(false);   @@@@@@@@@@@@@@@@@

useEffect(()=>{
  // window.localStorage.setItem("dataJSON", JSON.stringify([]));

  window.localStorage.getItem("dataJSON");
},[])

// //   const navigate = useNavigate();
// const API = process.env.REACT_APP_API_URL;
const [dreams7, setdreams7] = useState([]);

useEffect(()=>{

    
  // let newObj = window.localStorage.getItem("dataJSON")
window.localStorage.setItem(`${individualdreams.id}`,JSON.stringify(individualdreams))
  // setdreams7(JSON.parse(window.localStorage.getItem("dataJSON")))
  setdreams7(JSON.parse(window.localStorage.getItem(`${individualdreams.id}`)))
    

},[individualdreams])
//   useEffect(() => {
//     axios
//       .get(`${API}/dreams/${individualdreamID}`)
//       .then((response) => {
//         setdream(response.data);
//       })
//       .catch((err) => {
//         // navigate("/not-found");
//         console.log(err);
//       });
//   }, [API,individualdreamID]);
console.log(dreams7)
// console.log(id)
// console.log(name)
// console.log(index)

// {/* <a href={`${API}/dreams/${id}`}>{name}</a> */}
  return (
    <>
<tbody>
    <tr>
        <td>{index+=1}</td>
    <td><Link to={`/dreams/${dreams7.id}`}>{dreams7.name}</Link>
</td>
    <td>{dreams7.topic}</td>
    </tr>
    </tbody>


</>


  );
}

export default Dream;