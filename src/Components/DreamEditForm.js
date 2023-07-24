import { useParams, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
// import axios from "axios";
import moment from "moment";

// Axios automatically transforms the data returned from the server, but with fetch() you have to call the response.json method to parse the data to a JavaScript object.

// const API = process.env.REACT_APP_API_URL;

function DreamEditForm() {
  let { id } = useParams();
  // let { uid } = useParams();
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
  // console.log(dream)
  //dreams is the previous data populated into the form
  let newObj = JSON.parse(window.localStorage.getItem("dataJSON"));
  let dreams = getObjectSpecific(newObj, id);
  const [dream, setdream] = useState({
    id: dreams.id,
    name: dreams.name,
    good_dream: dreams.good_dream,
    dream_description: dreams.dream_description,
    topic: dreams.topic,
    date: dreams.date,
    night: dreams.night,
  });

  // console.log(dream)

  const navigate = useNavigate();

  //   let dreamCLOUD7 = window.localStorage.getItem("dreamCLOUD")
  // let dreamDATAarray = JSON.parse(dreamCLOUD7)
  // dreamDATAarray
  // console.log(dreamCLOUD9)
  // useEffect(() => {
  //   axios
  //     .get(`${API}/dreams/${id}`)
  //     .then((response) => {
  //       console.log(response.data);
  // var specificDREAM = dreamCLOUD9.filter(()=>{!!dreamCLOUD9.id})

  //     })
  //     .catch((e) => console.error(e));
  // }, [id]);

  const handleTextChange = (event) => {
    // if (event.target.id === "night") {
    //   setdream({ ...dream, [event.target.id]: event.target.value === true });
    // } else {
    //   setdream({ ...dream, [event.target.id]: event.target.value });
    // }
    setdream({ ...dream, [event.target.id]: event.target.value });
  };

  // const updatedream = (id, dream) => {
  //     console.log(dream)

  // //   axios
  // //     .put(`${API}/dreams/${id}`, dream)
  // //     .then((response) => {
  // //       // setdream(response.data); // set the entire `dream` object
  // //       navigate(`/dreams/${id}`);
  // //     })
  // //     .catch((e) => console.error("catch", e));
  // // };
function editObjectDream(){

  const existingArray = JSON.parse(window.localStorage.getItem('dataJSON')) || [];

  // Find the index of the object to remove
  const indexToRemove = existingArray.findIndex(obj => obj.id === id);
  
  // Remove the object from the array whereby the result is there and not contrary
  if (indexToRemove !== -1) {
    existingArray.splice(indexToRemove, 1);
    existingArray.push(dream);
    const updatedArray = JSON.stringify(existingArray);
    window.localStorage.setItem("dataJSON", updatedArray);
  }
  
  // Stringify the updated array
  const updatedArray = JSON.stringify(existingArray);
  
  // Store the updated array back into localStorage
  window.localStorage.setItem('dataJSON', updatedArray);

}


  const handleSubmit = (event) => {
    event.preventDefault();


    editObjectDream();


navigate(`/dreams/${id}`)
    
    // updatedream(id, dream);
    // console.log(dream)
    // window.localStorage.removeItem(specificDREAM())

    // dreamCLOUD9.push(dream)
    // removeItem(specificDREAM)

    // window.localStorage.setItem(dream.id)
  };

  return (
    <div className="cardContact">

<div class="background-container">
<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png" alt=""></img>
<div class="stars"></div>
<div class="twinkling"></div>
<div class="clouds"></div>
</div>
    <div className="spacerDIV"><strong>✏️ EDIT DREAM ARCHIVE 📝</strong></div>

    {/* <div className="spacerDIV"></div> */}
    <div className="edit">
      <form onSubmit={handleSubmit}>
        <input
          type="hidden"
          id="user_id"
          name="user_id"
          value={dream.user_id}
        ></input>

        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={dream.name}
          type="text"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          type="date"
          // pattern="http[s]*://.+"
          value={moment(dream.date).format("YYYY-MM-DD")}
          // placeholder="http://"
          onChange={handleTextChange}
        />
        <label htmlFor="category">Topic:</label>
        <input
          id="topic"
          type="text"
          name="topic"
          value={dream.topic}
          onChange={handleTextChange}
        />
        <label htmlFor="good_dream">Type of Dream:</label>

        <select
          onChange={handleTextChange}
          name="good_dream"
          id="good_dream"
          value={dream.good_dream}
        >
          <option value="">--Please choose an option--</option>
          <option value="good">good</option>
          <option value="neutral">neutral</option>
          <option value="bad">bad</option>
        </select>

        <label htmlFor="dream_description">Description of Dream:</label>

        <input
          id="dream_description"
          type="text"
          name="dream_description"
          value={dream.dream_description}
          onChange={handleTextChange}
        />

        <label htmlFor="night">Reoccuring Dream:</label>

        <select
          onChange={handleTextChange}
          name="night"
          id="night"
          value={dream.night}
        >
          <option defaultValue={true}>true</option>
          <option defaultValue={false}>false</option>
        </select>

        <input type="submit" />
      </form>
      <Link to={`/dreams/${id}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
    
    </div>
  );
}

export default DreamEditForm;
