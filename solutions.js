function kangaroo(x1, v1, x2, v2) {
    if (x1 > x2 && v1 >= v2) {
        return "NO";
    } else if (x1 < x2 && v1 <= v2) {
        return "NO";
    } else {
        let result = "NO";
        if (v1 > v2) {
            while (true) {
                x1 += v1;
                x2 += v2;
                if (x1 > x2) {
                    break;
                } else if (x1 === x2) {
                    result = "YES";
                    break;
                }
            }
        } else {
            while (true) {
                x1 += v1;
                x2 += v2;
                if (x1 < x2) {
                    break;
                } else if (x1 === x2) {
                    result = "YES";
                    break;
                }
            }
        }
        return result;
    }
}
// let test1 = kangaroo(2, 1, 1, 2);
// let test2 = kangaroo(0, 3, 4, 2);
// let test3 = kangaroo(0, 2, 5, 3);
let test4 = kangaroo(21, 6, 47, 3);
console.log(test4);


function divisibleSumPairs(n, k, ar) {
    let pairs = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((ar[i] + ar[j]) % k === 0) {
                pairs++;
            }
        }
    }
    console.log(pairs);
    return pairs;
}

const n = 6;
const k = 3;
const ar = [1, 3, 2, 6, 1, 2];
divisibleSumPairs(n, k, ar);


function migratoryBirds(arr) {
    // Write your code here
    let frequency = arr.reduce((obj, element) => {
        if (Object.keys(obj).includes(String(element))) {
            obj[element]++;
        } else {
            obj[element] = 1;
        }
        return obj;
    }, {})
    let sortableFrequency = [];
    for (let [key, value] of Object.entries(frequency)) {
        sortableFrequency.push([key, value]);
    }
    sortableFrequency.sort((a, b) => {
        return b[1] - a[1];
    })
    console.log(sortableFrequency[0][0]);
    return sortableFrequency[0][0];
}

migratoryBirds([1, 4, 4, 4, 5, 6]);


var balancedStringSplit = function(s) {
    let result = 0;
    let sum = 0;
    for (let letter of s) {
        letter === "R" ? sum++ : sum--;
        sum === 0 ? result++ : null;
    }
    console.log(result);
};

const s = "RLLLLRRRLR";
balancedStringSplit(s);

var sortSentence = function(s) {
    const numbers = s.split(/[a-z]+/i).filter(e => e != "").map(Number);
    const words = s.split(/\d\s?/).filter(e => e != "");
    let arr = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = numbers[i];
        arr[index-1] = words[i];
    }
    return arr.join(" ");

};

const s = "Myself2 Me1 I4 and3";

sortSentence(s);

function plusMinus(arr) {
    let [positive, negative, zeros] = [0, 0, 0];
    for (let element of arr) {
        if (element > 0) {
            positive++;
        } else if (element < 0) {
            negative++;
        } else {
            zeros++
        }
    }

    function log(number) {
        const len = arr.length;
        if (number / len === 0) {
            console.log("0.000000");
        } else if (number / len === 1) {
            console.log("1.000000");
        } else {
            console.log(number/len);
            console.log('0.' + Math.round(number / len * 1000000));
        }
    }
    log(positive);
    log(negative);
    log(zeros);
}

plusMinus([4, 3, 9, 6, 4, 1]);

let nums = '-92 -21 -93 -27 -45 -63 53 45 0 6 -67 84 96 86 18 36 53 0 47 88 91 -59 65 62 3 13 0 -49 -47 94 -63 65 -23 48 -5 0 -10 67 -23 19 -11 46 80 -83 0 -40 74 -63 -20 -72 98 -72 66 0 -58 -1 67 -22 8 -45 32 -65 0 -10 -65 -81 -36 -55 -99 -18 -82';
nums = nums.split(" ");
console.log(nums);
plusMinus(nums);


function miniMaxSum(arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    const miniSum = arr.slice(0, 4).reduce((a, b) => a + b);
    const maxSum = arr.slice(1).reduce((a, b) => a + b);
    console.log(miniSum, maxSum);
}

miniMaxSum([1, 3, 5, 7, 9]);

function timeConversion(s) {
    let hour = s.match(/^\d\d/)[0];
    const median = s.match(/(AM|PM)$/)[0];
    let result;
    if (median === "PM" && hour === "12") {
        result = s;
    } else if (median === "PM") {
        hour = Number(hour) + 12;
        s = s.replace(/^\d\d/, hour);
        result = s;
    } else if (median === "AM" && hour === "12") {
        hour = "00";
        s = s.replace(/^\d\d/, hour);
        result = s;
    } else {
        result = s;
    }
    console.log(result.slice(0, 8));
}

timeConversion("07:05:45PM");
timeConversion("12:01:00PM");
timeConversion("12:01:00AM");


function bonAppetit(bill, k, b) {
    const sum = bill.reduce((a, b) => a + b);
    const halfBill = sum / 2;
    const annBill = halfBill - (bill[k] / 2);
    if (annBill === b) {
        console.log("Bon Appetit");
    } else {
        console.log(bill[k] / 2);
    }
}

bonAppetit([3, 10, 2, 9], 1, 12);

function pickingNumbers(a) {
    let maxLength = 0;
    const sorted = a.sort((a, b) => a - b);
    for (let i = 0; i < sorted.length; i++) {
        let arr = [sorted[i]];
        for (let j = i + 1; j < sorted.length; j++) {
            if (sorted[j] - sorted[i] <= 1) {
                arr.push(sorted[j]);
            }
        }
        arr.length > maxLength ? maxLength = arr.length : null;
    }
    console.log(maxLength);
}

pickingNumbers([4, 6, 5, 3, 3, 1]);


function birthday(s, d, m) {
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        let arr = [s[i]];
        if (arr.length === m && s[0] === d) {
            result++;
        }
        for (let j = i + 1; j < s.length; j++) {
            arr.push(s[j]);
            if (arr.length === m) {
                let sum = arr.reduce((a, b) => a + b);
                if (sum === d) {
                    result++;
                }
            }
        }
    }
    console.log(result);
}

const s = [4];
const d = 4;
const m = 1;
birthday(s, d, m);


function getTotalX(a, b) {
    let result = [];
    for (let number = a[a.length - 1]; number <= b[0]; number++) {
        let divisible1 = a.every(element => number % element === 0);
        let divisible2 = b.every(element => element % number === 0);
        if (divisible1 && divisible2) {
            result.push(number);
        }
    }
    console.log(result);
}

const a = [2, 4];
const b = [16, 32, 96];
getTotalX(a, b);



function plusMinus(arr) {
    let [positive, negative, zeros] = [0, 0, 0];
    arr.forEach(element => {
        element > 0 ? positive++ : element < 0 ? negative++ : zeros++;
    });

    function logging(number) {
        let percentage = number / arr.length;
        console.log(percentage.toFixed(6));
    }
    logging(positive);
    logging(negative);
    logging(zeros);
}


const arr = [-4, 3, -9, 0, 4, 1];
plusMinus(arr);

function matchingStrings(strings, queries) {
    let result = [];
    queries.forEach(query => {
        let occurance = 0;
        // console.log(query);
        strings.forEach(string => {
            if (query === string) {
                occurance++;
            }
        })
        result.push(occurance);
    })
    console.log(result);
    return result;
}

const strings = ["ab", "ab", "abc", "def", "wxy"];
const queries = ["ab", "abc", "bc"];
matchingStrings(strings, queries);


function lonelyinteger(a) {
    const sortedArr = a.sort((a, b) => a - b);
    for (let i = 0; i < a.length; i++) {
        if (a[i] === a[i + 1]) {
            i++;
        } else {
            console.log(a[i]);
        }
    }
}

const a = [1, 2, 3, 4, 4, 2, 1];
lonelyinteger(a);


function flippingBits(n) {
    let bit32 = n.toString(2);
    let arr = bit32.split("");
    while (arr.length < 32) {
        arr.unshift("0");
    }
    arr = arr.map(e => {
        if (e === "0") {
            return "1";
        } else {
            return "0";
        }
    })
    arr = arr.join("");
    console.log(arr);
    console.log(parseInt(arr, 2));
}

const n = 9;
flippingBits(n);


function diagonalDifference(arr) {
    let diognal1 = 0,
        diognal2 = 0,
        j = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
        diognal1 += arr[i][i];
        diognal2 += arr[i][j];
        j--;
    }
    return Math.abs(diognal1-diognal2);
}

const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
];
diagonalDifference(arr);


function pangrams(s) {
    const words = s.split("").filter(e => e !== " ");
    const letters = words.map(e => e.toLowerCase());
    const uniqueLetters = [...new Set(letters)];
    if (uniqueLetters.length === 26) {
        return "pangram";
    } else {
        return "not pangram";
    }
}

let s1 = "Wwe promptly judged antique ivory buckles for the next prize";
let s2 = "We promptly judged antique ivory buckles for the prize";
pangrams(s1);


function twoArrays(k, A, B) {
    const sortedA = A.sort((a, b) => a - b);
    const sortedB = B.sort((a, b) => b - a);
    const bool = sortedA.every((element, index) => (element + sortedB[index]) >= k)
    const result = bool ? "YES" : "NO";
    console.log(result);
    return result;
}

const k = 10;
const A = [2, 1, 3];
const B = [7, 8, 9];
twoArrays(k, A, B);



function countingSort(arr) {
    const max = arr.reduce((a, b) => Math.max(a, b));
    let result = new Array(max + 1);
    result.fill(0);
    for (let i = 0; i < arr.length; i++) {
        result[arr[i]]++;
    }
    console.log(result);
}

const arr = [1, 1, 3, 2, 1];
countingSort(arr);

var sumOddLengthSubarrays = function(arr) {
    let sum = 0;
    let subarray;
    for (let len = 1; len <= arr.length; len += 2) {
        subarray = [];
        for (let j = 0; j < arr.length; j++) {
            subarray.push(arr[j]);
            if (subarray.length === len) {
                sum += subarray.reduce((a, b) => a + b);
                subarray.shift();                
            }
        }
    }
    console.log(sum);
};

const arr = [1, 4, 2, 5, 3];
sumOddLengthSubarrays(arr);

var xorOperation = function(n, start) {
    let nums = [];
    for (let i = 0; i < n; i++) {
        nums[i] = start + 2 * i;
    }
    let result = nums.reduce((a, b) => a ^ b);
    console.log(result);
};

xorOperation(10, 5);


var areOccurrencesEqual = function(s) {
    let obj = {};
    for (let letter of s) {
        if (Object.keys(obj).includes(letter)) {
            obj[letter]++;
        } else {
            obj[letter] = 1;
        }
    }
    const value = Object.values(obj)[0];
    const bool = Object.values(obj).every(e => e === value);
    console.log(bool);
};

areOccurrencesEqual("aaabb");

function fizzBuzz(n) {
    let result;
    for (let i = 1; i <= n; i++) {
        result = null;
        if (i % 3 === 0 && i % 5 === 0) {
            result = "FizzBuzz";
        } else if (i % 3 === 0) {
            result = "Fizz";
        } else if (i % 5 === 0) {
            result = "Buzz";
        } else {
            result = i;
        }
        console.log(result);
    }
}
fizzBuzz(15);

function findMedian(arr) {
    // Write your code here
    const sortedArr = arr.sort((a, b) => a - b);
    console.log(sortedArr);
    const len = sortedArr.length;
    console.log(sortedArr[(len - 1) / 2]);
}

findMedian([5, 4, 1, 2, 3]);


function sockMerchant(n, ar) {
    let obj = {}, result = 0;
    for (let element of ar) {
        if (Object.keys(obj).includes(String(element))) {
            obj[element]++
        } else {
            obj[element] = 1;
        }
    }
    const values = Object.values(obj);
    values.forEach(e => {
        result += Math.floor(e / 2);
    })
}

const n = 9;
const ar = [10, 20, 20, 10, 30, 50, 10, 20, 10];
sockMerchant(n, ar);


var diagonalSum = function(mat) {
    let result = 0;
    let len = mat.length;
    for (let i = 0; i < mat.length; i++) {
        result += mat[i][i];
        if ((len - 1) !== i) {
            result += mat[i][len - 1];
        }
        len--;
    }
    console.log(result);
};

const mat = [
    [5]
];

diagonalSum(mat);

var canMakeArithmeticProgression = function(arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    const difference = sortedArr[1] - sortedArr[0];
    let bool = false;
    for (let i = 0; i < sortedArr.length - 1; i++) {
        if (sortedArr[i + 1] - sortedArr[i] === difference) {
            bool = true;
        } else {
            bool = false;
            break;
        }
    }
    console.log(bool);
    return bool;
};

canMakeArithmeticProgression([3, 5, 1]);


var numOfStrings = function(patterns, word) {
    let result = 0;
    for (let i = 0; i < patterns.length; i++) {
        if (word.includes(patterns[i])) {
            result++;
        }
    }
    console.log(result);
    return result;
};

const patterns = ["a", "abc", "bc", "d"];
const word = "abc";
numOfStrings(patterns, word);



var destCity = function(paths) {
    let firstDestinations = [],
        lastDestinations = [];
    for (let i = 0; i < paths.length; i++) {
        lastDestinations.push(paths[i][1]);
    }
    for (let i = 0; i < paths.length; i++) {
        firstDestinations.push(paths[i][0]);
    }
    lastDestinations.forEach(e => {
        if (!firstDestinations.includes(e)) {
            console.log(e);
        };
    })
};

const paths = [
    ["B", "C"],
    ["D", "B"],
    ["C", "A"]
];
destCity(paths);


var minOperations = function(nums) {
    if (nums.length === 1) return 0;
    let result = [nums[0]];
    let operations = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > result[i - 1]) {
            result.push(nums[i]);
        } else {
            operations += result[i - 1] + 1 - nums[i];
            result.push(result[i - 1] + 1);
        }
    }
    console.log(operations);
};

const nums = [1, 5, 2, 4, 1];
minOperations(nums);


var maxCoins = function(piles) {
    const decrement = piles.sort((a, b) => b - a);
    const len = (piles.length / 3) * 2;
    let sum = 0;
    for (let i = 1; i < len; i += 2) {
        sum += decrement[i];
    }
    console.log(sum);
    return sum;
};

maxCoins([9, 8, 7, 6, 5, 1, 2, 3, 4]);

var squareIsWhite = function(coordinates) {
    const letters = {
        "a": 1,
        "b": 2,
        "c": 3,
        "d": 4,
        "e": 5,
        "f": 6,
        "g": 7,
        "h": 8
    }
    const sum = letters[coordinates[0]] + Number(coordinates[1]);
    console.log(sum % 2 === 1);
    return sum % 2 === 1;

};

squareIsWhite("a1"); // 0 + 0 = 1 false
squareIsWhite("h3"); // 7 + 3 = 10 true
squareIsWhite("c7"); // 2 + 7 = 9 false



var generateTheString = function(n) {
    let result = "";
    if (n % 2 === 0) {
        for (let i = 0; i < n; i++) {
            result += "a";
        }
    } else {
        for (let i = 0; i < n - 1; i++) {
            result += "a";
        }
        result += "b";
    }

    console.log(result);
    return result;
};

generateTheString(4);
generateTheString(2);
generateTheString(7);

var firstUniqChar = function(s) {
    let result = -1;
    let arr = [...s];
    for (let letter of arr) {
        let occurance = arr.filter(e => e === letter);
        if (occurance.length === 1) {
            result = arr.indexOf(letter);
            break;
        }
    }
    console.log(result);
    return result;

};

const s = "aabb";
firstUniqChar(s);

var singleNumber = function(nums) {
    let result;
    for (let letter of arr) {
        let occurance = arr.filter(e => e === letter);
        if (occurance.length === 1) {
            result = e;
            break;
        }
    }
    console.log(result);
    return result;
};

var addBinary = function(a, b) {
    const decimal = parseInt(a, 2) + parseInt(b, 2);
    return decimal.toString(2);
};

const a = "1010";
const b = "1011";
addBinary(a, b);


var isSumEqual = function(firstWord, secondWord, targetWord) {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

    function convert(alphabet, str) {
        let result = "";
        for (let letter of str) {
            result += alphabet.indexOf(letter);
        }
        return Number(result);
    }
    const first = convert(alphabet, firstWord);
    const second = convert(alphabet, secondWord);
    const target = convert(alphabet, targetWord);
    return (first + second) === target;
};

const firstWord = "acb";
const secondWord = "cba";
const targetWord = "cdb";
isSumEqual(firstWord, secondWord, targetWord);


var wordPattern = function(pattern, s) {
    if (pattern.length !== s.split(" ").length) {
        return false;
    }
    let obj = {},
        arr = s.split(" "),
        bool = false,
        i = 0;

    for (let letter of pattern) {
        if (Object.keys(obj).includes(letter)) {
            if (obj[letter] === arr[i]) {
                bool = true;
            } else {
                bool = false;
                break;
            }
        } else if (Object.values(obj).includes(arr[i])) {
            bool = false;
            break;
        } else {
            obj[letter] = arr[i];
            bool = true;
        }
        i++;
    }
    console.log(bool);
};

const pattern = "a";
const s = "a";
wordPattern(pattern, s);


function catAndMouse(x, y, z) {
    const catAToMouse = Math.abs(x - z);
    const catBToMouse = Math.abs(y - z);
    if (catAToMouse < catBToMouse) {
        return "Cat A";
    } else if (catAToMouse > catBToMouse) {
        return "Cat B";
    } else {
        return "Mouse C";
    }
}

catAndMouse(2, 5, 4);



function pageCount(n, p) {
    // Write your code here
    let index, pages = [
        [null, 1]
    ];
    for (let i = 2; i <= n; i += 2) {
        pages.push([i, i + 1]);
    }
    for (let i = 0; i < pages.length; i++) {
        if (pages[i].includes(p)) {
            index = i;
            break;
        }
    }
    const fromBegin = index;
    const fromEnd = pages.length - 1 - index;
    const result = fromBegin > fromEnd ? fromEnd : fromBegin;
    console.log(result);
}

pageCount(6, 2);


function caesarCipher(s, k) {
    let codesArr = [];
    let code;
    k = (k > 26) ? k % 26 : k;
    for (let i = 0; i < s.length; i++) {
        code = s.charCodeAt(i);
        if (code >= 65 && code <= 90) {
            code = (code + k) > 90 ? code + k - 26 : code + k;
            codesArr.push(code);
        } else if (code >= 97 && code <= 122) {
            code = (code + k) > 122 ? code + k - 26 : code + k;
            codesArr.push(code);
        } else {
            codesArr.push(code);
        }
    }
    console.log(String.fromCharCode(...codesArr));
}

const s = "www.abc.xy";
const k = 87;
caesarCipher(s, k);

function maxMin(k, arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    let minUnfairness = Infinity;
    let unfairness, min, max;
    for (let i = 0; i + k <= sortedArr.length; i++) {
        min = sortedArr[i];
        max = sortedArr[i + k - 1];
        unfairness = max - min;
        unfairness < minUnfairness ? minUnfairness = unfairness : minUnfairness;
    }
    console.log(minUnfairness);
    return minUnfairness;
}

maxMin(2, [1, 4, 7, 5]);


function superDigit(n, k = 1) {
    const numbers = n.split("").map(Number);
    const sum = numbers.reduce((a, b) => a + b) * k;
    if (sum < 10) {
        console.log(sum);
        return sum;
    } else {
        return superDigit(String(sum));
    }
}

superDigit('9875', 4);

function gridChallenge(grid) {
    let columns = [];

    function sorting(word) {
        if (typeof word === "string") {
            return word.split("").sort().join("");
        } else {
            return word.sort().join("");
        }

    }
    grid = grid.map(sorting);
    for (let i = 0; i < grid[0].length; i++) {
        let arr = [];
        for (let j = 0; j < grid.length; j++) {
            arr.push(grid[j][i]);
        }
        columns.push(arr);
    }
    const result = columns.every(e => e.join("") === sorting(e));
    console.log(result);
    return result ? "YES" : "NO";
}

const grid = ['bac', 'ade', 'efg'];
const grid1 = ["mpxz", "abcd", "wlmf"];
gridChallenge(grid1);

var majorityElement = function(nums) {
    let obj = {}, arr=[];
    for (let num of nums) {
        if (Object.keys(obj).includes(String(num))) {
            obj[num]++;
        } else {
            obj[num] = 1;
        }
    }
    for (let [key, value] of Object.entries(obj)) {
        arr.push([key, value]);
    }
    const sorted = arr.sort((a, b) => b[1] - a[1]);
    console.log(sorted);
    return Number(sorted[0][0]);
};


const nums = [3, 3, 4];
majorityElement(nums);


var titleToNumber = function(columnTitle) {
    const alphabet = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = 0;
    let index;
    let len = columnTitle.length - 1;
    for (let i = 0; i < columnTitle.length; i++) {
        index = alphabet.indexOf(columnTitle[i]);
        if (len > 0) {
            result += Math.pow(26, len) * index;
        } else {
            result += index;
        }
        len--
    }
    console.log(result);
};

titleToNumber("FXSHRXW");

function factorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

const result = factorial(5);
console.log(result);

class Stack {
    constructor() {
        this.stack = [];
    }

    isEmpty() {
        return this.stack.length === 0;
    }
    pushing(data) {
        return this.stack.push(data);
    }
    popping() {
        if (this.stack.length===0) {
            return "Stack is empty.";
        } else {
            return this.stack.pop();
        }
    }
    peek() {
        if (this.stack.length===0) {
            return "Stack is empty";
        } else {
            return this.stack[this.stack.length - 1];
        }
    }
}

let stack = new Stack();

stack.pushing(5);
stack.pushing(6);
stack.pushing(7);
console.log(stack);

String.prototype.toAlternatingCase = function() {
    // Define your method here :)
    return this.split("")
        .map(char => {
            return char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase();
        })
        .join("");
}

let str = "HeLLo WoRLD";
str.toAlternatingCase();

function maskify(cc) {
    return cc.split("")
        .map((letter, index) => index <= cc.length - 5 ? "#" : letter)
        .join("");
}

console.log(maskify("ppy"));

function validate(n) {
    if (n < 10) return false;
    let arr = String(n).split("");
    let sum = 0;
    const divide = arr.length % 2 === 0 ? 0 : 1;
    arr.forEach((e, idx) => {
        if (idx % 2 === divide) {
            sum += Number(e) * 2;
            if (Number(e) > 4) {
                sum -= 9;
            }
        } else {
            sum += Number(e);
        }
    })
    return sum % 10 === 0;
}

validate(1714);

function points(games) {
    let result = 0;
    let score = [];
    games.forEach(game => {
        score = game.match(/\d/g).map(Number);
        if (score[0] > score[1]) {
            result += 3
        } else if (score[0] === score[1]) {
            result++;
        } else {
            result--;
        }
    })
    console.log(result);
}

const games = ["3:1", "2:2", "0:1"];
points(games);

function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + 1 !== arr[i + 1]) {
            return arr[i + 1];
        }
    }
    return null;
}
const arr = [1, 2, 3, 4,5, 6, 7, 8];
console.log(firstNonConsecutive(arr));


function solve(s) {
    const regex = /[bcdfghjklmnpqrstvwxyz]+/g;
    let result = s.match(regex);
    let sum = 0;
    result = result.map(e => {
        sum = 0;
        for (let letter of e) {
            sum += letter.charCodeAt(0) - 96;
        }
        return sum;
    })
    return result.sort((a, b) => b - a)[0];
};

console.log(solve("zodiacs"));

function arrayDiff(a, b) {
    if (a.length === 0) {
        console.log(1);
        return [];
    } else if (b.length === 0) {
        console.log(2);
        return a;
    } else {
        console.log(3);
        b.forEach(e => {
            a = a.filter(num => num !== e);
        });
        return a;
    }
}

console.log(arrayDiff([3, 4], [3]));

var romanToInt = function(s) {
    const romans = { "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000 };
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        if (romans[s[i]] >= romans[s[i + 1]]) {
            sum += romans[s[i]];
        } else if (i + 1 === s.length) {
            sum += romans[s[i]];
        } else {
            sum += romans[s[i + 1]] - romans[s[i]];
            i++
        }
    }
    return sum;
};

romanToInt("IX");

var generate = function(numRows) {
    let result = [
        [1],
        [1, 1]
    ];
    let arr;
    if (numRows === 1) {
        return [result[0]];
    } else if (numRows === 2) {
        return result;
    } else {
        for (let i = 1; i < numRows - 1; i++) {
            arr = [1];
            for (let j = 0; j < i; j++) {
                arr.push(result[i][j] + result[i][j + 1]);
            }
            arr.push(1);
            result.push(arr);
        }
    }
    return result;
};

console.log(generate(1));


var getRow = function(rowIndex) {
    let result = [
        [1],
        [1, 1]
    ];
    if (rowIndex<2) {
        return result[rowIndex];
    } else {
        let row;
        for (let i = 1; i < rowIndex; i++) {
            row = [1];
            for (let j = 0; j < i; j++) {
                row.push(result[i][j] + result[i][j + 1]);
            }
            row.push(1);
            result.push(row);
        }
    }
    return result[rowIndex];
};

console.log(getRow(2));


function sumSquareDifference(n) {
    let squareSum = 0;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
        squareSum += i * i;
    }
    console.log(sum * sum - squareSum);
    return sum * sum - squareSum;
}

sumSquareDifference(10);

function spinWords(string) {
    const result = string.split(" ").map(word => {
        return word.length < 5 ? word : word.split("").reverse().join("");
    })
    console.log(result.join(" "));
    return result.join(" ");
}

spinWords("This is a test");
spinWords("Hey fellow warriors")

function checkExam(array1, array2) {
    let result = 0;
    array2.forEach((element, index) => {
        if (element === array1[index]) {
            result += 4;
        } else if (element !== "") {
            result -= 1;
        }
    })
    return result < 0 ? 0 : result;

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]);
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]);

var twoSum = function(numbers, target) {
    let result;
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                result = [i + 1, j + 1];
                break;
            }
        }
    }
    console.log(result);
    return result;
};

twoSum([-1, 0], -1);

var findRestaurant = function(list1, list2) {
    let result = [];
    let min = Infinity;
    let sum = 0;
    list1.forEach((e, index) => {
        if (list2.includes(e)) {
            sum = index + list2.findIndex(element => element === e);
            if (min > sum) {
                min = sum;
                result = [];
                result.push(e);
            } else if (min === sum) {
                result.push(e);
            }
        }
    })
    console.log(result);
    return result;
};
const list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"];
const list2 = ["KFC", "Shogun", "Burger King"];
const list3 = ["Shogun","Tapioca Express","Burger King","KFC"]; 
const list4 = ["KFC","Burger King","Tapioca Express","Shogun"];
findRestaurant(list1, list2);
findRestaurant(list3, list4);

var isHappy = function(n) {
    function squareSum(num) {
        if (num === 0) {
            return 0;
        } else {
            return ((num % 10) ** 2) + squareSum(Math.floor(num / 10));
        }
    }
    while (true) {
        if (n === 1) {
            return true;
        } else if (n === 4) {
            return false;
        } else {
            n = squareSum(n);
        }
    }
}

console.log(isHappy(19999));

var containsNearbyDuplicate = function(nums, k) {
    let bool = false;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j] && Math.abs(i - j) <= k) {
                console.log(nums[i]);
                bool = true;
                break;
            }
        }
    }
    console.log(bool);
    return bool;
};
const nums = [1, 2, 3, 1, 2, 3];
const k = 2;
containsNearbyDuplicate(nums, k);


var isUgly = function(n) {
    while (n % 2 === 0) {
        n = n / 2;
    }
    while (n % 3 === 0) {
        n = n / 3;
    }
    while (n % 5 === 0) {
        n = n / 5;
    }
    return n === 1;
};

isUgly(1);


var addDigits = function(num) {
    function sumDigits(num) {
        if (num < 10) {
            return num;
        } else {
            return num % 10 + sumDigits(Math.floor(num / 10));
        }
    }
    if (num < 10) {
        return num;
    } else {
        num = sumDigits(num);
        return addDigits(num);
    }
};

console.log(addDigits(38));

var getLucky = function(s, k) {
    let str = "";
    let result = 0;
    for (let letter of s) {
        str += letter.charCodeAt(0) - 96;
    }

    function sum(str) {
        return str.split("").reduce((a, b) => Number(a) + Number(b));
    }
    for (let i = 0; i < k; i++) {
        result = str.split("").reduce((a, b) => Number(a) + Number(b));
        str = String(result);
    }
    console.log(result);
};

getLucky("dbvmfhnttvr", 5);


var isIsomorphic = function (s, t) {
    let obj = {};
    let bool = true;
    for (let i = 0; i < s.length; i++) {
        if (Object.keys(obj).includes(s[i])) {
            if (obj[s[i]] === t[i]) {
                bool = true;
            } else {
                bool = false;
                break;
            }
        } else {
            obj[s[i]] = t[i];
        }
    }
    let obj1 = {};
    let bool1 = true;
    for (let i = 0; i < t.length; i++) {
        if (Object.keys(obj).includes(t[i])) {
            if (obj1[t[i]] === s[i]) {
                bool1 = true;
            } else {
                bool1 = false;
                break;
            }
        } else {
            obj1[t[i]] = s[i];
        }
    }
    console.log((bool));
    return bool && bool1;
};

isIsomorphic("foo", "bar");

var firstUniqChar = function (s) {
    const letters = s.split("");
    let duplicates = [];
    let arr = letters.reduce((a, b) => {
        a.includes(b) ? duplicates.push(b) : a.push(b);
        return a;
    }, []);
    const unique = arr.filter(e => !duplicates.includes(e));
    if (unique.length === 0) {
        return -1;
    } else {
        return s.indexOf(unique[0]);
    }
};

console.log(firstUniqChar("lhheetctcdodlo"));


function rowWeights(array) {
    let res1 = 0, res2 = 0;
    array.forEach((e, i) => {
        i % 2 === 0 ? res1 += e : res2 += e;
    })
    console.log(res1, res2);
    return [res1, res2];
}

rowWeights([50, 60, 70, 80]);


function isNice(arr) {
    if (arr.length === 0) return false;
    let nice = true;
    for (let e of arr) {
        if (arr.includes(e + 1) || arr.includes(e - 1)) {
            nice = true;
        } else {
            nice = false;
        }
    }
    return bool;
}

console.log(isNice([3, 4, 5, 7]));


var flipAndInvertImage = function(image) {
    image = image.map(arr => arr.reverse());
    image = image.map(arr => arr.map(e => e === 0 ? 1 : 0));
    console.log(image);
    return image;
};

const image = [
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0]
];
flipAndInvertImage(image);
const image1 = [
    [1, 1, 0, 0],
    [1, 0, 0, 1],
    [0, 1, 1, 1],
    [1, 0, 1, 0]
];
flipAndInvertImage(image1);

var uncommonFromSentences = function(s1, s2) {
    const str = s1 + " " + s2;
    const arry = str.split(" ");
    const toFindDuplicates = arry => arry.filter((item, index) => arry.indexOf(item) !== index);
    const duplicates = toFindDuplicates(arry);
    const uniqueElements = [...new Set(arry)];
    const unique = uniqueElements.filter(e => !duplicates.includes(e));
    console.log(unique);
    return unique;
};
const s1 = "apple apple";
const s2 = "banana";
uncommonFromSentences(s1, s2);

const arry = [1, 2, 1, 3, 4, 3, 5];


var isToeplitzMatrix = function(matrix) {
    let isToeplitz = true;
    for (let i = 0; i < matrix.length - 1; i++) {
        for (let j = 0; j < matrix[0].length - 1; j++) {
            if (matrix[i][j] === matrix[i + 1][j + 1]) {
                isToeplitz = true;
            } else {
                isToeplitz = false;
                j = matrix[0].length;
                i = matrix.length;
            }
        }
    }
    console.log(isToeplitz);
    return isToeplitz;
};

const matrix = [
    [1, 2, 3, 4],
    [5, 1, 2, 3],
    [9, 5, 1, 2]
];

const matrix1 = [
    [1, 2],
    [2, 2]
];

const matrix2 = [
    [0, 19, 54, 9],
    [47, 9, 19, 54],
    [11, 47, 9, 19]
];
isToeplitzMatrix(matrix);
isToeplitzMatrix(matrix1);
isToeplitzMatrix(matrix2);


var toGoatLatin = function(sentence) {
    let arr = sentence.split(" ");
    let a = "a";
    arr = arr.map(e => {
        if (/[aeiou]/i.test(e[0])) {
            e += "ma";
        } else if (/[^aeiou]/i.test(e[0])) {
            e = e.slice(1) + e.slice(0, 1) + "ma";
        }
        e += a;
        a += "a";
        return e;
    })
    console.log(arr.join(" "));
    return arr.join(" ");
};

const sentence = "I speak Goat Latin";
toGoatLatin(sentence);


var dominantIndex = function(nums) {
    let max = 0,
        index = 0,
        isLarge = false;
    nums.forEach((e, i) => {
        if (e > max) {
            max = e;
            index = i;
        }
    })
    for (let i = 0; i < nums.length; i++) {
        if (i !== index && nums[i] * 2 <= max) {
            isLarge = true;
        } else if (i === index) {
            continue;
        } else {
            isLarge = false;
            break;
        }
    }
    console.log(isLarge ? index : -1);
    return isLarge ? index : -1;
};

const nums = [3, 6, 1, 0];
dominantIndex(nums);


function countdown(n) {
    if (n === 1) {
        console.log(n);
    } else {
        console.log(n);
        countdown(n - 1);
    }
}
countdown(10);

function factorial(n) {
    if (n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));


function ekub() {
    if (a === b) {
        return a;
    } else if (a > b) {
        a = a - b;
        result.push([b, b]);
        return ekub(a, b);
    } else {
        b = b - a;
        result.push([a, a]);
        return ekub(a, b);
    }
}
let a = 96;
let b = 12;
let result = [];
console.log(ekub(a, b));
console.log(result);

function sum(arr) {
    if (arr.length === 1) {
        return arr[0];
    } else {
        return arr.shift() + sum(arr);
    }
}

let arr = [5, 8, 12, 22];
console.log(sum(arr));


function giveChange(n, m) {
    if (n <= m) {
        return 0;
    } else {
        const banknotes = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100, 50, 10, 5, 2, 1];
        let change = n - m;
        let minBanknotes = 0;
        let indexOfBanknote = 0;
        while (change > 0) {
            if (change >= banknotes[indexOfBanknote]) {
                change -= banknotes[indexOfBanknote];
                minBanknotes++;
            } else {
                indexOfBanknote++;
            }
        }
        return minBanknotes;
    }
}

let n = 20000;
const m = 15000;
console.log(giveChange(89493, 430));


function whoWins(res1, res2) {
    let barca = 4;
    let roma = 1.5;
    barca += res2 * 1.5;
    roma += res1;
    if (barca > roma) {
        return "lost";
    } else {
        return "win";
    }
}

console.log(whoWins(3, 0));
console.log(whoWins(3, 1));
const [a, b] = readline().split(' ').map(n => parseInt(n, 10));
print((a + b).toString());

function numberOfProgression(n){
    let result = 0;
    let arr = [];
    for(let i = 1; i<=n; i++){
        arr.push(i);
    }
    console.log(arr);

}

numberOfProgression(6);

function replacing(str) {
    const regex = /#/g;
    let i = 0;
    str = str.replaceAll(regex, letter => {
        if (i % 2 === 0) {
            i++;
            return "(";
        } else {
            i++;
            return ")";
        }
    });
    return str;
}

replacing("hello#world#");


function progression(n) {
    let result = 0;
    for (let i = 1; i <= n - 2; i++) {
        for (let j = i + 1; j <= n - 1; j++) {
            for (let k = j + 1; k <= n; k++) {
                if (j - i === k - j) {
                    result++;
                }
            }
        }
    }
    console.log(result);
}
progression(5);


var numSquares = function(n) {
    let result = 0;
    let f = Math.sqrt(n);
    console.log(Math.floor(f));
};

numSquares(12);

function strong(n) {
    function factorial(n) {
        return n === 1 || n === 0 ? 1 : n * factorial(n - 1);
    }
    const factorialSum = String(n).split("").map(Number).reduce((sum, num) => sum + num, 0);
    return factorialSum === n ? "STRONG!!!!" : "Not Strong !!";
}

console.log(strong(304));



var uniqueOccurrences = function(arr) {
    let obj = {};
    arr.forEach(e => {
        if (Object.keys(obj).includes(String(e))) {
            obj[e]++;
        } else {
            obj[e] = 1;
        }
    })
    const values = Object.values(obj);
    return values.length === [...new Set(values)].length;
};

const arr = [1, 2, 2, 1, 1, 3];
console.log(uniqueOccurrences(arr));
console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]));



var duplicateZeros = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 0, 0);
            arr.pop();
            i++;
        }
    }
    return arr;
};

console.log(duplicateZeros([0,4,1,0,0,8,0,0,3]));


var numSpecial = function(mat) {
    let ones = [];
    let bool;
    let result = 0;
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 1) {
                ones.push([i, j]);
            }
        }
    }
    for (let i of ones) {
        bool = ones.every(e => {
            if (e === i) {
                return true;
            } else {
                return e[0] !== i[0] && e[1] !== i[1];
            }
        });
        bool ? result++ : null;
    }
    console.log(result);
    return result;
};

const mat = [
    [1, 0, 0],
    [0, 0, 1],
    [1, 0, 0]
];

const mat1 = [
    [0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1]
];
numSpecial(mat);
numSpecial(mat1);



function stray(numbers) {
    const sorted = numbers.sort((a, b) => a - b);
    return sorted[0] === sorted[1] ? sorted[sorted.length - 1] : sorted[0];
}

stray([2, 1, 1, 1]);
stray([17, 17, 3, 17, 17, 17, 17]);



function pigIt(str) {
    let arr = str.split(" ");
    arr = arr.map(e => {
        if (e.length > 1) {
            e = e.slice(1) + e.slice(0, 1);
            e += "ay";
        }
        return e;
    })
    console.log(arr.join(" "));
    return arr.join(" ");
}

pigIt("Pig latin is cool");
pigIt("hello world !");

function mygcd(x, y) {
    while (x !== y) {
        x > y ? x -= y : y -= x;
    }
    return x;
}

console.log(mygcd(1590771464, 1590771620));



var isSquare = function(arr) {
    if (arr.length === 0) return undefined;
    for (let e of arr) {
        if (Math.sqrt(e) !== Math.floor(Math.sqrt(e))) {
            return false;
        }
    }
    return true;
}

console.log(isSquare([1, 5, 9, 16, 25, 36]));

function findOdd(A) {
    const sorted = A.sort((a, b) => a - b);
    for (let i = 0; i < sorted.length; i += 2) {
        if (sorted[i] !== sorted[i + 1]) {
            return sorted[i];
        }
    }
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));


function nthChar(words) {
    return words.map((e, i) => e[i]).join("");
    // return words.reduce((a, b, index) => a + b[index], "");
}

nthChar(['yoda', 'best', 'has']);


function freqSeq(str, sep) {
    let obj = {};
    let arr = str.split("");
    arr.forEach(e => {
        Object.keys(obj).includes(e) ? obj[e]++ : obj[e] = 1;
    })
    arr = arr.map(e => obj[e]);
    return arr.join(sep);
}

console.log(freqSeq('hello world', '-'));


function disariumNumber(n) {
    let arr = String(n).split("");
    let sum = 0;
    arr.forEach((e, i) => { 
        sum += e ** (i + 1);
    });
    console.log(sum);
}

disariumNumber(135);

function positiveSum(arr) {
  return arr.reduce((sum, num) => {
    sum += num > 0; num : 0;
    return sum;
  }, 0)
}

function fib(n) {
    if (n === 1 || n === 2) {
        return 1;
    } else {
        return fib(n - 2) + fib(n - 1);
    }
}

console.log(fib(5));
let i = 1;
function fib(n, memo) {
    console.log(i++);
    if (n === memo.length) {
        return memo[n - 1];
    } else {
        memo[memo.length] = memo[memo.length - 2] + memo[memo.length - 1];
        return fib(n, memo);
    }
}

console.log(fib(5, [1, 1]));



dynamic programming

recursion
let result;
let i = 1;
function fib(n) {
    console.log(i++);
    if (n === 1 || n === 2) {
        result = 1;
    } else {
        result = fib(n - 2) + fib(n - 1);
    }
    return result;
}
console.log(fib(10));


memoization
let i = 1;
function fib(n, memo) {
    console.log(i++);
    if (n === memo.length) {
        return memo[n - 1];
    } else {
        memo[memo.length] = memo[memo.length - 2] + memo[memo.length - 1];
        return fib(n, memo);
    }
}

console.log(fib(100, [1, 1]));

bottom-up
function fib_bottom_up(n) {
    if (n === 1 || n === 2) {
        return 1;
    }
    let bottomUp = new Array(n);
    bottomUp[0] = 1;
    bottomUp[1] = 1;
    for (let i = 2; i < n; i++) {
        bottomUp[i] = bottomUp[i - 2] + bottomUp[i - 1];
    }
    return bottomUp[n - 1];
}

console.log(fib_bottom_up(100));


memoization 
const fib = (n, memo) => {
    if (memo[n] !== undefined) {
        return memo[n];
    } else {
        memo[memo.length] = memo[memo.length - 1] + memo[memo.length - 2];
        return fib(n, memo);
    }
}
console.log(fib(50, [null, 1, 1]));


var getMinDistance = function(nums, target, start) {
    let indexes = [];
    nums.forEach((e, i) => {
        e === target ? indexes.push(i) : null;
    })
    let min = Infinity;
    indexes.forEach(index => {
        min = min > Math.abs(index - start) ? Math.abs(index - start) : min;
    })
    return min;
};

const nums = [5, 2, 3, 5, 5];
const target = 5;
const start = 2;
getMinDistance(nums, target, start);

var reverseWords = function(s) {
    return s.match(/[^\s]+/gi).reverse().join(" ");
};

const s = "a good   example";
console.log(reverseWords(s));


var replaceDigits = function(s) {
    let str = '';
    for (let i = 0; i < s.length; i += 2) {
        str += s[i];
        if (s[i + 1]) {
            str += String.fromCharCode(s[i].charCodeAt(0) + Number(s[i + 1]));
        }
    }
    console.log(str);
    return str;
};
const s = "a1b2c3d4e";
replaceDigits(s);


var frequencySort = function(nums) {
    let obj = {};
    let sortable = [];
    let result = [];
    nums.forEach(num => {
        (num in obj) ? obj[num]++: obj[num] = 1;
    })
    for (let [key, value] of Object.entries(obj)) {
        sortable.push([key, value]);
    }
    sortable.sort((a, b) => a[1] === b[1] ? b[0] - a[0] : a[1] - b[1]);
    sortable.forEach(e => {
        for (let i = 0; i < e[1]; i++) {
            result.push(e[0]);
        }
    })
    return result.map(Number);
};

const nums = [2, 3, 1, 3, 2];
console.log(frequencySort(nums));


var decrypt = function(code, k) {
    let result;
    if (k === 0) {
        result = code.map(e => 0);
    } else if (k > 0) {
        let sum;
        result = code.map((element, index) => {
            sum = 0;
            for (let i = index + 1; i <= k + index; i++) {
                sum += code[i >= code.length ? i - code.length : i];
            }
            return sum;
        })
    } else if (k < 0) {
        let sum;
        result = code.map((element, index) => {
            sum = 0;
            for (let i = k + index; i <= index - 1; i++) {
                sum += code[i < 0 ? i + code.length : i];
            }
            return sum;
        })
    }
    console.log(result);
    return result;
};


