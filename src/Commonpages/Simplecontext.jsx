import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axioscall from "./Axioscall";
import jwt_decode from "jwt-decode";
import Filestack from "./Filestack";
export const Simplecontext = createContext();

export default function Simplecontextprovider({children}){
    const navigate= useNavigate();
    const [pathvalue,setpathvalue]=useState('')
    const [userdetail,setuserdetail]=useState('')
    const [employeedata,setemployeedata]=useState('')
    const [hrdata,sethrdata]=useState('')
    const [notificationdata,setnotificationdata]=useState([])
    useEffect(() => {
        path()
        getUser()
        Hrcheck()
      }, []);

    const path =()=>{
        setpathvalue(window.location.pathname)
    }
    const logouthandler = () => {
        window.localStorage.removeItem("graiduser");
        window.localStorage.removeItem("craig-token");
        window.localStorage.removeItem("graiduseremail");
        window.localStorage.removeItem("graiduserid");
        return navigate("/");
      }; 
    const Check_Validation = (event,fun_name,setstate)=>{
    const form = event.currentTarget
    event.preventDefault();
    setstate(true)
    if (form.checkValidity() === false){
        event.stopPropagation()
        return false
    }
    else{
        fun_name()
        return true
    }
    }
    async function getUser (){  
      try {
        let datalist;
        let body;
        let user = window.localStorage.getItem("graiduser")
        if (window.localStorage.getItem('craig-token')){
            
            var decoded = jwt_decode(window.localStorage.getItem('craig-token'))
            if(decoded.role==="hr"){
              datalist=decoded.company
              body ={id:datalist}
            }else{
              if(decoded.id){
                datalist = decoded.id
                body ={userid:datalist}
            }
            }
            if(user==="employer"){
              try {
                let data = await Axioscall("get","company",body)
                if (data.status===200){
                  if(data.data.data){
                    setuserdetail(data.data.data)
                    setemployeedata(data.data.data)
                    window.localStorage.setItem("graiduseremail",data.data.data.email);
                    window.localStorage.setItem("graiduserid",data.data.data._id);
                  }else{
                    logouthandler()                 
                  }
                }
              } catch (error) {
                console.log(error)
                logouthandler()  
              }
                
            }else if(user==="employee"){
                let data = await Axioscall("get","employee",{id:datalist,page:1,limit:1})
                if (data.status===200){
                  if(data.data.data.docs.length){
                    setuserdetail(data.data.data.docs[0])
                    setemployeedata(data.data.data.docs[0])
                    window.localStorage.setItem("graiduseremail",data.data.data.docs[0].email);
                    window.localStorage.setItem("graiduserid",data.data.data.docs[0]._id);
                    getNotification()
                  }else{
                    logouthandler()
                  }
                }
            }else{
            }
             }else{
              navigate('/')
            }     
      } catch (error) {
        console.log("errorrr",error)
        logouthandler() 
      }
     
    }
    async function Filestackhandler(ratio,setvalue,value,keypair){
      let data =await Filestack(ratio)
      if (data){
        setvalue({...value,[keypair]:data})
      }
      
    }
    
    function Decodetoken (token){
      var decoded = jwt_decode(token)
      if(decoded.id){
        return decoded.id
      }
    }
    function Decodeall (){
      var decoded = jwt_decode(window.localStorage.getItem('craig-token'))
      if(decoded){
        return decoded
      }
    }
    function loghandler(){
      
      let user = window.localStorage.getItem("graiduser")
        let path = window.location.pathname
        let userdata = userdetail
        if(user==="employee" && !userdata && path !== "/employeeregister"){
          // console.log("no user.............................................................")
          logouthandler()
        }else{
          if(userdetail){ 
            if(userdetail.address.length===0){
              logouthandler()
            }
          }         
        }
    }
    async function  Hrcheck(){
    if(window.localStorage.getItem('craig-token')){
      let hr = Decodeall()
      if(hr.role==="hr"){
        let data = await Axioscall("get","user",{id:hr.assignedHr})
        if(data.status===200){
          if(data.data.data){
            sethrdata(data.data.data)
          }else{
            logouthandler()
          }
        }
      }
    }
   }
   function Capitalizefirst(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
   }
   const getNotification=async()=>{
    try {
      let body ={
        email:window.localStorage.getItem("graiduseremail"),
        page:1,
        limit:10
      }
      let data = await Axioscall("get","notification",body)
      // console.log("data",data.data.data.docs)
      if (data.status===200){
        setnotificationdata(data.data.data.docs)
      }
    } catch (error) {
      console.log(error)
    }
  }
return (
    <Simplecontext.Provider value={{
        path,pathvalue,logouthandler,Check_Validation,userdetail,setuserdetail,employeedata,setemployeedata,getUser,Filestackhandler,Decodetoken,loghandler,Decodeall,Hrcheck,hrdata,Capitalizefirst,notificationdata,setnotificationdata,getNotification
    }}>{children}</Simplecontext.Provider>
    )
}