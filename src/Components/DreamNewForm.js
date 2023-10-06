import { useNavigate, Link } from "react-router-dom";//
import { useState,useEffect } from "react";
// import axios from "axios";
import moment from "moment";
import { v4 as uuidv4 } from 'uuid';
// var dataJSON =  require("./data.json")
// import data from "./localJson"

// const API = process.env.REACT_APP_API_URL;

function DreamNewForm() {
  // const [arrayObjectDATA, setarrayObjectDATA] = useState([])
  const date7 = new Date();

  // const [htmlId] = useId();
  const [dream, setdream] = useState({
    id: uuidv4(),
    name: "",
    good_dream: "",
    dream_description: "",
    topic: "",
    date: date7,
    night: "true",
  });

  useEffect(()=>{
    // window.localStorage.setItem("dataJSON", JSON.stringify([]));
  
    window.localStorage.getItem("dataJSON");
  },[])

// useEffect(()=>{
//   setarrayObjectDATA(dream)

// },[dream])

  // const [dreams, setdreams] = useState([]);
  // const API = process.env.REACT_APP_API_URL;

  // useEffect(() => {
  //   let newObj = JSON.parse(window.localStorage.getItem("dataJSON"));
  //   newObj.push(dream);
  //   const updatedArray = JSON.stringify(newObj);
  //   window.localStorage.clear();
  //   window.localStorage.setItem("dataJSON", updatedArray);
  // }, [dream]);

  // const [userDataDREAM, setuserDataDREAM] = useState()

  // const [dreamArray, setDreamArray] = useState([...dream])

  // useEffect (()=>{
  //    window.localStorage.setItem("dream", JSON.stringify(dream));
  // // setuserDataDREAM(userData)
  // },[])
  // const data = window.localStorage.setItem("dream", JSON.stringify(dream));

  // console.log("dream: ", JSON.parse(dream));

  // const [localDream, setLocalDream]=useState([])
  // https://www.npmjs.com/package/react-id-generator

  const navigate = useNavigate();
  // const dreamCLOUD9 = window.localStorage.getItem(JSON.parse("dataJSON"))
  // JSON.parse(localStoragewindow.localStorage.getItem("dataJSON")).push(dream)
  // const [arrayValues,setArrayValues] = useState(...JSON.parse(dreamCLOUD9),dream)

  // useEffect(()=>{
  //   setArrayValues()
  //   const arrayValues = [...dreamCLOUD9,dream]

  // },[dream])

  // const addDream(){
  // const arrayValues = [...dreamCLOUD9,dream]

  // useEffect(()=>{



  // JSON.stringify(window.localStorage.getItem("dataJSON"))

  
  function handleSubmit(event) {
    event.preventDefault();
    
    // window.localStorage.setItem("dataJSON", JSON.stringify(arrayObjectDATA));
    
    let newObj = JSON.parse(window.localStorage.getItem("dataJSON"));
    newObj.push(dream);
    const updatedArray = JSON.stringify(newObj);
    window.localStorage.setItem("dataJSON", updatedArray);

navigate("/dreams")
   
  }

  const handleTextChange = (event) => {
    // setdream({ ...dream, [event.target.id]: event.target.value });


    if (event.target.id === "night") {
      setdream({ ...dream, [event.target.id]: event.target.value === "true" });
    } else {
      setdream({ ...dream, [event.target.id]: event.target.value === "false" });
    }
    setdream({ ...dream, [event.target.id]: event.target.value });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   // const dreamCLOUD7 = JSON.parse()

  //   addDream(dream);

  // };
  // console.log(localDream)
  return (

<div className="cardContact">
<div class="background-container">
<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png" alt=""></img>
<div class="stars"></div>
<div class="twinkling"></div>
<div class="clouds"></div>
</div>
<div className="spacerDIV"><strong>📥 NEW DREAM FORM 🧾</strong></div>
    <div className="edit">
      <form onSubmit={handleSubmit}>
        {/* <form> */}

        <input type="hidden" id="id" name="id" value={dream.id}></input>

        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={dream.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name your Dream..."
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
          placeholder="What is the topic or Category of your Dream..."
          onChange={handleTextChange}
          required
        />
        <label htmlFor="good_dream">Type of Dream:</label>

        <select
          onChange={handleTextChange}
          name="good_dream"
          id="good_dream"
          value={dream.good_dream}
          required
        >
          <option value="">--Please choose an option--</option>
          <option value="good">good</option>
          <option value="neutral">neutral</option>
          <option value="bad">bad</option>
        </select>

        {/* <label htmlFor="dream_description">Description of Dream:</label>

        <input
          id="dream_description"
          type="text"
          name="dream_description"
          value={dream.dream_description}
          placeholder="What is your Dream about..."
          onChange={handleTextChange}
          required
        /> */}
<label htmlFor="dream_description">Description of Dream:</label>

<textarea
  id="dream_description"
  name="dream_description"
  value={dream.dream_description}
  placeholder="What is your Dream about..."
  onChange={handleTextChange}
  rows="5" // This specifies the number of visible text lines. Adjust as needed.
  cols="50" // This specifies the number of visible characters per line. Adjust as needed.
  required
/>

        <label htmlFor="night">Night Time Dream:</label>

        <select
          onChange={handleTextChange}
          name="night"
          id="night"
          value={dream.night}
          required
        >
          <option defaultValue={true}>true</option>
          <option defaultValue={false}>false</option>
        </select>


        <input type="submit" />
      </form>

      <Link to={`/dreams`}>
        <button>Go Back to All Dreams!</button>
      </Link>
    
    </div></div>
  );
}

export default DreamNewForm;
