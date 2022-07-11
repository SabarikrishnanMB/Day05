// a. Print odd numbers in an array

function oddNumber (arr) {
    let resultArray = []
    for (let ele of arr) {
        if (ele % 2 !== 0) {
            resultArray.push(ele)
        }
    }
    return resultArray;
}
console.log(oddNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,101,104,105]));

// b. Convert all the strings to title caps in a string array

function toTitleCap(str)  {
    return str.toLowerCap().split(' ').map(function (word) 
    {
    return (word.charAt(0).toUpperCase() + word.slice(1));   
    }).join(' ');
  }
    console.log(toTitleCap("im learning full stock development course in guvi"));


// c. Sum of all numbers in an Array

const add = (function(num){
	  sum=0;
	  for(let arr of num){
	  sum=sum+arr;
	}
	  console.log(sum)
  })
  add([10,20,30,40,50])

// d. Return all the prime numbers in an array

const prime = (function(num){
	let primeNum=[];
	for(let i of num){
		if(i %2 !==0 ){
	}
	primeNum.push(i);
}
return primeNum;

});

console.log(prime([2,3,4,5,6,7,10,11,13,14,15,24,87,44]));

// e. Palindrome

const palindrome = (function(text){
   arr=[];
   for(let key of text){
  output = key.split('').reverse().join('');
    
    if (output==key) {
       arr.push (output);
     }
 }
   console.log(arr);    
});
 palindrome(['mom','11131','madam','4554','123','malayalam','hello','wow']);

 // f. Return median of two sorted arrays of the same size

 let median = (function (array1,array2){
  arr = [...array1,...array2];
  
  for (i=0;i<arr.length;i++) {
    for (j=0;j<arr.length;j++) {
        if(arr[i]<arr[j])
        {
            temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }    
  }
  index=arr.length/2;
  median=(arr[index]+arr[index+1])/2;
  return median;

});
console.log(median([1,2,3,4,5,6],[7,8,9,10]));

// g. Remove duplicates from an Array

function printArr (arr){
  let uniqueArr = [...new Set(arr)];
  console.log(uniqueArr);
}
const array2 = [1,2,3,2,4,5,6,1,4];
printArr(array2);


// h. Rotate an array by k times

function RightRotate(a, n, k){
	k = k % n;

	for (let i = 0; i < n; i++) {
		if (i < k) {
			console.log(a[n + i - k] + " ");
		}
		else {
			console.log((a[i - k]) + " ");
		}
}
}

let array = [1, 2, 3, 4, 5];
let N = array.length;
let K = 2;

RightRotate(array, N, K);





