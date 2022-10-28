// class Employee{
//     constructor(
//         public name:string,
//         public age:number,
//         public salery:number,
//         ){
//     }

//     details(){
//         return "name:"+this.name + " age:"+this.age +
//         " salery:" + this.salery
//     }
// }


// for(let i = 0; i < 100; i++){

//     let randomAge = Math.round(Math.random() * (60 - 20 )) + 20
//     let randomSalery = Math.round(Math.random() * (9000 - 2000 )) + 2000
//     console.log(new Employee(generateRandomText(3,10),randomAge,randomSalery))
// }

// for(let i = 0; i < 100; i++){

//     let rnd = Math.round(Math.random() * (10 - 2)) + 2
//     console.log(rnd)
// }


// function generateRandomText(start, end){
//     let text = ""

//     let len = Math.round(Math.random() * (end - start )) + start
//     for(let i = 0; i < len; i++){
//         let randomChar = Math.round(Math.random() * (122 - 97)) + 97
//         text += String.fromCharCode(randomChar)
//     }

//     return text
// }

// class Employee{
//     constructor(
//         public workHours:number,
//         public moreWorkHours:number,
//         public status:number,
//         ){
          
//     }

//     getSalery(){
//         if(this.status == 1){
//             return ( (this.workHours * 40) + (this.moreWorkHours * 50) )
//         }else{
//             return ( (this.workHours * 70) + (this.moreWorkHours * 80) )
//         }
//     }
// }

// let e = new Employee(120,30,2)
// console.log(e.getSalery())


// let i = 0
// while(true){
//     console.log("hello")
//     i++

//     if(i == 10) break
// }

// i = 0

// for(let p = 0; p < 10; p++){
//     console.log("hello")
// }

// p = 0

// function add(a,b){
//     return a+b
// }


// function inc(num:number){
//     return num + baseInc
// }

// function add1(num:number, b:number){
//     if(num > 20) 
//         b *= -1

//     return num + b
// }

// let baseInc = 10

// console.log(add1(10,baseInc))


// function isValid(str:string){
//     const num = parseInt(str)
//     if(Number.isNaN(num)){
//         throw new Error("number cant be NaN")
//     }else{
//         return num >= 100 && num <= 999
//     }
// }

// try{
//     let valid = isValid("asdasd")
// }catch(e){
//     console.log(e.message)
// }

// console.log("hello")


// dor
// hedllo dor and welcome


function indexOf(t1:string, t2:string){

    if( t1 == "" || t2 == "" || t1 == null || t2 == null )
        throw new Error("texts can not be empty or null")
    else if(t1.length > t2.length)
        throw new Error("first text cant be longer from the sec text")
    else{
        let index = -1

        for(let i = 0; i < t2.length; i++){
            if(t2[i] == t1[0]){

                let isFound = true

                for(let j = 0; j < t1.length; j++){
                    if(t2[i+j] != t1[j]){
                        isFound = false
                        break
                    }
                }

                if(isFound){
                    index = i
                    break
                }
            }
        }
        return index;
    }
}





console.log(indexOf("dor","hedllo and welcome"))



