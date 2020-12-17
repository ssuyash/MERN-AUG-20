//Object => properties(variable) and methods(functions)

//blueprint => class => object

let person = {
 name:'suyash',
 dob:1994,
 getAge:function(){
     return 2020 - this.dob
 }    
}


console.log(person.getAge())


class Person{
    constructor(name, dob){
        this.name = name;
        this.dob = dob;
    }

    getAge(){
        return 2020 - this.dob
    }
}




let person1 = new Person("suyash", 1994)

console.log(person1.getAge())


//access keys

console.log(person1.name)
console.log(person1["name"])
let key = "name"
console.log(person1[key])
person.lastName = "kumar"
delete person['lastName']
console.log(person.lastName)


