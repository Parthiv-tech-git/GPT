
import { useState ,useEffect} from 'react';
import './mai.css'
import { useNavigate } from 'react-router-dom';
 function Mai({sen}){
  const [pa ,setPa]=useState('')
 
  const nagivation =useNavigate ();

useEffect(()=>{

let a= localStorage.getItem('userde');
let b= JSON.parse(a)

// let x= Object.values(b)
if(b==null){
  nagivation('/')
}
console.log(b)
// localStorage.clear()

},[])














  
  
  const check= async()=>{
    try{
const pat =/^\d{5}-[a-zA-Z]{2}-\d{3}$/.test(pa)
if(pat== true){
let a= await fetch('/api/api/PreExamination/getAttendanceReport?Pin='+pa);
let b = await a.json();
let c =await JSON.parse(b);
var d = await Object.entries(c.Table[0]);
let e = await c.Table[0];
console.log(e);
// console.log(a.status)
setPa("")
console.log(d);

   const {semid,Pin,Name,Scheme,Semester,BranchCode,Percentage}=e;
console.log(Name)
const dit ={
  name: Name,
  semid:semid,
  Pin:Pin,
  Scheme:Scheme,
  Semester:Semester,
  Branchcode:BranchCode,
  percentage:Percentage

}
localStorage.setItem('userde' ,JSON.stringify(dit))

console.log(dit.name)
sen(dit)
  




   

nagivation('/dashbord')
}
  else{
  alert('please  enter the pin correct format')
  setPa('')
}
}
catch(error){
    console.log(error)
    alert('check your PIN')
      setPa('')
}
  }
  

  
  
  
  
  
  return(
<div className="main">
<div className="in">
  <input type="text" placeholder='pin eg:24004-cs-106' onChange={(e)=>{setPa(e.target.value)}} value={pa}/>
  <button  onClick={check}>save it </button>
</div>







</div>
   

    
  )
 }
 export default Mai;