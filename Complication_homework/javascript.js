let arr = [10, 4, 30, 13];
let maxNum=0;
let newArr = [];

function arrLen(array) { 
    if (array.length >0) {
        maxNum = getMaxNum(array)
        arrArrange(maxNum);
        filterArr(array, maxNum);
    }else{
        endFunction(newArr)
    }
}

function getMaxNum(arrNum) { // max number function 
    return Math.max(...arrNum);
}

function arrArrange(number) {  //max number arrangment  array
    newArr.push(number);
}

function filterArr(array, number) { // filter the max number from the array
    array = array.filter(num => num !== number);
    arrLen(array);
}
function endFunction(array) {
    console.log(array);
}

arrLen(arr);
