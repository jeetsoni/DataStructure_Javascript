// Problem statement: Implement a function removeEven(arr), which takes an array arr in its input and removes all the even elements from a given array.





//First Approach
function removeEven_app1(arr) {
    var odds = []
    for (let number of arr) {
        if (number % 2 != 0)
            odds.push(number)
    }
    return odds
}

console.log(removeEven_app1([3, 2, 41, 3, 34]))

//Second Approach

function removeEven(arr) {
    return arr.filter((v => (v % 2) != 0))
}

console.log(removeEven([3, 2, 41, 3, 34]))
