// for(let i = 1; i < 10; i++){
//     console.log(i)
// }

// function print(i){
//     if(i == 0)
//         return

//     console.log(i)
//     print(i-1)
// }

// print(3)

// function printHello(index){
//     if(index == 10)
//         return

//     printHello(index + 1)
//     console.log("hello")
// }

// printHello(1)

//----------1-------------

// let arr = [1,2,1,1]

// function sumArr(arr:number[], i:number){
//     if(i == 0)
//         return arr[i]
    
//         let prev = sumArr(arr, i - 1)
//         let current = arr[i]

//     return prev + current
// }

// let res = sumArr(arr, arr.length - 1)
// console.log(res)

//----------2-------------
// let arr = [1,1,1,1]

// function addArrys(arr1, arr2, i){
//     if(i == 0){
//         arr1[i] += arr2[i]
//         return arr1
//     }

//     arr1[i] += arr2[i]
//     return addArrys(arr1,arr2, i -1)
// }

// let res = addArrys(arr,arr,arr.length - 1)
// console.log(res)

//----------3-------------  4*2 = 4+4 = 8
// function kefel(a,b){
//     if(b == 1)
//         return a
    
//     return kefel(a,b-1) + a
// }

// console.log(kefel(4,2))

//----------4-------------
// function hezka(a,b){
//     if(b == 1)
//         return a
    
//     return hezka(a,b-1) * a
// }

// console.log(hezka(5,3))