import React from 'react'
import Sidebar from './Sidebar'
import AllVideos from './AllVideos'
import { Box } from '@material-ui/core';

const Feed = ({open}) => {


  return (
    <Box sx={{display:'flex'}}>
      <Sidebar open={open} />

<Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2}}>

<AllVideos/ >
</Box>
    </Box>
  );
}

export default Feed
