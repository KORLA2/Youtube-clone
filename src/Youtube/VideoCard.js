import { Card, CardContent,CardMedia,Typography} from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';

const VideoCard = ({video:{id:{videoId},snippet}}) => {


    return (
      <Card style={{width:200 }}>
        <Link to={videoId ? `/video/${videoId}` : "Uxpzyj"}>
          <CardMedia
            image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
     style={{ height: 150, width: 200 }}
          />
        </Link>



            <CardContent style={{height:'106px'}}>

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