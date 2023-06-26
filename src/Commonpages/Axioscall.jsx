import axios from 'axios'
import React from 'react'
import { BaseURL } from './Baseurl';

export default async function Axioscall(method,url,datalist) {
  try {
    let baseurl = BaseURL+'/'+url
    let data;
    let body = {
      method:method,
      url:baseurl,
      data:datalist
    }
    
    if(method==="get"){
      console.log("get")
      data = await axios.get(baseurl,{params:datalist})
    }else {
      console.log("post body",body)
      data = await axios(body)
    }
    console.log("data return",data)
    return data
  } catch (error) {
    console.log("error")
    return error
  }
    
}
