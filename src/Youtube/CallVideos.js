import React,{useState,useEffect} from 'react'
import  AllVideos from './AllVideos'
const CallVideos = ({category}) => {
  
let [videos, setvideos] = useState([]);

useEffect(() => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "aaeeedde36msh406345f13635f05p13b37ejsna57fb365f67c",

      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  fetch(
    `https://youtube-v31.p.rapidapi.com/search?part=snippet&q=${category}&maxResults=50`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      {
        setvideos(response.items);
        console.log(response);
      }
    })
    .catch((err) => console.error(err));

  console.log("hellojajannvosnodn");
}, []);

    return (
    
    <div>
      
<AllVideos videos={videos} />
    </div>

  )
}

export default CallVideos
