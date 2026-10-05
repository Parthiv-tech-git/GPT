
import { useState } from 'react';
import New1 from './New1'
import Mai from './assets/Mai';


import { Routes, Route } from 'react-router-dom';

import './App.css'
 function App(){
  
  const[pdata, setPdata]=useState({})
  
  
  
  
  return(
<div className="main">

<Routes>
  <Route path='/' element={<Mai  sen={setPdata}      />}/>
  <Route path='/dashbord' element={<New1  rec={pdata}/>}/>
    
</Routes>





</div>
   

    
  )
 }
 export default App;