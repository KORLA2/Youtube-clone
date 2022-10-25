import React,{useEffect,useState} from 'react'

const AllVideos = () => {
  
let [videos,setvideos]=useState({});

  useEffect(()=>{

    const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "aaeeedde36msh406345f13635f05p13b37ejsna57fb365f67c",
          "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
        },
      };
      
      fetch(
        "https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50",
        options
      )
        .then((response) => response.json())
        .then((response) =>{
            setvideos(response);
            console.log(response)
        })
        .catch((err) => console.error(err));

  },[])

    return (
    <div>
      


    </div>
  )
}

export default AllVideos
