fetch('https://fakestoreapi.com/products/1') //Get request
            .then(res=>res.json())
            .then(json=>console.log(json))


  fetch('https://fakestoreapi.com/products',{
   method: "POST",
   headers: {
     "Accept": "application/json"
  },
body:JSON.stringify({name:"Book",price:8000})})
.then(response => response.json())
.then(data => {     console.log('HTTPS POST Response:', data); //Return fake id
  });



//   fetch("https://fakestoreapi.com/products", {
//   method: "POST",
//   body: JSON.stringify({
//     title: "test product",
//     price: 13.5,
//     description: "lorem ipsum set",
//     image: "https://i.pravatar.cc",
//     category: "electronic",
//   }),
// })
//   .then((res) => res.json())
//   .then((json) => console.log(json));



fetch('https://fakestoreapi.com/products/1',{method:"DELETE"})
 .then(res=>res.json())
 .then(json=>console.log(json))