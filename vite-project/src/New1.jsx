import { useEffect ,useState} from 'react';
import{FaHome,FaUser} from 'react-icons/fa'
import './q.css'
import { useNavigate ,Link} from 'react-router-dom';


function New1({sen}){
const[ta,setTa]=useState([])
const[t,setT]=useState([])
const[te,setTe]=useState([])


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

let k= await fetch('/api/api/Results/GetConsolidatedResults?Pin='+b.Pin);
let l =await k.json();
let m= await JSON.parse(l)
let n= await Object.entries(m.Table[0])
let g = await Object.entries(m.Table1[0])
console.log(g)



setT(n)
setTe(g)
sen(n)

}
u()



},[])





//console.log(t.Table[0])
   

    return(
<div className='par'>
  


   <h1> Hello ,{ta.Name}</h1>

{/* <div className="clg">
   {t.map((v,i)=>
(
  <li key={i}>{v[0]} :{v[1]}</li>
)

)
  
}
</div> */}

 
 
 
<div className="att">
  <h3 id='a'>Attendence:</h3>
  <h3>{ta.Pin}</h3>
  <p>{ta.Percentage}%</p>
  <p>{ta.BranchCode}</p>
  <p>{ta.UpdatedDate}</p>
  <p> AS pre Exam :{ta.ExamsPer}%</p>



</div>
<div className="pre">
  <h3 id='a'>Your credits:</h3>

  {te.map((v,i)=>
(
  <li key={i}>{v[0]} :{v[1]}</li>
)

)
  
}
</div>









<div className="footer">
       <div className="home">

       <Link to='/dashbord'> <button > <FaHome/></button></Link>

       </div>



          <div className="pro">
             <Link to='/Profile'><button ><FaUser/></button></Link>

            </div>

 

    </div>

</div>
    )
}
export default New1;