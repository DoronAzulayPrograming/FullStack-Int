// type Person = { id:number,name:string,age:number }

// let person:Person = {id:-100,name:"",age:0}

// let arr:Person[] = [{id:1,name:"shalev",age:17},{id:2,name:"doron",age:16},{id:3,name:"kobi",age:14}]

// function updatePerson(arr:Person[], person:Person){

//     if(arr == null || arr.length == 0){
//         throw new Error("array cant be null or empty")
//     }else if (person == null || person.id <= 0){
//         throw new Error("person cant be null or id cant be zero or smoller")
//     }else{
//         for(let i = 0; i < arr.length; i++){
//             if(arr[i].id == person.id){
//                 arr[i].age = person.age
//                 arr[i].name = person.name
    
//                 break
//             }
//         }
//     }

//     return arr
// }

// function updateArray(arr:Person[], person:Person){

//     for(let i = 0; i < arr.length; i++){
//         person.id = i+1
//         arr = updatePerson(arr, person)
//     }

//     return arr
// }

// console.log(arr)

// arr = updateArray(arr, person)

// console.log(arr)



// // console.log(arr)

// // try{
// //     arr = updatePerson(arr, person)
// // }catch(error){
// //     console.log(error.message)
// // }

 // console.log(arr)




