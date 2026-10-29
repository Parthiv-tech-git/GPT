// import { useState } from 'react';
// import { Navigate, useNavigate } from 'react-router-dom';
// import './pro.css'
// function Prof ({res}){


//     const nav =useNavigate();
// console.log(res);

// const  li =res // converting into object to array 
// console.log(li)

// const tah =()=>{
//     localStorage.clear();
//     nav('/')
//    }
          


//  return(
//     <div className="me">
//     <div className="p">
        
//         <h3>hello come to profile section</h3>
    
//         {
//              li.map((e,l_)=>( // by using of map method render the items
//                 <li>{e[0]} :    {e[1]}</li>
//                 )



//             )





//         }
//     </div>



// <div className="lo" onClick={tah}>
//     <h4>log  out</h4>
// </div>


//  </div>
 
//  )


// }
// export default Prof;

import React from "react";
import { FaUserGraduate, FaIdCard, FaUniversity, FaCode,FaSignOutAlt } from "react-icons/fa";
import "./Pro.css";
import { useNavigate } from "react-router-dom";

function Prof({res}) {

let a =res;
console.log(a)
const b =useNavigate()

const tah =()=>{
     localStorage.clear();
      b('/')
   }




  

    return (
        <div className="profile-container">

            {/* Profile Header */}
            <div className="profile-header">
                <div className="profile-icon">
                    <FaUserGraduate />
                </div>

                <div>
                    <h2>Student Profile</h2>
                    <p>Your academic information</p>
                </div>
            </div>

            {/* Student Details */}
            <div className="profile-details">

                <div className="profile-item">
                    <FaUserGraduate className="detail-icon" />
                    <div>
                        <p className="detail-label">Student Name</p>
                        <h3>{a[3][1]}</h3>
                    </div>
                </div>

                <div className="profile-item">
                    <FaIdCard className="detail-icon" />
                    <div>
                        <p className="detail-label">Student PIN & Scheme
                            
                        </p>
                        <h3>{a[2][1]}</h3>
                        <h3>{a[5][1]}</h3>

                    </div>
                </div>

                <div className="profile-item">
                    <FaUniversity className="detail-icon" />
                    <div>
                        <p className="detail-label">College Name</p>
                        <h3>{a[1][1]}</h3>
                    </div>
                </div>

                <div className="profile-item">
                    <FaCode className="detail-icon" />
                    <div>
                        <p className="detail-label">College Code</p>
                        <h3>{a[0][1]}</h3>
                    </div>
                </div>

            </div>
           
<div className="logout-action">

    <div className="logout-info">
        <FaSignOutAlt className="logout-icon" />

        <div>
            <h3>Logout</h3>
            <p>Sign out of your account</p>
        </div>
    </div>

    <button
        className="logout-button"
    onClick={tah}>
        <FaSignOutAlt />
        Logout
    </button>

</div>





        </div>
    );
}

export default Prof;

