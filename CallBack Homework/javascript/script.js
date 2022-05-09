//Q1 :

// function fun1() {
//     console.log("Aiman Zidane");
//   }
//   function fun2(callback) {
//     callback();
//   }
//    fun2(fun1);

//----------------------------------------------------------------
//   //Q2:

// function randomNum() {
//   console.log(Math.round (Math.random() * 100));
// }

// function cool(callback) {
//   callback();
// }

// cool(randomNum);

//----------------------------------------------------------------

//Q3:

// function number(num) {
//   console.log(num);
// }
// function nice(callback) {
//   callback(42);
// }
//   nice(number);

//----------------------------------------------------------------

// Q4 :

function randomNumber(num1, num2, num3, num4, num5) {
  let arr = [], randomNum;
  arr.push(num1, num2, num3, num4, num5);
  return randomNum = arr[Math.floor(Math.random() * arr.length)];
}

function amazing(callback) {
  const num = callback(42, 128, 37, 81, 66);
  document.write("Num : " + num);
}
amazing(randomNumber);