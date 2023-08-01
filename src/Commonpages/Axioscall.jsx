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
      data = await axios.get(baseurl,{params:datalist})
    }else {
      data = await axios(body)
    }
    return data
  } catch (error) {
    console.log("error")
    return error
  }
    
}
