
console.log(123);

// 1. 


function numbers(a, b) {
    if (a > b) {
        return a;
    } if (a < b) {
        return b;
    }
    if (a === b) {
        return 'lygūs'
    }
}

console.log(numbers(5, 8));

// 2.

const a = 1;
const b = 10;

for (let i = a; i <= b; i = i + 1) {
    console.log(i);
}


// 3.



for (let i = 0; i <= 10; i = i + 2) {
    console.log(i);
}

// 4.
let number = [];
for (let i = 0; i < 5; i++) {
    let num = Math.floor(Math.random() * (10 - 1)) + 1;
    number.push(num);
}
console.log(number);

// 5.
console.log('....................5...............')

while (true) {
    x = Math.floor(Math.random() * (10 - 1)) + 1;
    console.log(x);
    if (x === 5) {
        break;
    }
}
// 6.

let masyvas1 = [];
const row = Math.floor(Math.random() * (30 - 10) + 10);
for (let i = 0; i < row; i++) {
    masyvas1.push(Math.floor(Math.random() * (30 - 10 + 1) + 10));
}

console.log(masyvas1);

let max = 0;
for (let numb of masyvas1) {
    if (numb > max) {
        max = numb;
    }
}
console.log('max', max);

// 7.

let raides = [];
const lettera = 'A';
const letterb = 'B';
const letterc = 'C';
const letterd = 'D';

for (let i = 0; i < 100; ++i) {
    raides.push(Math.floor(Math.random() * 4));

    if (raides[i] == 0) {
        raides[i] = lettera;
    }
    if (raides[i] == 1) {
        raides[i] = letterb;
    }
    if (raides[i] == 2) {
        raides[i] = letterc;
    }
    if (raides[i] == 3) {
        raides[i] = letterd;
    }

}

console.log(raides);

// 8.

function sumEven(n, a) {
    if ((typeof n === 'number' && typeof a === "number") && ((n + a) % 2 === 0))
        return n + a; {
    } if (Array.isArray(n) === true && Array.isArray(a) === true && ((n.length + a.length) % 2 === 0)) {
        return (n.length + a.length)
    } else {
        return 'suma nelyginė';
    }
}

console.log(sumEven(6, 8));
console.log(sumEven([3, 6, 5], [4, 8, 4]));

9.
function integer(num) {

    if (typeof num === 'number') {

        for (let i = 0; i < num; ++i) {
            if (num % 2 === 0) {
                return 'false';
            } else {
                return 'true'
            }
        }
    }
    else {
        return 'įveskite skaičių';
    }

}

console.log(integer(4));

// 10.
let arr = [];
for (let i = 0; i < 10; ++i) {
    arr.push(Math.floor(Math.random() * (10 - 1)) + 1)
}
function telNumber() {
    return `(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]}`;

}

console.log(telNumber(arr));