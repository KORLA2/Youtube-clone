import React ,{useEffect,useState}from 'react'
import { useParams } from 'react-router-dom'

const Channel = () => {

  let {id}=useParams();
  console.log(id)

  useEffect(()=>{

 const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "aaeeedde36msh406345f13635f05p13b37ejsna57fb365f67c",

        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    };

fetch(`https://youtube-v31.p.rapidapi.com/search/channels?part=snippet&id=${id}`,options)
  .then((data) => data.json())
  .then((data) => console.log(data));

  },[id])

  return (

  <div>
      
      Channel


    </div>
  )
}

export default Channel
