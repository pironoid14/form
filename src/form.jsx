import React from 'react'
import  '/for.css';
//import { useState } from 'react';
function form(){
   // const [name, setName] = useState("")
   // const [password, setPassword] = useState("")
    //const [, setName] = useState("")

    return(
   <form className="container">
    <div className='body'>
    <label>Name</label>
        <input type="text" className="input_color"/>
     </div>
     <div className='body'>
    <label>password</label>
        <input type="password"  className="input_color"/>
     </div>
     <div className='body'>
    <label>email</label>
        <input type="text"  className="input_color"/>
     </div>
     <div className='body'>
    <label>complaint</label>
        <input type="text"  className="input_color"/>
     </div>
   </form>

    )

}
export default form;
