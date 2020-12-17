var n = 2

var first = 0
var last = 1



if(n <= 2){
    for(var i=0; i<n; i++){
        console.log(i)
    }
}else{
    console.log(0)
    console.log(1)
    var termsCount = 2
    while (termsCount <  n){
        current = first + last
        first = last
        last = current
        console.log(current)
        termsCount++
    }
}




