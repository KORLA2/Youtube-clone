import React from 'react'
import {Paper,Typography,IconButton} from '@material-ui/core'
import {Home,Timeline,Subscriptions,VideoLibrary, History,ThumbUpSharp,VideoLabel,WatchLater} from '@material-ui/icons'
import styled  from 'styled-components'
const Sidebar = ({open}) => {
console.log(open)
  return (
    <Paper style={{width:'250px' , transition:'1s',marginLeft: open===false?'-260px':'5px'}}>
      <Icon>
        <Home />
        <Typography variant="body2">Home</Typography>
      </Icon>
      <Icon>
        <Timeline />
        <Typography variant="body2">Shorts</Typography>
      </Icon>
      <Icon>
        <Subscriptions />
        <Typography variant="body2">Subscriptions</Typography>
      </Icon>
      <Icon>
        <VideoLibrary />
        <Typography variant="body2">Library</Typography>
      </Icon>
      <Icon>
        <History />
        <Typography variant="body2">History</Typography>
      </Icon>
      <Icon>
        <VideoLabel />
        <Typography variant="body2">Your Videos</Typography>
      </Icon>
      <Icon>
        <WatchLater />
        <Typography variant="body2">Watch later</Typography>
      </Icon>
           <Icon>
        <ThumbUpSharp />
        <Typography variant="body2">Liked Videos</Typography>
      </Icon>
    </Paper>
  );
}

export default Sidebar

let Icon=styled.div`
display:flex;
justify-content: space-around;
padding:10px;
margin:10px;
&:hover{
cursor:pointer;
    background:rgba(0,0,0,0.08);
    border-radius:4px;
}
`
