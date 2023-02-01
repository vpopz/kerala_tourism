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
        fna.innerHTML='Invalid Format'
        fna.style.color='red';
        return false;
    }
    else{
        fna.innerHTML="valid";
        fna.style.color='green';
        return true;
    };
};

function lastName(){
    if(!ln.value.match(lnRegex)){
        lna.innerHTML="Invalid Format";
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
        pna.innerHTML='invalid Format';
        pna.style.color='red';
        return false;
    }else{
        pna.innerHTML='valid';
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
        ma.innerHTML="valid";
        ma.style.color='green';
        return true;
    }
}

function password(){
    if(!pw.value.match(passRegex)){
        pwa.innerHTML='invalid Format';
        pwa.style.color='red';
        return false;
    }else{
        pwa.innerHTML="valid";
        pwa.style.color='green';
        return true;
    };
};

function confirmPassword(){
    if(cpw.value != pw.value){
        cpwa.innerHTML='invalid Format';
        cpwa.style.color='red';
        return false;
    }else{
        cpwa.innerHTML='valid';
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
    if(!firstName()|| !lastName() || !emailId() || !phoneNumber() || !password() || !confirmPassword() || !checkBox()){
        btn.innerHTML="Incomplete";
        return false;
    }else{

        return true;
    };

};