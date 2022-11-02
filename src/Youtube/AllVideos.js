import React,{useEffect,useState} from 'react'
import {Card,Box} from '@material-ui/core'
import { Stack } from '@mui/system'
import  {VideoCard,ChannelCard}  from './transport'
const AllVideos = ({category}) => {

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
        `https://youtube-v31.p.rapidapi.com/search?part=snippet&q=${category}&maxResults=50`,
       options
      )
        .then((response) => response.json())
        .then((response) => {
          setvideos(response.items);
        })
        .catch((err) => console.error(err));

  },[])

    return (

<Stack direction='row' flexWrap='wrap' justifyContent='start' gap={2} >

{ 
    videos?.map((item,idx)=>(
      <Box>
      {
  item.id.videoId && <VideoCard  key={idx} video= {item}  />}

  { item.id.channelId&& <ChannelCard key={idx} channel={item}/> }
</Box>

))   


}

</Stack>

  )

}

export default AllVideos
