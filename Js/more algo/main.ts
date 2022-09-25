
// let shape = ""
// for(let i = 0; i < 4; i++){
//     for(let j = 0; j < 4; j++){
//         shape += "*"
//     }
//     shape += "\n"
// }

// console.log(shape)

// let arr = [7,2,6,1,4,3,5]

// for(let i = 0; i < arr.length - 1; i++){
//     for(let j = 0; j < arr.length; j++){
//         if(arr[j] > arr[j + 1]){
//             let temp = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1] = temp
//         }
//     }
// }

// console.log(arr)

// [7,2,6,1,4,3,5]

// [2,7,6,1,4,3,5]
// [2,6,7,1,4,3,5]
// [2,6,1,7,4,3,5]
// [2,6,1,4,7,3,5]
// [2,6,1,4,3,7,5]
// [2,6,1,4,3,5,7]


// 28 - 20 = 8 + 40 = 48
// ----------------1---------------
// let str = "abc"

// let big = str.charCodeAt(2) - "a".charCodeAt(0) + "A".charCodeAt(0)

// console.log(String.fromCharCode(big))

// ----------------1.5---------------

// let a = "a".charCodeAt(0)
// let aBig = "A".charCodeAt(0)

// let str = "welcome"
// let newStr = ""

// for(let i = 0; i < str.length; i++){
//     let c = str.charCodeAt(i)
//     let big = c -  a + aBig
//     newStr += String.fromCharCode(big)
// }

// console.log(newStr)

// --------------2--------------
// let word = "he@@o"
// let charToFind = "@"
// let replaceChar = "l"

// let newStr = ""
// for(let i = 0; i < word.length; i++){
//     if(word[i] == charToFind){
//         newStr += replaceChar
//     }else{
//         newStr += word[i]
//     }
// }

// console.log(newStr)

// let str = ""
// let size = 5
// for(let i = 0; i < size; i++){
//     for(let j = 0; j <= i; j++ ){
//         str += "*"
//     }
//     str += "\n"
// }

// console.log(str)