import React, { useState } from 'react'

import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom'

import {Feed,Video,Navbar,Sidebar} from './Youtube/transport'

const App = () => {
  let [open,setopen]=useState(0);
  return (
    <div>

<Router>

   <Navbar open={open}  setopen={setopen}/>

  <Routes>

         <Route path='/' exact element={<Feed open={open}/>}/>

<Route path='/video/:id' exact element={<Video/>}/>
  </Routes>
</Router>

    </div>
  )
}

export default App
