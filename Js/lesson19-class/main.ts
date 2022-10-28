//-------------1----------------
// let size = 15
// let arr = [ { age:0, height:0,salary:0 } ]


// function addToArr(arr,size){
//     for(let i = 0; i < size; i++){
//         let rAge = Math.round(Math.random() * (45 - 18)) + 18
//         let rHeight = parseFloat((Math.random() * 1 + 1).toFixed(1))
//         let rSalary = Math.round(Math.random() * 6000) + 2000

//         let temp = { age:rAge, height:rHeight,salary:rSalary }
//         arr[i] = temp
//     }

//     return arr
// }

// function sortArry(arr:{ age:number, height:number,salary:number }[]){
//     for(let i = 0; i < arr.length - 1; i++){
//         if(arr[i].age > arr[i+1].age){

//             let temp = arr[i]
//             arr[i] = arr[i+1]
//             arr[i+1] = temp

//             i = -1
//         }
//     }

//     return arr
// }

// function getLowAndHeighPerson(arr:{ age:number, height:number,salary:number }[], avg:number){

//     let maxPerson = { age:0, height:0,salary:0 }
//     let minPerson = { age:0, height:3,salary:0 }

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i].height > maxPerson.height && arr[i].age >= avg && arr[i].age >= maxPerson.age)
//             maxPerson = arr[i]

//         if(arr[i].height < minPerson.height && arr[i].age <= avg)
//             minPerson = arr[i]
//     }

//     return {max:maxPerson,min:minPerson}
// }

// function getAvgAge(arr:{ age:number, height:number,salary:number }[]){
//     let sum = 0
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i].age
//     }

//     let res = sum / arr.length

//     return res
// }


// arr = addToArr(arr,size)
// console.log(arr)

// arr = sortArry(arr)
// console.log(arr)

// let avg = getAvgAge(arr)
// let obj = getLowAndHeighPerson(arr,avg)

// console.log(avg)
// console.log(obj.max)
// console.log(obj.min)

// function printFromZeroTo(value:number){
//     if(value == -1)
//         return

//     console.log(value)
//     printFromZeroTo(value-1)
// }

// printFromZeroTo(10)


// function printFromNumberTo(start, end){
//     if(start == end + 1)
//         return

//     console.log(start)
//     printFromNumberTo(start + 1,end)
// }

// printFromNumberTo(1,10)

// function printCharNtimes(char,times){
//     if(times == 0)
//         return

//     printCharNtimes(char, times-1)
//     console.log(char)
// }

// printCharNtimes("@",5)

import { Dog } from "./Dog"

let dog = new Dog("milki",3)
let dog1 = new Dog("laydi",31)

let arr:Dog[] = []

dog.bark()
dog1.greet()




















