import React from 'react'
import { Helmet } from 'react-helmet'

export default function Notfound() {
  return (
    <>
    {/* style="color: #444; margin:0;font: normal 14px/20px Arial, Helvetica, sans-serif; height:100%; background-color: #fff;" */}
    <div style={{color:"#444",margin:"0",font:"normal 14px/20px Arial, Helvetica, sans-serif",height:"100%",backgroundColor:"#fff"}}>
   <div style={{height: 'auto', minHeight: '100%'}}>     <div style={{textAlign: 'center', width: 800, marginLeft: '-400px', position: 'absolute', top: '30%', left: '50%'}}>
    <h1 style={{margin: 0, fontSize: 150, fontWeight: 'bold'}}>404</h1>
    <h2 style={{marginTop: 20, fontSize: 30}}>Not Found
    </h2>   
    <p>The resource requested could not be found on this server!</p>
  </div></div></div>

  <Helmet>
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <title> 404 Not Found
    </title>
  </Helmet>

    </>
  )
}
