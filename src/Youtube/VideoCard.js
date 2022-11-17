import { Typography} from '@material-ui/core';
import {Card,CardContent,CardMedia} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

const VideoCard = ({video:{id:{videoId},snippet}}) => {


    return (
      <Card sx={{width:{xs:'300px', sm:'250px',md:'200px'}}}>
        <Link to={videoId ? `/video/${videoId}` : "Uxpzyj"}>
          <CardMedia
            image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
    //  358,180
     sx={{height:150,width:{xs:'300px',sm:'250px', md:'200px' ,}}}
          />
        </Link>

            <CardContent sx={{height:'106px'}}>

          <Link to={videoId ? `/video/${videoId}` : "Uxpzyj"} style={{textDecoration:'none',color:'black'}}>
<Typography variant='subtitle1' fontWeight='bold' color='black'>
    {snippet?.title.slice(0,30)}
</Typography>

<Typography variant='subtitle2' style={{marginTop:'20px'}} fontWeight='bold' color='black'>


    { snippet?.channelTitle.slice(0,20) }


</Typography>


          </Link>

</CardContent>

      </Card>
    );

}

export default VideoCard