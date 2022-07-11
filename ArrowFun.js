// a. Print odd numbers in an array

let arr = [1,2,3,4,5,6,7,8,9,10,11,12];
let oddNumber = arr.filter (ele => ele %2 !==0);
console.log(oddNumber);


// b. Convert all the strings to title caps in a string array

titleCap = (str) => {
  return str.toLowerCase().split(' ').map(function (word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}
console.log(titleCap("im learning full stock development course in guvi"));


// c. Sum of all numbers in an array

const add = ((num)=>{
  let sum=0;
  for(let add of num){
  sum=sum+add;
  }
  return sum
});
console.log(add([1,2,3,4,5]));


// d. Return all the prime numbers in an array

primeNum = (number) => {
  var arr=[];
  for(let i of number) {
    if (i % 2 !== 0) {
      arr.push(i)
    }     
  }  
    console.log(arr);
   
};
primeNum ([2,3,4,5,6,7,10,11,13,14,15,24,87,44]);


// e. Palindrome

const palindrome = ((text)=>{
arr=[];
for(let str of text){
  let output=str.split('').reverse().join('')
  if(output===str)
  {
  arr.push(output);
  }
}
console.log(arr);
});
palindrome(['mom','11131','madam','4554','123','malayalam','hello','wow'])

