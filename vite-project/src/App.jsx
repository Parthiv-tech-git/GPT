
import { useState } from 'react';
import './App.css'
import New1 from './New1'


function App(){
const[pa,setPa]=useState('')
const[da,setDa]=useState([])
const [di, setDi]=useState()



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

const {semid,Pin,Name,Scheme,Semester,BranchCode}=e;
console.log(Name)
const dit ={
  name: Name,
  semid:semid,
  Pin:Pin,
  Scheme:Scheme,
  Semester:Semester,
  Branchcode:BranchCode,

}
console.log(dit.name)
setDi(dit)

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


    <New1 an ={di}/>

    </div>
   
  )
}
export default App;