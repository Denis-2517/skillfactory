const arr = [1, 1, 1, 1];
let chek = true;
for (i=0; i<arr.length; i++) {
  
  if (arr[i] !== arr[0]){
    chek = false;
    break;  
  } 
}
console.log(chek);