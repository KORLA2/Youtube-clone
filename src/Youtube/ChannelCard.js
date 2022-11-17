import React from 'react'

import { Box, CardContent,CardMedia,Typography} from '@material-ui/core'

import {Link} from 'react-router-dom'

const ChannelCard = ({channel,marginTop}) => {

console.log(channel)

let {snippet}=channel

let channelId=snippet?snippet.channelId?snippet.channelId:channel.id:'';

    return (
      <Box 
      style={{marginTop, width:'200px',height:'320px' ,display:'flex',justifyContent:'center',alignItems:'center'}}
      >
        <Link
          to={`/channel/${channelId}`}
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

            <Typography variant="body1"  style={{marginTop:'20px'}}>{snippet?snippet.channelTitle?snippet.channelTitle:snippet.title:''}</Typography>
            <Typography variant="body2"  style={{marginTop:'20px'}}>{channel?channel.statistics?channel.statistics.subscriberCount +'  subscribers':'':''} </Typography>
       
         </CardContent>
        </Link>
      </Box>
    );
}

export default ChannelCard

