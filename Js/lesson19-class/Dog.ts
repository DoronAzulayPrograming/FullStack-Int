export class Dog {
    name:string
    age:number

    constructor(name:string, age:number){
        this.name = name
        this.age = age
    }

    greet() {
        console.log("hi " + this.name + " age: " + this.age)
    }

    bark(){
        console.log("havvv")
    }
}