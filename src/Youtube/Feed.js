import React,{useState} from 'react'
import Sidebar from './Sidebar'
import AllVideos from './AllVideos'
import { Box } from '@material-ui/core';

const Feed = ({open}) => {

let [category,setcategory]=useState('Tech World With Nana');

  return (
    <Box sx={{display:'flex'}}>
      <Sidebar open={open} />

<Box p={2} style={{overflowY:'auto',height:'90vh',flex:2,width:'100vw'}}>

{/* <SlideBar/> */}

<AllVideos category={category}/ >

</Box>
    </Box>
  );
}

export default Feed
