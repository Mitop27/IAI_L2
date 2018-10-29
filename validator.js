let send=document.querySelector('.send');
let cancel=document.querySelector('.clear');

send.addEventListener('click',function(){

let name=document.getElementById('.name');
console.log(name.value);
if(name.value===""){
    document.querySelector('.name_validation').innerHTML="Wrong data!";
}
else{
    document.querySelector('.name_validation').innerHTML="Data is correct";
}






});

cancel.addEventListener('click',function () {



});