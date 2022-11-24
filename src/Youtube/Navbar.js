import React ,{useState} from 'react'
import styled from 'styled-components'
import {Menu,VideoCall,Notifications,Mic,Search, Home,Timeline,Subscriptions} from '@material-ui/icons'
import {  Input} from '@material-ui/core'
import Logo from '../Logo.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {Stack,Paper,IconButton} from '@mui/material'
import SideBar from './SideBar'
const Navbar = () => {

let [searchTerm,setSearchTerm]=useState('');
let navigate=useNavigate();

let handleSubmit=(e)=>{
  console.log('e')
e.preventDefault();

navigate(`/search/${searchTerm}`)

setSearchTerm('');

}

  return (

    <Stack
    direction='row'
    alignItems='center'
    p={2}
       sx={{position:'sticky',background:'white',top:0,justifyContent:'space-between'}}
    >
      <First>
        <IconButton>
         <SideBar/>
        </IconButton>
<Link to='/' style={{display:'flex',alignItems:'center'}}>

 <img src={Logo} />
</Link>
      </First>

      <Middle>
        <Paper

        component='form'
        onSubmit={handleSubmit}

        sx={{

borderRadius:'20',
display:'flex',
justifyContent:'space-between',
alignItems:'center',
border:'1px solid black',
pl:2,
mr:{sm:5}
        }}
 
        >
          <Search />
  <Input

placeholder='Search...'
value={searchTerm}
onChange={(e)=>{
setSearchTerm(e.target.value)

}}
  />
          <IconButton type='submit' sx={{p:'10px',color:''}}>
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
    </Stack>
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