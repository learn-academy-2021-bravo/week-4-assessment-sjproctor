// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.

describe("shuffler", () => {
  test("should take an array and remove the first item and return the rest of the array shuffled", () => {
    var colors1 = ["purple", "blue", "green", "yellow", "pink"]
    var output1 = ["blue", "green", "yellow", "pink"]

    var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    var output2 = ["indigo", "periwinkle", "ochre", "aquamarine", "saffron"]

    expect(shuffler(colors1).sort()).toEqual(output1.sort())
    expect(shuffler(colors2).sort()).toEqual(output2.sort())
    // expect(shuffler(colors1)).toEqual(typeof ["blue", "green", "yellow", "pink"])
    // expect(shuffler(colors2)).toEqual(typeof ["indigo", "periwinkle", "ochre", "aquamarine", "saffron"])
  })
})

// b) Create the function that makes the test pass.

// create a function called shuffler
// parameter - arrays
// remove the first element - shift
// map over the array
// created a random index
// return the og array and the index
// return typeof the array

// Option 1:
// const shuffler = (array) => {
//   array.shift()
//   let shuffleArray = array.map(string => {
//     let randomIndex = Math.floor(Math.random() * array.length)
//     return array[randomIndex]
//   })
//   return typeof shuffleArray
// }

// Option 2:
// const shuffler = (array) => {
//   array.shift()
//   let temp
//   let last = array.length - 1
//   for(let i=0; i<Math.floor(array.length/2); i++){
//     temp = array[i]
//     array[i] = array[last]
//     array[last] = temp
//   }
//   console.log(array)
//   return array
// }

// Option 3:
// const shuffler = (array) => {
//   array.shift()
//   for(let i=array.length - 1; i>0; i --){
//     let j = Math.floor(Math.random() * (i + 1))
//     let temp = array[i]
//     array[i] = array[j]
//     array[j] = temp
//   }
//   return array
// }

// Option 4:
const shuffler = (array) => {
  return array.slice(1).sort(() => Math.random() - 0.5)
}



// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

describe("miniMaxi", () => {
  test("takes an array of numbers and returns an array of the minimum and maximum numbers in that order", () => {
    var nums1 = [3, 56, 90, -8, 0, 23, 6]
    // Expected output: [-8, 90]
    var nums2 = [109, 5, 9, -59, 8, 24]
    // Expected output: [-59, 109]

    expect(miniMaxi(nums1)).toEqual([-8, 90])
    expect(miniMaxi(nums2)).toEqual([-59, 109])
  })
})

// b) Create the function that makes the test pass.

// Create a function called miniMaxi
// Parameter - array
// Wrap Math.min and Math.max in an array

// const miniMaxi = (array) => {
//   return [Math.min(...array), Math.max(...array)]
// }

const miniMaxi = (array) => {
  array.sort((a, b) => a - b)
  let minMaxArray = []
  minMaxArray.push(array[0])
  minMaxArray.push(array[array.length - 1])
  return minMaxArray
}


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.


describe("noDuplicate", () => {
  test("takes in two arrays as arguments and returns one array with no duplicate values", () => {
    var testArray1 = [3, 7, 10, 5, 4, 3, 3]
    var testArray2 = [7, 8, 2, 3, 1, 5, 4]
    // Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

    expect(noDuplicate(testArray1, testArray2, [5, 6, 7])).toEqual([3, 7, 10, 5, 4, 8, 2, 1, 6])
  })
})

// b) Create the function that makes the test pass.

// create a function called noDuplicate
// paramaters - array1, array2
// create a variable that combines two arrays with concat and spread
// save a variable with new Set to remove duplicates passing into an array with spread
// return variable with new set

// const noDuplicate = (array1, array2) => {
//   let set = new Set([...array1, ...array2])
//   return [...set]
// }

// const noDuplicate = (array1, array2) => {
//   let joinArr = array1.concat(array2)
//   let noRepeats = joinArr.filter((value, index) => {
//     return joinArr.indexOf(value) === index
//   })
//   return noRepeats
// }

const noDuplicate = (...arrays) => {
  let joinArr = [...arrays].flat()
  console.log(joinArr)
  let noRepeats = joinArr.filter((value, index, array) => {
    return array.indexOf(value) === index
  })
  return noRepeats
}
