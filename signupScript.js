var fn = document.getElementById("firstname");
var fna = document.getElementById("fnAlert");
var fnRegex =/^([A-Za-z]{4,20})$/g;

var ln  = document.getElementById("lastname");
var lna = document.getElementById("lnAlert");
var lnRegex=/^([A-Za-z]{1,10})$/g;

var e = document.getElementById("inputEmail4");
var ma = document.getElementById("mailAlert");
var mailRegex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

var pn = document.getElementById("phone");
var pna = document.getElementById("pnAlert");
var pnRegex =  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g;

var pw  = document.getElementById("inputPassword4");
var pwa = document.getElementById("pAlert");
var passRegex= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/g;

var cpw = document.getElementById("inputPassword");
var cpwa = document.getElementById("cpAlert");

var cb = document.getElementById('gridCheck');

var btn = document.getElementById('bttn');


function firstName(){
     if(!fn.value.match(fnRegex)){
        fna.innerHTML="Invalid Format! only Alphabets";
        fna.style.color='red';
        return false;
    }else{
        fna.innerHTML="Valid";
        fna.style.color='green';
        return true;
    };
};

function lastName(){
    if(!ln.value.match(lnRegex)){
        lna.innerHTML="Invalid Format! only Alphabets ";
        lna.style.color='red';
        return false;
    }else{
        lna.innerHTML='valid';
        lna.style.color='green';
        return true;
    };
};

function phoneNumber(){
    if(!pn.value.match(pnRegex)){
        pna.innerHTML='Invalid Format - enter a valid number';
        pna.style.color='red';
        return false;
    }else{
        pna.innerHTML='Valid';
        pna.style.color='green';
        return true;
    }
}

function emailId(){
    if(!e.value.match(mailRegex)){
        ma.innerHTML='Invalid Format';
        ma.style.color='red';
        return false;
    }else{
        ma.innerHTML="Valid";
        ma.style.color='green';
        return true;
    }
}

function password(){
    if(!pw.value.match(passRegex)){
        pwa.innerHTML='Invalid Format! must contain atleast one uppercase,lowercase,and a number';
        pwa.style.color='red';
        return false;
    }else{
        if(pw.value.length<9){
            pwa.innerHTML="Poor";
            pwa.style.color="red";
        }else if (pw.value.length <14) {
            pwa.innerHTML="intermediate";
            pwa.style.color="orange";
        }else{
            pwa.innerHTML="Strong";
            pwa.style.color="green";
        }
        return true;
    }}

    function togglePasswordVisibility() {
        let passwordIcon = document.querySelector(".view-password");
      
        if (pw.type === "password") {
          pw.type = "text";
          passwordIcon.innerHTML = "🔓";
        } else {
          pw.type = "password";
          passwordIcon.innerHTML = "🔒";
        }
      }

function confirmPassword(){
    if(cpw.value != pw.value){
        cpwa.innerHTML='Not matching';
        cpwa.style.color='red';
        return false;
    }else{
        cpwa.innerHTML='Matching';
        cpwa.style.color='green';
        return true;
    }
}

function checkBox(){
    if(!cb.checked){
        alert("Forgetting something..... checkbox.!")
        return false;
    }else{
        return true;
    };
};

function signIn(){
    if(!firstName()|| !lastName() || !emailId() || !phoneNumber() || !confirmPassword() || !checkBox() || !password() ){
        btn.innerHTML="Incomplete";
        return false;
    }else{
        return true;
    };
};
