// Q1:
// document.getElementById("to").addEventListener("click", function () {
//     to_JSON();
// })
// document.getElementById("from").addEventListener("click", function () {
//     from_JSON();
// })

let x, item;

// books = [
//     {
//         Book_ID: 44444,
//         Book_Name: "The Old Man and the sea",
//         Book_Author: "Ernest Hemmingway",
//         Book_Price: 60,
//     },
//     {
//         Book_ID: 55555,
//         Book_Name: "Peter Pan",
//         Book_Author: "J.M. Barrie",
//         Book_Price: 50,
//     },
//     {
//         ook_ID: 66666,
//         Book_Name: "The Giver",
//         Book_Author: "Lois Lowry",
//         Book_Price: 70,
//     }];

// function to_JSON() {
//     x = JSON.stringify(books);
//     console.log(x);
// }
// function from_JSON() {
//     item = JSON.parse(x);
//     for (let i of books) {
//         for (let j in i) {
//             console.log(j + ":" + i[j]);
//         }
//         console.log("-------------------------------------------");
//     }
// }


// ------------------------------------------------------------------------

//  Q2:

let y;
document.getElementById("to").addEventListener("click", function () {
    to_JSON();
})
document.getElementById("from").addEventListener("click", function () {
    from_JSON();
})

mycat = {
    Name: "catcat",
    Age: 3,
    Color: "gray",
    Is_Sterile: true,
};

function to_JSON() {
    x = JSON.stringify(mycat);
    console.log(x);
}

function from_JSON() {
    let yourcat = JSON.parse(x);
    console.log("Name :" + yourcat.Name + "\n" + "Age :" + yourcat.Age + "\n" + "Color :" + yourcat.Color + "\n" + "Is Sterile :" + yourcat.Is_Sterile);
}










