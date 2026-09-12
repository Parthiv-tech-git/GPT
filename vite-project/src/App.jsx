
import { useState } from 'react';
import './App.css'
import New1 from './New1'


function App(){
const[pa,setPa]=useState('')
const[da,setDa]=useState([])
const [di, setDi]=useState("")
const [b ,setB]=useState([])



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

localStorage.setItem("userin" , JSON.stringify(dit))

 const da = localStorage.getItem("userin");
 const pi =JSON.parse(da);

const t =Object.values(pi)
console.log(t)
 setB(t)
}




  return(
    <div className="main">
<div className="in">
  <input type="text" placeholder='enter your pin no ' onChange={(e)=>setPa(e.target.value)} value={pa}/><br />
  <button  onClick={checks}>save </button>
</div>
<br />
<div className="sub">
<div className="dat">
  <h2>Attendence</h2>
  <p>{da.map((e)=>
      <li>{e[0]} : {e[1]}</li>
    
  )}</p>
</div>
<div className="im">
  <New1 an ={di} />
 <h1>{b.name}</h1> 
 <p>{b.map(w =><li>
  {w}
 </li>)}</p>
</div>

</div>
   

    </div>
   
  )
}
export default App;