//------------1-------------- 

// let size = 12

// let str = "" 
// for(let i = 0; i < size; i++){
//     for(let j = 0; j < size; j++){
//         if(i == 0 || i == size -1 || j == 0 || j == size -1)
//         {
//             str += "#"
//         }
//         else{
//             str += "*"
//         }
//     }
//     str += "\n"
// }

// console.log(str)


//------------2-------------- 

// let size = 4

// let str = ""

// for(let i = 0; i < size; i++){
//     for(let j = 0; j < size - i - 1; j++){
//         str += " "    
//     }
//     for(let j = 0; j <= i; j++){
//         str += "*"    
//     }
//     str += "\n"
// }
// console.log(str)


//------------3-------------- 

// let str1 = "hello world", str2 = "world"
// let index = -1
// let found = false

// for(let i = 0; i < str1.length; i++){
//     if(str1[i] == str2[0]){
//         found = true
//         for(let j = 0; j < str2.length; j++){
//             if(str1[i + j] != str2[j]){
//                 found = false
//                 break
//             }
//         }

//         if(found){
//             index = i
//             break
//         }
//     }
// }
// console.log(index)