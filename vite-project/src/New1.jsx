import { useEffect ,useState} from 'react';
import './q.css'
import { useNavigate } from 'react-router-dom';
function New1({rec}){
const[ta,setTa]=useState({})
const nav= useNavigate()

useEffect( ()=>{
let a= localStorage.getItem('userde');
let b= JSON.parse(a)
console.log(b.Pin)
const u= async () => {
  

let z= await fetch('/api/api/PreExamination/getAttendanceReport?Pin='+b.Pin);
let y = await z.json();
let x =await JSON.parse(y);
var w = await Object.entries(x.Table[0]);
setTa(b)


}
u()
},[])






  //  console.log(rec)
   const tah =()=>{
    localStorage.clear();
    nav('/')
   }

    return(
<div>
  <h1> hello ,{ta.name}</h1>
<p>{rec.name}</p>
<p>{ta.percentage}</p>
<h3>{ta.Pin}</h3>
<button onClick={tah}>log out</button>
</div>
    )
}
export default New1;