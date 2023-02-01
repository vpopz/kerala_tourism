var email = document.getElementById('exampleInputEmail1');
var ea = document.getElementById('emailAlert');
var mailRegex= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

var password = document.getElementById('exampleInputPassword1');
var pa = document.getElementById('passwordAlert');
var passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

var ba = document.getElementById('btnAlert');






function emailValid(){
    if(!email.value.match(mailRegex)){
        ea.innerHTML="Invalid Format ❌ ";
        ea.style.color='red';
        return false;
    }else{
        ea.innerHTML="✔";
        return true;
    };
};

function passwordValid(){
    if(!password.value.match(passRegex)){
        pa.innerHTML="Invalid Format ❌";
        pa.style.color="red";
        return false;
    }else{
        pa.innerHTML="Valid ✔";
        pa.style.color='green';
        return true;
    };
};


function validate(){
    if(!emailValid() || !passwordValid()){
        ba.innerHTML="Invalid Data";
        return false;
    }else{
        return true;
    };
};





