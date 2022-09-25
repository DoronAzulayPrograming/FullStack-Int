// let number = Math.round(Math.random() * 100) + 10
// console.log(number) 

//--------------1-----------------

// let size = 10 , odd = 0, even = 0

// let str = ""
// let random = 0
// for(let i = 0; i < size; i++){
//     random = Math.round(Math.random() * 9) + 1
//     str += random + ","
//     if(random % 2 == 0)
//         even++
//     else odd++
// }

// console.log("odd: " + odd)
// console.log("even: " + even)
// console.log(str)


//--------------2-----------------

// let size = 10, max = 9, min = 0

// let str = ""
// for(let i = 0; i < size; i++){
//     min = Math.round(Math.random() * 40) + 10
//     str += min + ","
//     if(min > max){
//         max = min
//     }
// }

// console.log("max is: " + max)
// console.log(str)


//--------------3-----------------

// let size = 10
// let arr = [0]

// for(let i = 0; i < size; i++){
//     arr[i] = Math.round(Math.random() * 49) + 1
// }

// console.log(arr)

// let temp = 0
// for(let i = 0; i < arr.length - 1; i++){
//     if(arr[i] > arr[i + 1]){
//         temp = arr[i]
//         arr[i] = arr[i + 1]
//         arr[i + 1] = temp

//         i = -1
//     }
// }
// console.log(arr)

// let person = {
//     age:0,
//     name1:"asd"
// }

// person.age += 10
// person.name1 = "doron"

// console.log(person)
// console.log(person.age + 1)
// console.log(person.name1)

//--------------1----------------

let size = 10
let arr = [{age:0,height:0}]

let avg = 0
let sum = 0

for(let i = 0; i < size; i++){
    arr[i] = {
        age:Math.round(Math.random() * (45 - 18)) + 18,
        height:parseFloat((Math.random() * 1 + 1).toFixed(1))
    }

    sum += arr[i].age
}

avg = sum / arr.length

let max = {age:0,height:0}
for(let i = 0; i < arr.length; i++){
    if(arr[i].height > max.height && arr[i].age >= avg){
        max = arr[i]
    }
}

console.log(arr)
console.log(max)


