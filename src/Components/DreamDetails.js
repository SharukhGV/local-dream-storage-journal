import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
import moment from "moment";
function DreamDetails({ individualdreams, index }) {
  const { id } = useParams();

const[dream9, setdream9] = useState([])

  function getObjectSpecific(objects, id) {
    // return Object.keys(obj).find(key => obj[key] === value);
    let targetObject = null;

    // Iterate through the array of objects
    for (let i = 0; i < objects.length; i++) {
      if (objects[i].id === id) {
        targetObject = objects[i];
        break;
      }
    }

    // Check if the object with the given ID was found
    if (targetObject !== null) {
      // Retrieve the object
      return targetObject;
    } else {
      // Object with the given ID not found
      return null;
    }
  }



// const [night9,setNight9]=useState([])

//   useEffect(()=>{
//     // window.localStorage.setItem("dataJSON", JSON.stringify([]));
    
    
//     if(dream.night===true) {setNight9(true)}
//     else{setNight9(false)}

//     // window.localStorage.getItem("dataJSON");
//   },[dream.night])









//  {/* <p>THE THREE TYPES OF ISLAMIC DREAMS
// Dreams are broken into three parts according to the Sunnah:
// Ru'yaa - good visions (dreams)
// Hulum - bad dreams
// Dreams from one's self</p> */}
  // const [dream, setdreams] = useState([]);
  // const API = process.env.REACT_APP_API_URL;
  // useEffect(()=>{
  //         let newObj = JSON.parse(window.localStorage.getItem("dataJSON"))
  //     let newObjsingle = getObjectKey(newObj, id)
  //   setdreams(newObjsingle)
  // },[id])
  // const {name} = useParams();
  // const {good_dream} = useParams();
  // const {dream_description} = useParams();
  // const {topic} = useParams();
  // const {date} = useParams();
  // const {night} = useParams();

  // console.log(id)
  // const API = process.env.REACT_APP_API_URL;
  // const [dream, setdream] = useState([]);
  const navigate = useNavigate();
  const [thecolor, setthecolor] = useState("white");

  // let newObj = JSON.parse(window.localStorage.getItem("dataJSON"));

  // function getObjectSpecific(objects, id) {
  //   // return Object.keys(obj).find(key => obj[key] === value);
  //   let targetObject = null;

  //   // Iterate through the array of objects
  //   for (let i = 0; i < objects.length; i++) {
  //     if (objects[i].id === id) {
  //       targetObject = objects[i];
  //       break;
  //     }
  //   }

  //   // Check if the object with the given ID was found
  //   if (targetObject !== null) {
  //     // Retrieve the object
  //     return targetObject;
  //   } else {
  //     // Object with the given ID not found
  //     return null;
  //   }
  // }

  let newObj = JSON.parse(window.localStorage.getItem("dataJSON"));

let dream = getObjectSpecific(newObj,id)
// console.log(dream)
  // console.log(getObjectKey(newObj,id))
  // getObjectKey(newObj,id)

  // /change name, topic, etc. to an actual value and not a string



  useEffect(()=>{
    // window.localStorage.setItem("dataJSON", JSON.stringify([]));
  
    window.localStorage.getItem("dataJSON");

    let newObj = JSON.parse(window.localStorage.getItem("dataJSON"));
    let dream = getObjectSpecific(newObj,id)
    setdream9(dream)

  },[id])

  // const dream = getObjectKey(newObj, id);

  // {
  //   // id: `${JSON.parse(window.localStorage.getItem("dataJSON"))}.${getObjectKey(newObj,id)}`,
  //   // name: `${JSON.parse(window.localStorage.getItem("dataJSON"))}.${getObjectKey(newObj,"name")}`,
  //   // good_dream: `${JSON.parse(window.localStorage.getItem("dataJSON"))}.${getObjectKey(newObj,"good_dream")}`,
  //   // dream_description: `${JSON.parse(window.localStorage.getItem("dataJSON"))}.${getObjectKey(newObj,"dream_description")}`,
  //   // topic:`${JSON.parse(window.localStorage.getItem("dataJSON"))}.${getObjectKey(newObj,"topic")}`,
  //   // date: `${JSON.parse(window.localStorage.getItem("dataJSON"))}.${getObjectKey(newObj,"date")}}`,
  //   // night: `${JSON.parse(window.localStorage.getItem("dataJSON"))}.${getObjectKey(newObj,"night")}}`
  // }

  // console.log(getObjectKey(newObj,id))

  // useEffect(() => {}, []);
  // const API = process.env.REACT_APP_API_URL;
  // let apple = dream
  // apple=null
  // {null}
  // /promise
  // useEffect(() => {
  //   axios
  //     .get(`${API}/dreams/${id}`)
  //     .then((response) => {
  //       setdream(response.data);
  //     })
  //     .catch((err) => {
  //       // navigate("/not-found");
  //       console.log(err);
  //     });
  // }, [API,id]);

  // const handleDelete = () => {};
  const deleteDream = () => {
    // axios
    // Retrieve the existing array from localStorage
const existingArray = JSON.parse(window.localStorage.getItem('dataJSON')) || [];

// Find the index of the object to remove
const indexToRemove = existingArray.findIndex(obj => obj.id === id);

// Remove the object from the array
if (indexToRemove !== -1) {
  existingArray.splice(indexToRemove, 1);
}

// Stringify the updated array
const updatedArray = JSON.stringify(existingArray);

// Store the updated array back into localStorage
window.localStorage.setItem('dataJSON', updatedArray);
// window.localStorage.removeItem(getObjectKey(dream, id))
    //   .delete(`${API}/dreams/${dream.id}`)
    //   .then(() => {
    navigate(`/dreams`);
    //   })
    //   .catch((error) => console.error(error));
  };

  const handleDelete = () => {
    deleteDream();
  };

  // let thecolordeterminate = "black"
  // if(dream.good_dream === "good")

  const textcoloring = {
    color: thecolor,
  };

  useEffect(() => {
    if (dream.good_dream === "good") {
      setthecolor("#6dff75");
    }
    if (dream.good_dream === "bad") {
      setthecolor("red");
    }
    if (dream.good_dream === "neutral") {
      setthecolor("white");
    }
  }, [dream.good_dream]);




  const [night9,setNight9]=useState([])

  useEffect(()=>{
    // window.localStorage.setItem("dataJSON", JSON.stringify([]));
    
        // window.localStorage.getItem("dataJSON");

    if(dream.night==="true") {setNight9(true)}
    else{setNight9(false)}

  },[dream.night])





  return (
    <div>

      
                  <div className="spacerDIV"></div>

    <article  className="cardContact" key={dream9.id}>
   

      <fieldset >
        <legend>
          <strong style={textcoloring} className="everyoneHASdreams">Everyone has Dreams...</strong>
        </legend>

        <table className="thedreamtableSHOW">
          <tr>
            <th>Category</th>
            <th>Information</th>
          </tr>
          <tr>
            <td>Name: </td>
            <td>{dream9.name}</td>
          </tr>
          <tr>
            <td>Date: </td>
            <td>{moment(dream9.date).format("YYYY-MM-DD")}</td>
          </tr>
          <tr>
            <td>Emotions after Waking up:</td>
            <td style={textcoloring}>{dream9.good_dream}</td>
          </tr>
          <tr>
            <td>Description of Dream</td>
            <td>{dream9.dream_description}</td>
          </tr>
          <tr>
            <td>General Topic</td>
            <td>{dream9.topic}</td>
          </tr>
          <tr>
            <td>Night Time Dream: </td>
            <td>
              {night9 ? (
                <div className="spacerDIV">☑️ Yes</div>
              ) : (
                <div className="spacerDIV">❌ No</div>
              )}
            </td>
          </tr>
        </table>
      </fieldset>

      <div className="showNavigation">
        <span>
          <Link to={`/dreams`}>
            <button>Back</button>
          </Link>
        </span>
        <span>
          <Link to={`/dreams/${dream9.id}/edit`}>
            <button className="editbutton">Edit</button>
          </Link>
        </span>
        <span>
          <button className="delete" onClick={handleDelete}>
            Delete
          </button>
        </span>
      </div>

    
    </article>

    </div>
  );
  
}

export default DreamDetails;
