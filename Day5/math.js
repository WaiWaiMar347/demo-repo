function add(a,b){
return a+b;
}
function div(a,b){
    if( b===0) return "Cannot divide 0"
    else return a/b
   /* switch (b){
        case 0: return "Skip"
        break
        case !0: return a/b
        break
    }*/
}
module.exports={add , div};