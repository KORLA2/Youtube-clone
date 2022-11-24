import React from 'react'
import { useEffect ,useState} from 'react';
import { useParams } from 'react-router-dom'
import AllVideos from './AllVideos'
import {Box} from '@mui/material'
const SearchFeed = () => {

let {Term}=useParams();

let [videos,setvideos]=useState([]);
useEffect(()=>{


const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "aaeeedde36msh406345f13635f05p13b37ejsna57fb365f67c",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

fetch(
  `https://youtube-v31.p.rapidapi.com/search?q=${Term}&part=snippet%2Cid&regionCode=IN&maxResults=500&order=date`,
  options
)
  .then((response) => response.json())
  .then((response) => setvideos(response.items))
  .catch((err) => console.error(err));

},[Term])


  return (
    <Box display="flex" p="2" justifyContent="center">
      <Box sx={{ m: { sm: "100px" } }} />

      <AllVideos videos={videos} />

    </Box>
  );
}

export default SearchFeed