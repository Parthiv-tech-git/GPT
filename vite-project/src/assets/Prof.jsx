import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './pro.css'
function Prof ({res}){


    const nav =useNavigate();
console.log(res);

const  li =Object.entries(res) // converting into object to array 
console.log(li)

const tah =()=>{
    localStorage.clear();
    nav('/')
   }
          


 return(
    <div className="me">
    <div className="p">
        
        <h3>hello come to profile section</h3>
    
        {
             li.map((e,l_)=>( // by using of map method render the items
                <li>{e[0]} :    {e[1]}</li>
                )



            )





        }
    </div>



<div className="lo" onClick={tah}>
    <h4>log  out</h4>
</div>


 </div>
 
 )


}
export default Prof;
