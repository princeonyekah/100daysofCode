// var expect = function(val) {
//     return {
//         toBe: function(expectedVal){
//             if(val === expectedVal){
//                 return {value: true}
//             }
//             else{
//                 throw new Error("Not Equal")
//             }
//         }
//     }


//     };

// console.log(expect(5).toBe(5)); // true

var createCounter = function(init) {

    let initialValue = init
    return {
        increment: function(){
           ++init
           return init
        },
        decrement: function(){
            init--
            return init

        },
        reset: function(){
            return init = initialValue
        }
    }
};
 const counter = createCounter(5)

console.log(counter.increment()); // 6
console.log( counter.reset()); // 5
console.log(counter.decrement()); // 4


var map = function(arr, fn) {
    const returnedArray = []; // Create an empty array to hold the results

    // Iterate through each element in the input array
    for (let i = 0; i < arr.length; i++) {
        // Apply the mapping function and store the result in the new array
        returnedArray[i] = fn(arr[i], i);
    }

    return returnedArray; // Return the new array with transformed values
};
