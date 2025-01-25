

function MeaningCloud(){


const formdata = new FormData();
formdata.append("key", "91afc9bc1a05abf40d80ab14feda7f1b");
formdata.append("txt", "YOUR TEXT HERE");
formdata.append("lang", "TEXT LANGUAGE HERE");  // 2-letter code, like en es fr ...
formdata.append("tt", "a");                     // all topics

const requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

const response = fetch("https://api.meaningcloud.com/topics-2.0", requestOptions)
  .then(response => ({
    status: response.status, 
    body: response.json()
  }))
  .then(({ status, body }) => console.log(status, body))
  .catch(error => console.log('error', error));








  return (

<div></div>

  )

}


export default MeaningCloud