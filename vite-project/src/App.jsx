
import { useState } from 'react';
import New1 from './New1'
import Mai from './assets/Mai';
import Prof from './assets/Prof';

import { Routes, Route } from 'react-router-dom';

import './App.css'
 function App(){
  
  const[pdata, setPdata]=useState()
  
  
  
  
  return(
<div className="main">

<Routes>
  <Route path='/' element={<Mai />}/>
  <Route path='/dashbord' element={<New1  sen={setPdata} />}/>
  <Route path='/Profile' element={<Prof res={pdata}/>}/>  
</Routes>





</div>
   

    
  )
 }
 export default App;