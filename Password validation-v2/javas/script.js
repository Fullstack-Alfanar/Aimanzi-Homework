let password = document.getElementById("psw");
let pass_length = document.getElementById("length");
let pass_num = document.getElementById("number");
let pass_uper = document.getElementById("uper");
let pass_lower = document.getElementById("lower");
let pass_english_let = document.getElementById("english_let");
let pass_special = document.getElementById("special_char");


function checkMatchingFunction() {

    let length = password.value.length >= 8;
    setIfmatch(length, pass_length);

    let num = password.value.match(/[0-9]/);
    setIfmatch(num, pass_num);

    let uppercase = password.value.match(/[A-Z]/);
    setIfmatch(uppercase, pass_uper);

    let lowercase = password.value.match(/[a-z]/);
    setIfmatch(lowercase, pass_lower);

    let english = password.value.match(/^[a(/^[a-zA-Z0-9\\!\@\#\$\%\^\&\*\?\>\<\,\.\/\;\:\'\"\|\+\=\-\_\;]/);
    setIfmatch(english, pass_english_let);

    let special_chara = password.value.match(/[`\`\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+\,\.\/\'\]\[\<\>\?\"\:\ ]/);
    setIfmatch(special_chara, pass_special);
}

function setIfmatch(isMatch, element) {
    if (isMatch) {
        element.className = "active";
        element.innerText = "approval";
    } else {
        element.className = "disactive";
        element.innerText = "require missing";
    }
}









