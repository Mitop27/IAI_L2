let send=document.querySelector(".send");

send.addEventListener("click", valid_f);


document.getElementById(".cancel").addEventListener("click", function(event){
    event.preventDefault();
});

function add_class(element, class_name){
    element.classList.add(class_name);
}
function remove_class(element, class_name){
    element.classList.remove(class_name);
}

/* //////////////////////////////////////////// */

function valid_f(){

    event.preventDefault();



    let name = document.querySelector("#name");
    let age = document.querySelector("#age");
    let surname = document.querySelector("#surname");
    let email = document.querySelector("#email");
    let description = document.querySelector("#description");
    let re = /^[A-Za-z]+$/;

        let name_v = name.value;
        let age_v = age.value;
        let surname_v = surname.value;
        let email_v = email.value;
        let description_v = description.value;
/* AGE */
    if(age_v==='' || !parseInt(age_v) || isNaN(age_v) || age_v < 1 || age_v > 125){
        remove_class(age, "valid");
        add_class(age, "invalid");
        document.querySelector('.age_valid').innerHTML="Wrong data!";

    }
    else{
        remove_class(age, "invalid");
        add_class(age, "valid");
        document.querySelector('.age_valid').innerHTML="Data is correct";
    }
/* NAME */

    if(!re.test(name_v) || name_v==='') {
        remove_class(name, "valid");
        add_class(name, "invalid");
        document.querySelector('.name_valid').innerHTML="Wrong data!";
    }
    else{
        remove_class(name, "invalid");
        add_class(name, "valid");
        document.querySelector('.name_valid').innerHTML="Data is correct";
    }

/* SURNAME */

    if(!re.test(surname_v) || surname_v==='') {
        remove_class(surname, "valid");
        add_class(surname, "invalid");
        document.querySelector('.surname_valid').innerHTML="Wrong data!";
    }
    else {
        remove_class(surname, "invalid");
        add_class(surname, "valid");
        document.querySelector('.surname_valid').innerHTML = "Data is correct";
    }


/*  EMAIL  */

    if(email_v==='') {
        remove_class(email, "valid");
        add_class(email, "invalid");
        document.querySelector('.email_valid').innerHTML="Wrong data!";
    }
    else {
        remove_class(email, "invalid");
        add_class(email, "valid");
        document.querySelector('.email_valid').innerHTML = "Data is correct";
    }

/*  OPIS  */


    if(description_v==='') {
        remove_class(description, "valid");
        add_class(description, "invalid");
        document.querySelector('.description_valid').innerHTML="Data is empty!";
    }
    else {
        remove_class(description, "invalid");
        add_class(description, "valid");
        document.querySelector('.description_valid').innerHTML = "Data is correct";
    }

}









