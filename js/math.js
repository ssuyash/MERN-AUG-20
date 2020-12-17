

console.log(Math.E)
console.log(Math.E)

console.log(Math.abs(-10))


console.log(Math.pow(5,3))
 console.log(Math.random())


// console.log(Math.round())
// Math.floor()
// Math.ceil()





console.log(Math.ceil(10.5))
console.log(Math.floor(10.5))

console.log(Math.round(10.5))

//.49 => floor



//create a function named generate OTP which takes an argument of otp digits and returns an string of digits given in argument
function generateNumberOTP(numberOfDigit){
   let rand = Math.random() //return a number between 0 - 1 
   let multiplied = rand*Math.pow(10, numberOfDigit)
   let rounded = Math.round(multiplied)

   let otpStr = rounded+""

   if(otpStr.length != numberOfDigit){
       let lenDiff = numberOfDigit - otpStr.length
       otpStr = "0".repeat(lenDiff) + otpStr       
   }
   return otpStr   
}



function generateStringOtp(numberOfChar){
    let str = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()_+|}{:?></.,';]['\=-0"    
    let otpStr = ""    
    for(var i = 0; i<numberOfChar; i++){
        let randomNumber = Math.round(Math.random()*200000)
        let randomIndex = randomNumber%str.length
        otpStr += str[randomIndex]
    }
    return otpStr
}


for(let i=0; i<=150; i++){
    console.log(generateStringOtp(8))
}






