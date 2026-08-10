
import { useState } from 'react';
import './App.css'


function App(){
const[pa,setPa]=useState('')
const[da,setDa]=useState([])
const user={

}



const checks=async()=>{
let a= await fetch('/api/api/PreExamination/getAttendanceReport?Pin='+pa);
let b = await a.json();
let c =await JSON.parse(b);

let d = await Object.entries(c.Table[0]);
let e = await c.Table[0];
setDa(d)
setPa("")
console.log(d);
console.log(e);
for(let z in e){
  console.log(z + e[z])
  if(z=='Pin'||z=='Nmae'||z=='Scheme'||z=='Semester'||z=='BranchCode'){
  var sto= {
  Pin:e[z],
 Name:e[z], 
 Schema:e[z],
 Semeter:e[z],
 Brach:e[z]

  }
}}
console.log(sto)


}




  return(
    <div className="main">
<div className="in">
  <input type="text" placeholder='enter your pin no ' onChange={(e)=>setPa(e.target.value)} value={pa}/><br />
  <button  onClick={checks}>get attendence</button>
</div>
<br />
<div className="dat">
  <h2>Attendence</h2>
  <p>{da.map((e)=>
      <li>{e[0]} : {e[1]}</li>
    
  )}</p>
</div>

    </div>
  )
}
export default App;