import { useEffect ,useState} from 'react';
import './q.css'
import { useNavigate } from 'react-router-dom';
function New1({rec}){
const[ta,setTa]=useState({})
const nav= useNavigate()

useEffect(()=>{
let a= localStorage.getItem('userde');
let b= JSON.parse(a)
console.log(b)

setTa(b)



},[])






   console.log(rec)
   const tah =()=>{
    localStorage.clear();
    nav('/')
   }

    return(
<div>
  <h1> hello man ewllcome this is page</h1>
<p>{rec.name}</p>
<p>{rec.percentage}</p>
<h3>{ta.name}</h3>
<button onClick={tah}>log out</button>
</div>
    )
}
export default New1;