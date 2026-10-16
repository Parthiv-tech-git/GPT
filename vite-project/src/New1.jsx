import { useEffect ,useState} from 'react';
import{FaHome,FaUser} from 'react-icons/fa'
import './q.css'
import { useNavigate ,Link} from 'react-router-dom';


function New1({sen}){
const[ta,setTa]=useState([])
const nav= useNavigate()

useEffect( ()=>{
let a= localStorage.getItem('userde');
let b= JSON.parse(a)
console.log(b.Pin)
const u= async () => {
  

let z= await fetch('/api/api/PreExamination/getAttendanceReport?Pin='+b.Pin);
let y = await z.json();
let x =await JSON.parse(y);
const w = await x.Table[0];

// var w = await Object.entries(x.Table[0]);
setTa(w)

console.log(x)
sen(w)
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
  


  <h1> hello ,{ta.Name}</h1>
<p></p>
<p>{ta.Percentage}</p>
<h3>{ta.Pin}</h3>
{/* {
  ta[0].map((k,l)=>{
    <li key={l}>{k}</li>

  })
} */}
<div className="footer">
<button onClick={tah}> <FaHome/></button>
  
<Link to='/Profile'><button ><FaUser/></button></Link>

 
</div>

</div>
    )
}
export default New1;