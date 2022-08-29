import React, {useState, useEffect} from "react";
import Card from "./Card";

export default function CardContainer(){
   
  const [input, setInput] = useState('');
  useEffect(()=>{
     setInput(input.toLowerCase())
  },[input])

  return(
    <>
    <div className='header'>
    <h1>Monster's Rolodex</h1>
    <h6><em>Source: https://jsonplaceholder.typicode.com/</em></h6> 
    <div className='search'>
      <input type='search' onChange={(e)=>{
           setInput(e.target.value)
      }}/>
      <label>Search for your favourite monster by name!</label>
      </div>
    </div>
     <Card input={input}/>  
    </>  
  )   
}