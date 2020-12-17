let binNumber  = 1010110  //86

let deci = 0
let count = 0


function power(a, b){
    var pow = 1
    for(var i=1; i<=b; i++){
        pow *= a
    }    
    return pow   
}

while(binNumber != 0 ){
    let lastNumber = binNumber%10
    binNumber = parseInt(binNumber/10)
    deci += lastNumber*power(2, count)
    count++
}

console.log(deci)
