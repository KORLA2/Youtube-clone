import React ,{useState} from 'react'
import styled from 'styled-components'
import {Menu,VideoCall,Notifications,Mic,Search, Home,Timeline,Subscriptions} from '@material-ui/icons'
import { IconButton ,Paper,TextField} from '@material-ui/core'
import Logo from '../Logo.png'

const Navbar = ({open,setopen}) => {

  return (
    <div
      style={{
        display: "flex",
        padding: "5px",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <First>
        <IconButton>
          <Menu
            style={{ cursor: "pointer" }}
            onClick={() => {
              setopen(!open);
            }}
          />
        </IconButton>

        <img src={Logo} />
      </First>

      <Middle>
        <Paper
          style={{
            borderRadius: "40px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Search />
          <TextField
            required
            id="outlined-required"
  placeholder="Search"
          />
          <IconButton>
            <Search />
          </IconButton>
        </Paper>

        <IconButton>
          <Mic />
        </IconButton>
      </Middle>
      <Last>
      <IconButton>

        <VideoCall />
      </IconButton>
<IconButton>
        <Notifications />
      </IconButton>

        {/* <Account /> */}
      </Last>
    </div>
  );
}

export default Navbar

let First=styled.div`

display:flex;
align-items:center;
justify-content: space-between;
/* width:100%; */
img{
width:100px;
height:50px;
margin:3px;
}

`
let Middle = styled.div`

display: flex;

  align-items: center;

`;
let Last = styled.div`
  display: flex;

  align-items: center;


`;

let Icon=styled.div`

&:hover{

background: rgba(0,0,0,0.08);

}
display:flex;

`