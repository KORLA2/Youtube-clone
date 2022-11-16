import React,{useState} from 'react'
import Sidebar from './Sidebar'
import CallVideos from './CallVideos'
import { Box } from '@material-ui/core';

const Feed = ({open}) => {

let [category,setcategory]=useState('Tech World With Nana');

  return (
    <Box sx={{display:'flex'}}>
      <Sidebar open={open} />

<Box p={2} style={{overflowY:'auto',height:'90vh',flex:2,width:'100vw'}}>

{/* <SlideBar/> */}

<CallVideos category={category}/ >

</Box>
    </Box>
  );
}

export default Feed
