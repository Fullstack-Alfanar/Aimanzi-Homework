let password = document.getElementById("psw");
let pass_length = document.getElementById("length");
let pass_num = document.getElementById("number");
let pass_uper = document.getElementById("uper");
let pass_lower = document.getElementById("lower");
let pass_english_let = document.getElementById("english_let");
let pass_special_cha = document.getElementById("special_char");
let pass_status = document.getElementById("status");

function checkFunction() {
    // cheking password lenght ;
    if (password.value.length >= 8) {
        matchingFunction(pass_length);
    } else {
        unMatchingFunction(pass_length);
    }
    // cheking number contain ;
    if (password.value.match(/[0-9]/)) {
        matchingFunction(pass_num);
    } else {
        unMatchingFunction(pass_num);
    }
    //cheking Upperercase leter ;
    if (password.value.match(/[A-Z]/)) {
        matchingFunction(pass_uper);
    } else {
        unMatchingFunction(pass_uper);
    }
    //cheking lowercase leter ;
    if (password.value.match(/[a-z]/)) {
        matchingFunction(pass_lower);
    } else {
        unMatchingFunction(pass_lower);
    }
    // cheking password language ;
    if (password.value.match(/^[a-zA-Z0-9\\!\@\#\$\%\^\&\*\?\>\<\,\.\/\;\:\'\"\|\+\=\-\_]+$/)) {
        matchingFunction(pass_english_let);
    } else {
        unMatchingFunction(pass_english_let);
    }
    //cheking special character ;
    if (password.value.match(/[\\!\@\#\$\%\^\&\*\?\>\<\,\.\/\;\:\'\"\|\+\=\-\_ ]/)) {
        matchingFunction(pass_special_cha);
    } else {
        unMatchingFunction(pass_special_cha);
    }
}

function matchingFunction(element1) {
    element1.className = "matching";
}

function unMatchingFunction(element1) {
    element1.className = "not-matching";
}