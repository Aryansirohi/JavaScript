let nums = [1,2,3,4,5];

let calcSquare = (nums) =>{
    console.log(nums*nums)
}

nums.forEach(calcSquare);


// ***************************  FILTER***************************

// Create a new array of elements that give true for condition filter..


let arr = [1,2,3,5,6,7,8,9,];

let evenArr = arr.filter((val) => {
    return val % 2 === 0;
})
console.log(evenArr);

// ******************************** REDUCE *****************************

// Perform some opertaion & raduce the array to single value . It return that singlr value  

const array1 = [1, 2, 3, 4];

const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10