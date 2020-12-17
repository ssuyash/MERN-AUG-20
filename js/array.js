//collection of  values
var students = ['rajat', 'rekha', 'arpita', 'shivam', 'suyash', 'priyanka']
var resumeCompletedBy = []



//array methods
//1) push > to insert new element (at the end) in array

/*
console.log("befor push", students)
students.push("deepti")
console.log("after push", students)
*/


//2)) unshift > to insert new element (at the begining) in array
// console.log("befor", students)
// students.unshift("Deepti")
// console.log("after", students)


//3)pop > to remove an element (at the end) from array

// console.log("befor", students)
// var removedElement = students.pop()
// console.log("removed element is : ", removedElement)
// console.log("after", students)

//4) shift > to remove an element (from the begining) from array

// console.log("befor", students)
// var removedElement = students.shift()
// console.log("removed element is : ", removedElement)
// console.log("after", students)


//5) splice(starIndex, deleteCount, itemsToadd)



//students.splice(3, 0, "Deepti", "Rishabh")
students.splice(3, 1)
console.log(students)


//6) sort

students.sort()
console.log(students)




var nums = [10, 20, 30, 40] 
var newNumber = []

for(var i=0; i<nums.length; i++){
    var num = nums[i]   
    var newNum = num+5
    newNumber.push(newNum)
}


console.log(newNumber)

//7) map => iterates over the array and return a new array with perfor the given operation
var newArr = nums.map(function(el, index, arr){
    console.log(el, index, arr)
    return 1
})

//8) forEach => iterates over the array
nums.forEach(function(num){
    console.log(num)
})


//9) join => joins array elements with a given string and returns a string
let joined = nums.join("||")
console.log(joined)


//10) filter => returns only filtered items given in codition

let ages = [20, 30, 10, 12, 80, 55, 7]
// let canVote = []

// ages.forEach(function(age){
//     if(age >= 18){
//         canVote.push(age)
//     }
// })

// console.log(canVote)

let canVote = ages.filter(function(age){
    return age>=18
})

//console.log(canVote)


let nums1 = [10, 2, 3, 15, 60, 9, 12, 3, 69, 34]

nums1.sort(function(a, b){
    return a-b
})


let items= [
    {
      "offer_code": "de6a0e91d14b68ab",
      "brand": "Samsung",
      "name": "Galaxy A21s Dual SIM Black 4GB RAM 64GB 4G LTE - UAE Version ",      
      "price": 595,
    },
    {
      "offer_code": "c6a4b7e9eab61e8f",
      "brand": "Apple",
      "name": "iPhone 12  64GB Black 5G - Middle East Version ",      
      "price": 3399,
    },
    {
      "offer_code": "bd07cacf1c3608de",
      "brand": "Samsung",
      "name": "Galaxy A71 Dual SIM Prism Crush Black 8GB RAM 128GB 4G LTE - UAE Version ",      
      "price": 1163,
    },
    {"offer_code": "e1a1f1a62ec2a16c",
      "brand": "Samsung",
      "name": "Galaxy A11 Dual Sim Black 2GB RAM 32GB 4G LTE - UAE Version ",      
      "price": 412,
    },
    {
      "offer_code": "a249ccc09f2a384f",
      
      
      "brand": "Samsung",
      "name": "Galaxy A51 Dual SIM Prism Crush Black 6GB RAM 128GB 4G LTE-UAE Version ",      
      "price": 1199,
    },
    {
      "offer_code": "b681b4fac9a0f20e",
      
      
      "brand": "OnePlus",
      "name": "Nord Dual Sim Blue Marble 12GB RAM 256GB 5G - Global Version ",      
      "price": 1499,
    },
    {
      "offer_code": "dd61915eb7ff747c",
      
      
      "brand": "Samsung",
      "name": "Galaxy M31 Dual SIM Black 6GB RAM 128GB 4G LTE ",      
      "price": 762.95,
    },
    {
      "offer_code": "a551a9fb3e11e62c",
      
      
      "brand": "Samsung",
      "name": "Galaxy M11 Dual SIM Black 3GB RAM 32GB 4G LTE-UAE Version ",      
      "price": 424.95,
    },
    {
      "offer_code": "c9b8cf7d2a109c0a",
      
      
      "brand": "OnePlus",
      "name": "Nord Dual Sim Blue Marble 8GB RAM 128GB 5G - Global Version ",      
      "price": 1251.85,
    },
    {
      "offer_code": "fd3ab3bad95cbddd",
      
      
      "brand": "Apple",
      "name": "iPhone 12  64GB White 5G - Middle East Version ",      
      "price": 3399,
    },
    {
      "offer_code": "b2a89099615456cf",
      
      
      "brand": "ASUS",
      "name": "Rog Phone 3 Dual Sim Black 12GB RAM 5G 512GB - Global Version ",      
      "price": 3349,
    },
    {
      "offer_code": "de8428155715cc1e",
      
      
      "brand": "Samsung",
      "name": "Galaxy Note20 Ultra Dual SIM Mystic Black 12GB RAM 256GB 5G - International Version ",      
      "price": 4899,
    },
    {
      "offer_code": "b7c2ac3eade0703d",
      
      
      "brand": "Samsung",
      "name": "Galaxy S9 Plus Midnight Black 6GB 64GB RAM 4G LTE ",      
      "price": 1018.6,
      "offer_code": "a45af45f372dfbcb",
      
      
      "brand": "OPPO",
      "name": "F1s Dual SIM Golden 4GB RAM 32GB 4G LTE ",      
      "price": 999,
      
      "brand": "Apple",
      "name": "iPhone 12  64GB (Product) Red 5G - Middle East Version ",      
      "price": 3399,
    },
    {
      "offer_code": "c4cf33c9d1a23d8d",
      
      
      "brand": "Samsung",
      "name": "Galaxy Note10 Lite Dual Sim Aura Black 8GB RAM 128GB 4G LTE ",      
      "price": 1489,
    },
    {
      "offer_code": "e01f90975e51211c",
      
      
      "brand": "Apple",
      "name": "iPhone 12  128GB Black 5G - Middle East Version ",      
      "price": 3609,
    },
    {
      "offer_code": "ed0b6a0f4f591d8f",
      "brand": "Samsung",
      "name": "Galaxy A10s Dual SIM Red 32GB 2GB RAM 4G LTE - UAE Version ",      
      "price": 412.35,
      "offer_code": "b75e58770ea4240c",
      
      
      "brand": "OnePlus",
      "name": "8 Pro Dual Sim Black 12GB RAM 256GB 5G ",      
      "price": 2999.95,
    },
    {
      "offer_code": "b761a85aa47740de",
      
      
      "brand": "Xiaomi",
      "name": "Poco X3 Dual SIM Shadow Gray 6GB RAM 128GB 4G LTE ",      
      "price": 999,
    },
    {
      "offer_code": "c8d24b310750924c",
      
      
      "brand": "Samsung",
      "name": "Galaxy Note 3 White/Gold 3GB RAM 32GB 4G LTE ",      
      "price": 499,
      "offer_code": "f5ef1cf3a9efbd9e",
      
      
      "brand": "HUAWEI",
      "name": "Y9 Prime Dual SIM Emerald Green 4GB RAM 128GB 4G LTE ",      
      "price": 849,
      "offer_code": "e656480d3d9e113b",
      
      
      "brand": "Xiaomi",
      "name": "Redmi Note 9 Pro Global Specs Dual Sim Tropical Green 128GB/6GB RAM 4G LTE ",      
      "price": 1199,
      "offer_code": "e1cdd753c4d411fb",
      
      
      "brand": "Xiaomi",
      "name": "Redmi Note 8 Pro Global Specs Dual SIM Forest Green 128GB 6GB RAM 4G LTE ",      
      "price": 721,
      "offer_code": "ec1f440e5befa84f",
      
      
      "brand": "Samsung",
      "name": "Galaxy Grand Prime Dual SIM White 1GB RAM 8GB 4G LTE ",      
      "price": 599,
      
      "brand": "Apple",
      "name": "iPhone 12  128GB White 5G - Middle East Version ",      
      "price": 3609,
    },
    {
      "offer_code": "aff530a34291d05b",
      
      
      "brand": "Xiaomi",
      "name": "Redmi Note 9 Dual Sim Midnight Grey 4GB RAM 128GB 4G LTE ",      
      "price": 799,
    },
    {
      "offer_code": "ab786942962435dd",
      
      
      "brand": "Xiaomi",
      "name": "Redmi Note 9 Pro Dual SIM Aurora Blue 6GB RAM 128GB 4G LTE ",      
      "price": 789,
      "offer_code": "a5c6960a8da6aace",
      
      
      "brand": "Apple",
      "name": "iPhone 12  128GB Blue 5G - Middle East Version ",      
      "price": 3609,
    },
    {
      "offer_code": "d05a11d25e2d8e5d",
      
      
      "brand": "Samsung",
      "name": "Galaxy M31 Dual SIM Blue 6GB RAM 128GB 4G LTE ",      
      "price": 778.2,
    },
    {
      "offer_code": "dd86f34f70c9688f",
      
      
      "brand": "Nokia",
      "name": "105 Dual SIM Black  4MB 2G ",      
      "price": 79,
      "offer_code": "d0511ae68f40e90a",
      
      
      "brand": "Samsung",
      "name": "Galaxy S20 Plus Dual SIM Cosmic Black 8GB RAM 128GB 4G LTE - International Version ",      
      "price": 2414,
    },
    {
      "offer_code": "b97b486b3845baec",
      
      
      "brand": "Samsung",
      "name": "Galaxy M31 Dual SIM Red 6GB RAM 128GB 4G LTE ",      
      "price": 787.95,
    },
    {
      "offer_code": "cda3309ae6c30dbd",
      
      
      "brand": "Apple",
      "name": "iPhone 12  128GB Green 5G - Middle East Version ",      
      "price": 3609,
    },
    {
      "offer_code": "e32f434b3a7afaff",
      
      
      "brand": "Apple",
      "name": "iPhone 12  128GB (Product) Red 5G - Middle East Version ",      
      "price": 3609,
    },
    {
      "offer_code": "c9c85700144c842e",
      
      
      "brand": "Apple",
      "name": "iPhone 12  256GB Black 5G - Middle East Version ",      
      "price": 4029,
    },
    {
      "offer_code": "caf7f72849f75a9e",
      
      
      "brand": "Samsung",
      "name": "Galaxy A31 Dual SIM Prism Crush Blue 4GB RAM 128GB 4G LTE - UAE Version ",      
      "price": 694.95,
    },
    {
      "offer_code": "f75bfaf4597d4b3a",
      
      
      "brand": "OnePlus",
      "name": "7T Pro Dual SIM Haze Blue 8GB RAM 256GB 4G LTE Haze Blue ",      
      "price": 2049,
    },
    {
      "offer_code": "d2677deddf7e09eb",
      "brand": "Xiaomi",
      "name": "Redmi 9A Dual Sim Granite Grey 2GB RAM 32GB 4G LTE (Global Version) ",      
      "price": 379,
    },
    {
      "offer_code": "dfb137fcdac812ad",
      "brand": "HUAWEI",
      "name": "P30 Pro Dual SIM Pearl White 8GB RAM 128GB 4G LTE ",      
      "price": 1999,
    },
    {
      "offer_code": "ff5ce749de6424dc",
      
      
      "brand": "Samsung",
      "name": "Galaxy Note 3 Black 3GB RAM 32GB 4G LTE ",      
      "price": 330,
      
      "brand": "OnePlus",
      "name": "Nord Dual Sim Blue Marble 12GB RAM 256GB 5G ",      
      "price": 1450,
      
      "brand": "Apple",
      "name": "iPhone 12  256GB White 5G - Middle East Version ",      
      "price": 4029,
    },
    {
      "offer_code": "e2f0190180199aff",
      
      
      "brand": "OPPO",
      "name": "A57 Dual SIM Gold 32GB 4G LTE ",      
      "price": 899,
      
      "brand": "HUAWEI",
      "name": "Y9s Dual SIM Breathing Crystal 6GB RAM 128GB 4G LTE ",      
      "price": 1099,
      "offer_code": "dc3a2dd037b0781f",
      
      
      "brand": "OPPO",
      "name": "F5 Dual SIM Gold 4GB RAM 64GB 4G LTE ",      
      "price": 395,
      "offer_code": "db525101de0b39bf",
      
      
      "brand": "Apple",
      "name": "iPhone 12  256GB Blue 5G - Middle East Version ",      
      "price": 4029,
    },
    {
      "offer_code": "d1dbb542bebc2aae",
      
      
      "brand": "Samsung",
      "name": "Galaxy Note8 Dual SIM Midnight Black 64GB 6GB RAM 4G LTE ",      
      "price": 1999,

    },
    {
      "offer_code": "e599d8fb3f3d302d",
      
      
      "brand": "Samsung",
      "name": "Galaxy M51 Dual SIM Black 8GB RAM 128GB 4G LTE - UAE Version ",      
      "price": 1252.95,
    },
    {
      "offer_code": "b5beade67b1b7acf",
      "brand": "OPPO",
      "name": "A57 Dual SIM Gold 32GB 3GB RAM 4G LTE ",      
      "price": 279,
    }]


    items.sort(function(a, b){
        return a.price - b.price
    })

let filterd = items.filter(function(el){
    return el.offer_code == 'caf7f72849f75a9e'
})

filterd.forEach(function(el){
    console.log(el.name, el.price)
})




let founded = items.find(function(el){
    return el.offer_code == "caf7f72849f75a9e"
})


let num3 = []

let sum = num3.reduce(function(prevAns, currentEle){
    console.log("prev ans", prevAns, "current", currentEle)
    return prevAns+currentEle
}, null)



let numbers = [10, 20, 30, 40]

let index = numbers.indexOf(50)
console.log(index)


