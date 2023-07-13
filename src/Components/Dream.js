// import { useState } from "react";
import { Link } from "react-router-dom";
// import DreamDetails from "./DreamDetails";
function Dream({ individualdreamID, id, isGoodQ, name, date, description, topic, night, index }) {
  // const { v4: uuidv4 } = require('uuid');
//   const {id} = useParams();
//   const [show, setShow] = useState(false);   @@@@@@@@@@@@@@@@@
// //   const navigate = useNavigate();
// const API = process.env.REACT_APP_API_URL;

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

// console.log(id)
// console.log(name)
// console.log(index)

// {/* <a href={`${API}/dreams/${id}`}>{name}</a> */}
  return (
    <>
<tbody>
    <tr>
        <td>{index+=1}</td>
    <td><Link to={`/dreams/${id}`}>{name}</Link>
</td>
    <td>{topic}</td>
    </tr>
    </tbody>

</>


  );
}

export default Dream;