///2.d. Write a function which check if items of an array are unique?

function checkUniqueness(arr)
{
    
    let s = new Set();
    for (let i = 0; i < arr.length; i++) {
        s.add(arr[i]);
    }
 
    
    return (s.size == arr.length);
    
}
const arrOne = [1, 4, 6, 2, 1];
console.log(checkUniqueness(arrOne));

const arrTwo = [1, 4, 6, 2, 3]
console.log(checkUniqueness(arrTwo));