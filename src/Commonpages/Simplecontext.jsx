import { createContext, useEffect, useState } from "react";
export const Simplecontext = createContext();

export default function Simplecontextprovider({children}){
    const [pathvalue,setpathvalue]=useState('')
    useEffect(() => {
        path()
      }, [])
    const path =()=>{
        // console.log("path",window.location.pathname)
        setpathvalue(window.location.pathname)
    }
    // const path = window.location.pathname
    
return (
    <Simplecontext.Provider value={{
        path,pathvalue
    }}>{children}</Simplecontext.Provider>
    )
}