function idcheck() {
    let idnumber = [], sum = 0;
    let valuenumber = [1, 2, 1, 2, 1, 2, 1, 2];
    for (let i = 0; i < 8; i++) {
        idnumber[i] = (document.getElementById("id").value[i] * valuenumber[i]);// קליטת מספר זהות והכפלתו
    }
    for (let i = 0; i < idnumber.length; i++) {
        if (idnumber[i] < 10) {
            sum = sum + idnumber[i];
        } else {
            sum = sum + 1 + (idnumber[i] % 10); // חילוק בשארית ולהוסי 1 מכיוון המסרים נעים בין 10-19
        }
    }
    let checkdigit = 10 - (sum % 10);
    if (document.getElementById("id").value[8] == checkdigit) { //בדיקת התאמת ספרת ביקורת
        alert("your ID number is : " + true);
    } else
        alert("your ID number is : " + false);
}

function namecheck() {
    let Name
    Name = (document.getElementById("name").value.length); //  קליטת השם  
    if (Name >= 15 || Name <= 2) {
        alert("Ivalid name ,Enter aname between 2 to 15 character ");
    }
}

function agecheck() {
    let age = (document.getElementById("age").value);
    if (age <= 0 || age >= 120) {
        alert("Unlogical age");
    }

}

function mailcheck() {
    let mail;
    mail = (document.getElementById("mail").value);
    let counter = 0, arr = [], strcounter1 = 0; character = [], domaincounter = 0, numbers = [];
    character = [" ", "!", "#", "$", "%", "&", "'", "*", "+", "-", "/", "=", "?", "^", "_", "`", "{", "|", "}", "~"];
    numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    arr = mail.split("");

    // testing for the local part ;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "@") {
            counter++;  // @ conter for @ character ;
            strcounter1 = i; // local stirg conuter  up to the  @ character ;
        }
    }
    if (counter == 0 || counter == 2 || counter - 1 > 64) { //no @ character & only one @ is allowed outside quotation marks;
        alert(false);                                      // local-part is longer than 64 characters;
    }

    for (let i = 0; i < strcounter1; i++) { //dot ., provided that it is not the first or last character;
        if (arr[0] == "." || arr[strcounter1 - 1] == ".")
            alert(false);
    }

    for (let localstring = 0; localstring < strcounter1; localstring++) { // none of the special characters and space in the local part 
        for (let k = 0; k < character.length; k++) {  //are allowed outside quotation marks ;
            if (arr[localstring] == character[k]) {
                if (arr[localstring - 1] != '"' && arr[localstring + 1] != '"')
                    alert(false);
            }
        }
    }

    // testing for the domain part ;

    for (let i = strcounter1 + 1; i < arr.length; i++) {
        domaincounter = i; // the length of the domain after the @ ;
    }
    if (domaincounter > 63)
        alert(false);
    for (let i = strcounter1 + 1; i <= domaincounter; i++) { //hyphen -, provided that it is not the first or last character;
        if (arr[strcounter1] == "-" || arr[domaincounter] == "-")
            alert(false);
    }
    for (let i = strcounter1 + 1; i <= domaincounter; i++) { //digits 0 to 9, provided that top-level domain names are not all-numeric;
        for (let x = 0; x < numbers.length; x++) {
            if (arr[i] == numbers[x])
                alert(false);
        }
    }
    for (let domainstring = 0; domainstring <= domaincounter; domainstring++) { // none of the special characters and space in the domain part 
        for (let k = 0; k < character.length; k++) {
            if (arr[strcounter1 + 1] == character[k]) {
                alert(false);
            }
        }
    }

    alert(true);

}

function maincheck() {
    namecheck();
    idcheck();
    agecheck();
    mailcheck();

}




