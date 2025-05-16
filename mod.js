//const l=require('lodash')
//const nums=[1,2,3,4,5]
 const axios = require('axios');

// Make a GET request to a public API
// axios.get('https://fakestoreapi.com/products/1')
//   .then(response => {
//     console.log("Bitcoin Price (USD):", response.data);
//   })
//   .catch(error => {
//     console.error("Error fetching data:", error);
//   });

  try{
axios.post('https://fakestoreapi.com/products',{
  method:"POST",
  headers:{"Accept":"application/json"},
  body:{
    title:"Book",
    price:15.5,
    description:"Love me",
    category:" True Story",
    image:'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
    rating:{ rate:1.5, count:155}

}

}) 
console.log("Success")}
catch(error){console.error(error.message)}

const express=require('express');
const app=express();
app.get('/',(req,res)=>{
  res.send('Home Page');
})
app.listen(300,()=> console.log("host:300"))
