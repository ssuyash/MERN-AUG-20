var number = 1234654987
var revNumber = 0

var numberofDigit = 0
while(number != 0){
    numberofDigit++
    var lastNumber = number%10
    revNumber = revNumber*10 + lastNumber    
    number = parseInt(number/10)
}

console.log(revNumber, numberofDigit)

