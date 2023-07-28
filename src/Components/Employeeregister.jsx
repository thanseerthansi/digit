import React from 'react'
import Employeeprofupdate from '../Employeepages/Employeeprofupdate'
import { useEffect } from 'react'
import jwt_decode from "jwt-decode";
import { useState } from 'react';
export default function Employeeregister() {
  const [wizard,setWizard]=useState(1)
  useEffect(()=>{
    tokencompletion()
  },[])
  const tokencompletion=()=>{
    var decoded = jwt_decode(window.localStorage.getItem('craig-token'))    
      if(decoded.completion===3){
        setWizard(1)
      }else{
        setWizard(decoded.completion+1)
      }  
  }
  return (
    <div className='container'>
      <Employeeprofupdate value={wizard}/>

    </div>
  )
}
