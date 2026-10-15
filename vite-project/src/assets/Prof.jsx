import { useState } from 'react';
import './pro.css'
function Prof ({res}){
console.log(res);

const  li =Object.entries(res) // converting into object to array 
console.log(li)


          


 return(
    <div className="p">
        
        <h3>hello come to profile section</h3>
    
        {
             li.map((e,l_)=>(
                <li>{e[0]} :    {e[1]}</li>
                )



            )





        }
    </div>
 )
}
export default Prof;
