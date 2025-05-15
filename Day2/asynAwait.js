const url= 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
async function getCovid(){
    let response= await fetch(url);
    let json= await response.json();
    console.log(json[0]);
    
}
getCovid();
