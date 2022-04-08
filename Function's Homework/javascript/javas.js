// Function"s Homework

// Q1 :
// let sum = 0;
// let avr = 0;
// function avrg(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     avr = sum / arr.length;
//     return (avr);
// }
// console.log(avrg(arr = [1, 2, 3, 4, 5]));
// console.log(avrg(arr = [2, 4, 6, 8, 10, 12]));
// console.log(avrg(arr = [1, 2, 3]));

// ----------------------------------------------------------------
// Q2:
// function minnum(arr) {
//     min = arr[0];
// for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     return (min);
// }
// console.log(minnum(arr = [5, 6, 11, 4, 5]));
// console.log(minnum(arr = [7, 5, 6, 8, 10, 12]));
// console.log(minnum(arr = [4, 6, 3]));

// ----------------------------------------------------------------
// Q3:
// function maxlen(arr) {
//     let max = arr[0].length;
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i].length > max) {
//             max = arr[i].length;
//         }
//     }
//     return (max);
// }
// console.log(maxlen(arr = ["hello" ,"its", "me"]));
// console.log(maxlen(arr = ["aiman","zidane"]));
// console.log(maxlen(arr = ["full", "stack","course"]));

// ----------------------------------------------------------------

// Q4:
// function maxlen(arr) {
//     let maxword=arr[0];
//     let max = arr[0].length;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length > max) {
//             max=arr[i].length;
//             maxword = arr[i];
//         }
//     }
//     return (maxword);
// }
// console.log(maxlen(arr = ["m","hello", "its", "me"]));
// console.log(maxlen(arr = ["xvv","aiman", "zidane"]));
// console.log(maxlen(arr = ["fv","full", "stack", "course"]));

// ----------------------------------------------------------------
// Q5:
// function avrnum(arr) {
//     let sum = 0, counter = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     avr = sum / arr.length;
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[j] >= avr) {
//             counter++;
//         }
//     }
//     return (counter);
// }
// console.log(avrnum(arr = [2, 4, 8, 10]));
// console.log(avrnum(arr = [7, 5, 6, 8, 10, 12]));
// console.log(avrnum(arr = [4, 6, 3]));
// ----------------------------------------------------------------

// Q6.1:
// function primnum(num) {
//     let counter = 0;
//     if (num == 1 || num == 2) {
//         return true;
//     } else {
//         for (let i = 1; i <= num; i++) {
//             if (num % i == 0) {
//                 counter++;
//             }
//         }
//         if (counter == 2) {
//             return (true);
//         }
//         else {
//             return (false);
//         }
//     }
// }
// console.log(primnum(6));
// console.log(primnum(4));
// console.log(primnum(8));


// Q6.2: another way :

// function primnum(num) {
//     let counter = 0;
//     if (num == 1 || num == 2) {
//         return true;
//     } else {
//         for (let i = 1; i <= num; i++) {
//             if (num % i == 0) {
//                 counter++;
//             }
//         }
//         if (counter == 2) {
//             return (true);
//         }
//         else {
//             return (false);
//         }
//     }
// }
// console.log(primnum(+prompt("insert number")));
// console.log(primnum(+prompt("insert number")));
// console.log(primnum(+prompt("insert number")));

// ----------------------------------------------------------------

// Q7 :

function primnum(arr) {
    let counter = 0, true_count_num = 0, number;
    for (let j = 0; j < arr.length; j++)
    {
        number = arr[j];
        for (let i = 1; i <= number; i++)
        {
            if (number % i == 0)
            {
                counter++;
            }
        }
        if (counter == 2)
        {
            true_count_num++;
            counter=0;
        }
        else 
        {
            counter=0;
            return (false);
        }
    }
    return (true);
}
  console.log(primnum(arr = [7, 11, 13]));
  console.log(primnum(arr = [51, 9, 15]));
  console.log(primnum(arr = [21, 23, 29]));
// ----------------------------------------------------------------

