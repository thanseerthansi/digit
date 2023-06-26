import axios from 'axios'
import React from 'react'

export default async function Axioscall(method,url,datalist) {
    let data;
    let body = {
      method:method,
      url:url,
      body:datalist
    }
  if(method==="get"){
    data = await axios.get(url,datalist)
    console.log("data",data)
  }
  return data
}
