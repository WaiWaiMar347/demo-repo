import React,{useState,useContext} from 'react'
//import { UserContext } from './MyContext'; 

const MyChild = () => {
    
  const user = useContext(UserContext); // consume the context

  return (
    <div>{user}</div>
  )
}

export default MyChild