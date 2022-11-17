import React,{useState} from 'react'
import Sidebar from './Sidebar'
import CallVideos from './CallVideos'
import { Box } from '@mui/system';

const Feed = ({open}) => {

let [category,setcategory]=useState('Tech World With Nana');

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar open={open} />

      <Box
        p={4}
        style={{  height: "90vh", flex: 5, width: "100vw" ,display:'flex',justifyContent:'center' }}
      >
        {/* <SlideBar/> */}
        <Box sx={{ ml: "150px"  }} />
        <CallVideos category={category} />
      </Box>
    </Box>
  );
}

export default Feed
