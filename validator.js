let send=document.querySelector(".send");
let cancel=document.querySelector(".clear");

send.addEventListener("click", valid_f());


function add_class(element, class_name){
    element.classList.add(class_name);
}
function remove_class(element, class_name){
    element.classList.remove(class_name);
}

/* //////////////////////////////////////////// */

function valid_f(){

    let name = document.querySelector("#name");
    let age = document.querySelector("#age");
    let surname = document.querySelector("#surname");

        let name_v = name.value;
        let age_v = age.value;
        let surname_v = surname.value;

    if(age_v==='' || !parseInt(age_v) || isNaN(age_v) || age_v < 1 || age_v > 125){
        add_class(age, "invalid");
        document.querySelector('.age_valid').innerHTML="Wrong data!";

    }
    else{
        remove_class(age, 'invalid');
        add_class(age, 'valid');
        document.querySelector('.age_valid').innerHTML="Data is correct";
    }
}

/*
if(name.value===""){
    document.querySelector('.name_validation').innerHTML="Wrong data!";
}
else{
    document.querySelector('.name_validation').innerHTML="Data is correct";
}








cancel.addEventListener('click',clear_f) {
*/


