// mail validation

let mail;
mail = prompt("insert your mail");
function isMailValid(mail) {
    let counter = 0, arr = [], strcounter1 = 0; character = [], domaincounter = 0, numbers = [];
    numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    character = [" ", "!", "#", "$", "%", "&", "'", "*", "+", "-", "/", "=", "?", "^", "_", "`", "{", "|", "}", "~"];
    arr = mail.split("");
    // testing for the local part ;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "@") {
            counter++;  // @ conter for @ character ;
            strcounter1 = i; // local stirg conuter  up to the  @ character ;
        }
    }
    for (let i = 0; i < strcounter1; i++) { //dot ., provided that it is not the first or last character;
        if (arr[0] == "." || arr[strcounter1 - 1] == ".")
            return false;
    }
    if (counter == 0 || counter == 2 || counter - 1 > 64) //no @ character & only one @ is allowed outside quotation marks;
        return false;                                    // local-part is longer than 64 characters; 

    for (let localstring = 0; localstring < strcounter1; localstring++) { // none of the special characters and space in the local part 
        for (let k = 0; k < character.length; k++) {  //are allowed outside quotation marks ;
            if (arr[localstring] == character[k]) {
                if (arr[localstring - 1] != '"' && arr[localstring + 1] != '"')
                    return false;
            }
        }
    }

    // testing for the domain part ;

    for (let i = strcounter1 + 1; i < arr.length; i++) {
        domaincounter = i; // the length of the domain after the @ ;
    }
    if (domaincounter > 63)
        return false;
    for (let i = strcounter1 + 1; i <= domaincounter; i++) { //hyphen -, provided that it is not the first or last character;
        if (arr[0] == "-" || arr[domaincounter] == "-")
            return false;
    }
    for (let i = strcounter1 + 1; i <= domaincounter; i++) { //digits 0 to 9, provided that top-level domain names are not numeric;
        for (let x = 0; x < numbers.length; x++) {
            if (arr[i] == numbers[x])
                return false;
        }
    }

    for (let domainstring = 0; domainstring <= domaincounter; domainstring++) { // none of the special characters and space in the domain part 
        for (let k = 0; k < character.length; k++) {
            if (arr[strcounter1 + 1] == character[k]) {
                return false;
            }
        }
    }

    return true;
}
console.log(isMailValid(mail));
