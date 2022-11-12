import React from 'react'

import { Box, CardContent,CardMedia,Typography} from '@material-ui/core'

import {Link} from 'react-router-dom'

const ChannelCard = ({channel}) => {

console.log(channel)
let {snippet}=channel
    return (
      <Box 
      style={{width:'200px',height:'320px' ,display:'flex',justifyContent:'center',alignItems:'center'}}
      >
        <Link
          to={`/channel/${snippet.channelId}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <CardContent
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <CardMedia
              image={snippet?.thumbnails?.high.url}
              alt="Channel"
              style={{ height: 150, width: 150, borderRadius: "50%" }}
            />

            <Typography variant="body2" style={{margin:'20px'}}>{snippet?.channelTitle}</Typography>
       
         </CardContent>
        </Link>
      </Box>
    );
}

export default ChannelCard

