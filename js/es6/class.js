//Blueprint => properties, methods

// //constructor function
// function Person(firstName, lastName, age){
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
//     this.showYOB = function(){
//         return 2020 - this.age
//     }
// }

// var p1 = new Person("Suyash", "kumar", 26)
// console.log(p1.showYOB())




// class Person{
//     constructor(firstName, lastName, age){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//     }
//     showYOB = function(){
//         return 2020-this.age
//     }
// }

// class Programmer extends Person{
//     constructor(firstName, lastName, age, language){
//         super(firstName, lastName, age)
//         this.language = language       
//     }    
// }


// var p1 = new Programmer("suyash", "kumar", 26, "JS")
// console.log(p1.showYOB())

class Utils{
    add(num1, num2){
        console.log(num1+num2)
        return num1+num2
    }
}



class MyClass extends Utils{

    constructor(){
        super()
        console.log("I am constructor")
    }

    displayHi(){
        console.log("Hello Everyone")
    }
}


let myClassObj = new MyClass()
myClassObj.add(10, 30)



