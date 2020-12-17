
//Using function statement

// function greet(greetTime, useName){
//     console.log("Good", greetTime, useName)
// }

// greet('Evening', 'Rajat')


// function power(a, b){
//     var pow = 1
//     for(var i=1; i<=b; i++){
//         pow *= a
//     }    
//     return pow   
// }

// function fact(n){
//     var factVal = 1    
//     if(n <=1 ){
//         return 1
//     }
//     for(var i = n; i>=1; i--){
//         factVal *= i
//     }
//     return factVal
// }


// function calVal(x, p){
//     var val = power(x, p) / fact(p)
//     return val
// }

// var numberOfTerms = 5
// var x = 2

// var count = 1
// while(count <= numberOfTerms){
//     var seriesSum = 0
//     for(i=0 ; i<=numberOfTerms*2; i++ )    {
//         if(i%2 == 0){
//             var cal = calVal(x, i)
//             if(count%2 == 0){
//                 seriesSum -= cal
//             }else{
//                 seriesSum += cal
//             }
//             count++
//         }
//     }
// }

// console.log(seriesSum)


//using function expression

let add = function(a, b){
    return a+b
}


let sub = function(a, b){
    return a-b
}



let saySomething = function(msg){
    console.log(msg)
}

setTimeout(function(){
    saySomething("hello")
}, 5000)




let ans =  sub(add(2, 3), add(5,7))
console.log(ans)