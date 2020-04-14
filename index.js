// 1---------------------------------------------------------------------------
// varianta1
// var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// for (var i = 1; i <= 20; i++) {
//     console.log(i);
// }

// varianta2
function listNums(firstNums) {
    for (var i = 0; i < firstNums.length; i++) {
        console.log(firstNums[i]);
    }
}

listNums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])

console.log('----------------');
// 2---------------------------------------------------------------------------

function oddList() {
    for (var i = 1; i < 20; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
oddList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])

console.log('----------------');
// 3---------------------------------------------------------------------------
// varianta1
// function adder(num1, num2, num3, num4, num5, num6) {
//     return num1 + num2 + num3 + num4 + num5 + num6;
// }

// var result = adder(7, 5, 20, 7, 12, 15);

// console.log(result)

// varianta2
var nums = [7, 5, 20, 7, 12, 15];

function sumOfNumbers(nums) {
    var i = 0;
    var sum = 0;
    while (i < nums.length) {
        sum = sum + nums[i];
        i++
    }
    return sum;
}

console.log(sumOfNumbers(nums));

console.log('----------------');
// 4---------------------------------------------------------------------------


var randList = [7, 5, 99, 7, 12, 15]
var max = 0;

function maxNumber(randList) {
    for (var i = 0; i < randList.length; i++) {
        if (max < randList[i]) {
            max = randList[i]
        }
    }
    return max;
}
console.log(maxNumber(randList))

console.log('----------------');
// 5---------------------------------------------------------------------------

var numbers = [1, 0, 1, 0, 1, 0, 0, 1, 1, 1];
var element = 1;

var count = function count(arr, element) {
    var c = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            c = c + 1;
        }
    }
    return c;
};

console.log(count(numbers, element));