let obj = {
    name:'suyash',
    lastName:"kumar"
}


// let name = obj.name
// let lastName = obj.lastName

let {name:firsName, lastName} = obj

//console.log(firsName, lastName)


let arr = ['suyash', 'kumar', 26, ['programming', 'travelling'], 5000]

// let [name, lastName, age] = arr

// console.log(name, lastName, age, other)


//Rest operator (rest parameter)
//Spread
//



//default parameter
let add = (a, b=0)=>{    
    console.log(a, b)   
}

add(5)



// arr.splice(0, 2,)



let person1 = {
    ...obj,    
    age:26
}


let number = [1, 2, 3, 5, 10]

let newNumber = [...number]


// array methods revision
// string methods revision




var nums = [10, 20, 30]
var arr1 = [...nums] //copy of array
arr1[1] = 50
console.log(arr1, nums)
//[10, 50, 30] [10, 20, 30]





let obj1 = {name:"suyash"}
let obj2 = {...obj1}
obj2.name = "kumar"
console.log(obj1, obj2)




let obj3 = {
    name:'suyash',
    age:26,
}

let obj4 = {
    jd:"DS",
    exp:13
}



// person = {
//     name:
//     age:
//     jd:
//     exp:
//     isWorking:true
// }


// let person = {
//     ...obj3,
//     ...obj4,
//     isWorking:true
// }

// let person = {
//     name:obj3.name,


// }


let {name, age} = obj3
let {jd, exp} = obj4




let qulification = '12th'
let person = {
    name, age, jd, exp, qulification
}

console.log(person)