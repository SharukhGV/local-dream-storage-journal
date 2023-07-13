import { useNavigate, Link } from "react-router-dom";//
import { useState } from "react";
// import axios from "axios";
import moment from "moment";
import { useId } from "react-id-generator";
// var dataJSON =  require("./data.json")
// import data from "./localJson"

// const API = process.env.REACT_APP_API_URL;

function DreamNewForm() {
  // const [togglebutton, setToggleButton] = useState(false)
  const [htmlId] = useId();
  const [dream, setdream] = useState({
    id: htmlId,
    name: "",
    good_dream: "",
    dream_description: "",
    topic: "",
    date: "2000-01-01",
    night: true,
  });
  // const [dreams, setdreams] = useState([]);
  // const API = process.env.REACT_APP_API_URL;

  // useEffect(() => {
  //   let newObj = JSON.parse(localStorage.getItem("dataJSON"));
  //   newObj.push(dream);
  //   const updatedArray = JSON.stringify(newObj);
  //   localStorage.clear();
  //   localStorage.setItem("dataJSON", updatedArray);
  // }, [dream]);

  // const [userDataDREAM, setuserDataDREAM] = useState()

  // const [dreamArray, setDreamArray] = useState([...dream])

  // useEffect (()=>{
  //    localStorage.setItem("dream", JSON.stringify(dream));
  // // setuserDataDREAM(userData)
  // },[])
  // const data = localStorage.setItem("dream", JSON.stringify(dream));

  // console.log("dream: ", JSON.parse(dream));

  // const [localDream, setLocalDream]=useState([])
  // https://www.npmjs.com/package/react-id-generator

  const navigate = useNavigate();
  // const dreamCLOUD9 = localStorage.getItem(JSON.parse("dataJSON"))
  // JSON.parse(localStoragelocalStorage.getItem("dataJSON")).push(dream)
  // const [arrayValues,setArrayValues] = useState(...JSON.parse(dreamCLOUD9),dream)

  // useEffect(()=>{
  //   setArrayValues()
  //   const arrayValues = [...dreamCLOUD9,dream]

  // },[dream])

  // const addDream(){
  // const arrayValues = [...dreamCLOUD9,dream]

  // useEffect(()=>{
  function handleSubmit(event) {
    event.preventDefault();
    // !togglebutton
    // if(togglebutton){
    // setArrayValues(...arrayValues, dream )
    // let newObject = JSON.parse(localStorage.getItem("dataJSON")).push(dream)
    // dreams.push(dream)
    // localStorage.clear()
    // localStorage.setItem("dataJSON", dreams)
    // setToggleButton(false)

    let newObj = JSON.parse(localStorage.getItem("dataJSON"));
    newObj.push(dream);
    const updatedArray = JSON.stringify(newObj);
    localStorage.setItem("dataJSON", updatedArray);

    // setdream({
    //   id: htmlId,
    //   name: "",
    //   good_dream: "",
    //   dream_description: "",
    //   topic: "",
    //   date: "2000-01-01",
    //   night: true,
    // });

navigate("/dreams")
    // }
    // else console.log(arrayValues)
  }
  // },[togglebutton,arrayValues,dream,navigate])
  // };

  // console.log(dream)

  // useEffect(()=>{
  // const dreamCLOUD9 = localStorage.getItem(JSON.parse("dataJSON"))
  //     localStorage.clear()
  //     localStorage.setItem("dataJSON", JSON.stringify(...dreamCLOUD9,dream))

  // },[])

  const handleTextChange = (event) => {
    setdream({ ...dream, [event.target.id]: event.target.value });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   // const dreamCLOUD7 = JSON.parse()

  //   addDream(dream);

  // };
  // console.log(localDream)
  return (
    <div className="edit">
      <form onSubmit={handleSubmit}>
        {/* <form> */}

        <input type="hidden" id="id" name="id" value={htmlId}></input>

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

        <label htmlFor="dream_description">Description of Dream:</label>

        <input
          id="dream_description"
          type="text"
          name="dream_description"
          value={dream.dream_description}
          placeholder="What is your Dream about..."
          onChange={handleTextChange}
          required
        />

        <label htmlFor="night">Was it Night Time:</label>

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
    </div>
  );
}

export default DreamNewForm;
