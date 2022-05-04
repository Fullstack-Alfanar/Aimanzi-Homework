let Arr = [10, 4, 30, 13];

function arrLen(array) {
    let newArr = [], maxNum;
    while (array.length > 0) {
        maxNum = getMaxNum(array)
        arrArrange(maxNum);
        filterArr(maxNum);
    }
    function getMaxNum(arrNum) { // max number function 
        return Math.max(...arrNum);
    }

    function arrArrange(number) {  //max number arrangment  array
        newArr.push(number);
    }

    function filterArr(number) { // filter the max number from the array
        array = array.filter(num => num !== number);
    }
    return newArr;
}
arrLen(Arr);
console.log(arrLen(arr));




