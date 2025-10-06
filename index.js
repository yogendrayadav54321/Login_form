const name = document.getElementById("name");
const mail = document.getElementById("mail");
const pass1 = document.getElementById("password1");
const pass2 = document.getElementById("password2");
const box = document.getElementById("checkbox");
const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (name.value.trim() === "") {
        name.style.border = "2px solid red";
    } else if (mail.value.trim() === "") {
        mail.style.border = "2px solid red";
    } else if (pass1.value.trim() === "") {
        pass1.style.border = "2px solid red";
    } else if (pass2.value.trim() === "") {
        pass2.style.border = "2px solid red";
    } else if (box.value.trim() === "") {
        box.style.border = "2px solid red";
    }else if(pass1.value!==pass2.value){
alert("password not matched");
    }else if(!box.checked){
       alert("term and condition not checked") 
    }
    else{
        alert("form submitted successfully");
    }

});