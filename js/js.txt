let str = "rajat"

console.log(str[0])
console.log(str.length)
console.log(str.indexOf('a'))
console.log(str.lastIndexOf('a'))

let str1 = " MERN stack is going to rule Web Industry. "
let splitted = str1.split(" ").join("--")
console.log(str1.slice(-9, -1))
console.log(str1.substring(0, 5))
console.log(str1.substr(6, 7))
console.log(splitted)

console.log(str1.replace("MERN", "MEAN"))

str1.toLocaleLowerCase()
str1.toUpperCase()
console.log(str1.trim())

let name = "Suyash"
let lastName =  " Kumar"



let finalName = name+lastName
console.log(finalName)

let message = "Hello Mr. "
let mbl ="8878071560"

"Hello Mr. Suyash Kumar Your registered mobile number is 8878071281"

let msg = "Hello Mr. "+name+lastName+" Your registerd mobile nube is "+mbl

let msg1 = `Hello Mr. ${name} ${lastName} Your registered mobile number is ${mbl} `

console.log(msg1)



let last3Digits = mbl.substr(-3, 3)
console.log(last3Digits)

console.log("X".repeat(8))
//code

console.log(`OTP has been sent to your mobile ${"X".repeat(7)}${last3Digits}`)


let email = "kumarsuyash94@gmail.com"



// 1)must coantian @
// 2) length must be 6 or more
// 2) after @ atleatst one character and after that . must be there after . atleast 2 character must be there




