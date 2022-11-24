import React, { useEffect,useState } from 'react'
import ReactPlayer from 'react-player/lazy';
import  {useParams,Link} from 'react-router-dom'
import {Box,Stack} from '@mui/system'
import { Typography } from '@mui/material';
import{CardMedia} from '@material-ui/core'
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
  .then((response) =>{ setvideodetails(response.items[0]); console.log(response)})
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


let {snippet:{channelTitle ,thumbnails:{high:{url}},description,title,channelId,} ,statistics:{likeCount,viewCount,commentCount}}=videodetails;
console.log(videodetails)

return (
  <Box>
    <Stack direction={{ md: "row", xs: "cloumn" }} px={13} py={5}>
      <Box flex={1} p={6}>
        <Box
          sx={{
            position: "sticky",
            top: "86px",
            zIndex: "-1",
            height: { xs: "200px", md: "300px", lg: "400px" },
            width: { xs: "400px", sm: "400px", md: "500px", lg: "600px" },
          }}
        >
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            controls={true}
            className="react-player"
            width="100%"
            height="100%"
          />

          <Typography variant="body1">{title}</Typography>

          <Stack
            direction="row"
            sx={{ width: "100%" }}
            justifyContent="space-between"
            py={1}
            px={2}
          >
            <Link to={`/channel/${channelId}`}></Link>
            <Link to={`/channel/${channelId}`}>
              <CardMedia
                image={snippet?.thumbnails?.high.url}
                alt="Channel"
                style={{ height: 150, width: 150, borderRadius: "50%" }}
              />
              {channelTitle}
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
        py={{ md: 2, xs: 5 }}
        justifyContent="center"
        alignItems="center"
      >
        <AllVideos videos={relatedvideos} />
      </Box>
    </Stack>
  </Box>
);
}

export default Video
