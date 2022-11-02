import React from 'react'

import { Box, CardContent,CardMedia} from '@material-ui/core'

import {Link} from 'react-router-dom'

const ChannelCard = ({channel:{snippet}}) => {

console.log(snippet)

    return (

     <Box
     
     >

<Link to={`/channel/${snippet.channelId}`}>

<CardContent 
style={{display:'flex',alignItems:'center',background:'black',justifyContent:'center',flexDirection:'column'}}
>

<CardMedia

    image={snippet?.thumbnails?.high.url}
    alt='Channel'
    style={{ height:150,width:150,borderRadius:'50%'}}

    />

</CardContent>

</Link>

    </Box>
  
  )
}

export default ChannelCard

