import React,{useEffect,useState} from 'react'
import {Card,Box} from '@material-ui/core'
import { Stack } from '@mui/system'
import  {VideoCard,ChannelCard}  from './transport'
const AllVideos = ({videos}) => {

console.log(videos)

    return (

<Stack direction='row'  py={1} px={2} flexWrap='wrap' sx={{justifyContent:{md:"center"}}} justifyContent='start' gap={4} >

{ 
    videos?.map((item,idx)=>(
      <Box>
      { item.id.videoId && <VideoCard  key={idx} video= {item}  />}

  { item.id.channelId&& <ChannelCard key={idx} channel={item}/> }
  
</Box>

))


}

</Stack>

  )

}

export default AllVideos
