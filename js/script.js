
//Numbers
var firstNumber = 10
var negativeNumber = -10
var decimalNumbe  = 10.5
var bigNumber = 5.6E10
var binaryNumber = 0b101010
var hexaNumber = 0xff    
var octalNumber = 0o12421
var notANumber = NaN
var inf = Infinity

//String
var name = 'suyash'
var name = "suyash"
var name = `suyash`



//Boolean
var isClassRunning = true
var everyoneInClass = false




//Array
var students = [10, "Priayanka", true, "Rajat", [],  "Prateek", "Arpita", "Deepti", "Mayank"]
//console.log(students)

//Object

var person = {
    name:"Suyash",
    age:26,
    mbl:8878071281
}


var num1 = 10
num1 += 30  //num1 = num1 + 30
var num2 = 20

 //console.log(num1+num2)



var isThirsty = false
var moneyValueBigThen20 = true

var buy20RsBottle = isThirsty && moneyValueBigThen20  

//console.log(buy20RsBottle)

// 0 - 150






var age = 110

if(age > 0 && age < 150){
    if(age >= 18){
        console.log("you can vote")
    }else{
        console.log("you can not vote")
    }
}else{
    console.log("Invalid Age")
}


var weekday = 100

switch(weekday){
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log("Sunday")
        break
    default:
        console.log("Invalid weekday number")
}



var num1 = 100
var num2 = 20

var big = num1>num2 ? num1 : num2
console.log(big)




//console.log(num1===num2)