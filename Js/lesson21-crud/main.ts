// function substring(str:string, start:number, end:number){
    
//     if(str == null || str == "") throw new Error("string cant be null or empty")
//     else if (start <= -1) throw new Error("start cant be less then zero")
//     else if (end > str.length-1) throw new Error("end cant be more ????")
//     else{
//         let text = ""
//         for(let i = start; i <= end; i++){
//             text+=str[i]
//         }    

//         return text
//     }

// }

// try{
//     console.log(substring("hello and welcome",6,8))
//     console.log(substring("hello and welcome",-1,16))
// }catch(e){
//     console.log(e.message)
// }


// console.log("asadasd")

// type NameAge = {name:string,age:number}

// function isEqule(o1:NameAge, o2:NameAge){
//     return ( o1.age == o2.age && o1.name == o2.name )
// }

// let obj = {name:"abc",age:14}
// let obj1 = {name:"abc",age:14}

// let arr = [obj1]

// if(isEqule(obj,obj1)){

// }

// console.log(isEqule(obj,obj1))


// function removeFromArr(arr:number[], value:number){

//     //test
//     let newArry:number[] = []
//     let firstTime = true

//     let index = 0
    
//     for(let i = 0; i < arr.length; i++){
        
//         if(arr[i] != value || !firstTime){
//             newArry[index++] = arr[i]
//         }else{
//             firstTime = false
//         }
//     }

//     return newArry
// }

// let arr = [2,4,3,1,4,3] // [2,4,3,1,4,3]
// let res = removeFromArr(arr, 3)
// console.log(res)

// function addToStart(arr:number[], value){
    
//     for(let i = arr.length - 1; i > -1; i--){
//         arr[i+1] = arr[i]
//     }

//     arr[0] = value

//     return arr
// }

// let arr = [2,3]
// let res = addToStart(arr, 1)
// console.log(res)

// console.log(addToStart(res, 0))

// function updateByIndex(arr:number[], index:number, value:number){
//     arr[index] = value
//     return arr
// }

// let arr = [2,4,3,1,4,3]
// let res = updateByIndex(arr, 3,3)
// console.log(res)



