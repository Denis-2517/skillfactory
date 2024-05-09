const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let a = 0, b = 0, c = 0; d = 0;

for (i = 0; i<arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i] !== 0) {
        a++;
    } else if (arr[i] % 2 >= 1 && arr[i] !== 0) {
        b++;
    } else if (arr[i] === null) {
        d++;
    }
      else {
        c++;
    }
}

console.log("Количество четных чисел", a); 
console.log("Количество нечетных чисел", b); 
console.log("Количество нулей", c);
console.log("Количество null", d);