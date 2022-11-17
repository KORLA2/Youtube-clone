import React ,{useEffect,useState}from 'react'
import { useParams } from 'react-router-dom'
import {ChannelCard} from './transport'
import { Box } from '@mui/system'
import AllVideos from './AllVideos'
const Channel = () => {

  let {id}=useParams();
  let [channel,setchannel]=useState([]);
  let [videos, setvideos] = useState([]);
  console.log(id)

  useEffect(()=>{

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "aaeeedde36msh406345f13635f05p13b37ejsna57fb365f67c",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

fetch(
  `https://youtube-v31.p.rapidapi.com/channels?part=snippet%2Cstatistics&id=${id}`,
  options
)
  .then((response) => response.json())
  .then((response) => setchannel(response.items[0]))
  .catch((err) => console.error(err));

fetch(
  `https://youtube-v31.p.rapidapi.com/search?channelId=${id}&part=snippet%2Cid&order=date&maxResults=50`,
  options
)
  .then((response) => response.json())
  .then((response) => setvideos(response.items))
  .catch((err) => console.error(err));


  },[id])

  return (
    <Box >
      <Box >
        <div style={{ display: "flex", justifyContent: "center" ,background:'red',width:'100%',height:'150px'}}></div>
<div style={{display:'flex',justifyContent:'center'}}>

        <ChannelCard channel={channel} marginTop='-110px' />
</div>
      </Box>
<Box display='flex' p='2' justifyContent='center'>

<Box sx={{m:{sm:'100px'}}}/>

 <AllVideos videos={videos}/>

</Box>
  </Box>
  );
}

export default Channel
