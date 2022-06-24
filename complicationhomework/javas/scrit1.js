let arr = [10, 4, 30, 13];
let maxNum=0;
let newArr = [];

function arrLen(array) { 
    if (array.length >0) {
        maxNum = getMaxNum(array)
        arrArrange(maxNum);
        filterArr(array, maxNum);
    }
}

function getMaxNum(arrNum) { // max number function 
    return Math.max(...arrNum);
}

function arrArrange(number) {  //max number arrangment  array
    newArr.push(number);
    return (newArr);
}

function filterArr(array, number) { // filter the max number from the array
    array = array.filter(num => num !== number);
    arrLen(array);
}

arrLen(arr);
console.log(arrArrange());


