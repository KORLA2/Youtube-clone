import React, { useEffect,useState } from 'react'
import ReactPlayer from 'react-player';
import  {useParams,Link} from 'react-router-dom'
import {Box,Stack} from '@mui/system'
import { Typography } from '@mui/material';

import AllVideos from './AllVideos';
const Video = () => {

  let [videodetails,setvideodetails]=useState([]);
let {id}=useParams();
let [relatedvideos,setrelatedvideos]=useState([]);
useEffect(()=>{

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "aaeeedde36msh406345f13635f05p13b37ejsna57fb365f67c",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

fetch(
  `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`,
  options
)
  .then((response) => response.json())
  .then((response) => setvideodetails(response.items[0]))
  .catch((err) => console.error(err));

fetch(
  `https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=${id}&part=id%2Csnippet&type=video&maxResults=50`,
  options
)
  .then((response) => response.json())
  .then((response) => setrelatedvideos(response.items))
  .catch((err) => console.error(err));



},[id])

if(!videodetails.snippet) return '';


let {snippet:{channelTitle ,description,title,channelId,} ,statistics:{likeCount,viewCount,commentCount}}=videodetails;
console.log(videodetails)

return (
  <Box >
    <Stack direction={{ md: "row", xs: "cloumn" }}>
      <Box flex={1} p={6}>
        <Box
          sx={{ width: "100%", position: "sticky", top: "86px", zIndex: "-1" }}
        >
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
    controls
          />

          <Typography variant="h5">{title}</Typography>

          <Stack direction="row" justifyContent="space-between" py={1} px={2}>
            <Link to={`/channel/${channelId}`}>
              <Typography variant={{ sm: "subtitle2", xs: "h6" }}>
                {channelTitle}
              </Typography>
            </Link>

            <Stack direction="row" gap="20px" alignItems="center">
              <Typography variant="body1" sx={{ opacity: 0.7 }}>
                {parseInt(likeCount).toLocaleString()}Likes
              </Typography>
              share subscribe
            </Stack>
          </Stack>
        </Box>
      </Box>

      <Box
        px={2}
        py={{ md: 1, xs: 5 }}
        justifyContent="center"
        alignItems="center"
      >
        <AllVideos videos={relatedvideos}  />
      </Box>
    </Stack>
  </Box>
);
}

export default Video
