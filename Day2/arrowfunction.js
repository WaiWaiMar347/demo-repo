let result= (a,b) => a+b;
console.log(result(2,3));

// function twice(n1,n2,add){
//     let example=add(n1) ;
//     return example*3;
//  }
function add(c){return c+2;}
let twice= (n1,n2,add)=> add(n1)*3;
console.log(twice(2,3,add));

let nums = [1,2,3,4,5];
let mix = ["Bood", 3, 'A'];
let fruit =["Apple" ,"Orange"];
console.log(nums.length);

//let [firstName,middleName,lastName]= ['Dylan','Coding God','Israel'];
    
    let personalinformation={firstName:'Dylan',lastName:'Israel',city:'Austin',state:'Texas',zipCode:73301};
    //const {firstName,lastName}=personalinformation;
    let example={...personalinformation};
   // console.log(personalinformation.firstName)
  // console.log(firstName + lastName);
  example.country="Myanmar";
  personalinformation.salary="400000";
  console.log(example);
  console.log(personalinformation);