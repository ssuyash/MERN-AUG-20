var amount = 8236

var remainingAmount = amount


if( remainingAmount >= 2000){
    var tempAmount = remainingAmount%2000    
    var numberOfNotes = (remainingAmount - tempAmount)/2000
    remainingAmount = remainingAmount - numberOfNotes*2000
    console.log("Remaining amount after 2000", remainingAmount)
    console.log("2000 : ", numberOfNotes)    
}


if( remainingAmount >= 500){
    var tempAmount = remainingAmount%500
    var numberOfNotes = (remainingAmount - tempAmount)/500
    remainingAmount = remainingAmount - numberOfNotes*500
    console.log("Remaining amount after 500", remainingAmount)
    console.log("500 : ", numberOfNotes)
}


if( remainingAmount >= 200){
    var tempAmount = remainingAmount%200
    var numberOfNotes = (remainingAmount - tempAmount)/200
    remainingAmount = remainingAmount - numberOfNotes*200
    console.log("Remaining amount after 200", remainingAmount)
    console.log("200 : ", numberOfNotes)
}


if( remainingAmount >= 100){
    var tempAmount = remainingAmount%100
    var numberOfNotes = (remainingAmount - tempAmount)/100
    remainingAmount = remainingAmount - numberOfNotes*100
    console.log("Remaining amount after 100", remainingAmount)
    console.log("100 : ", numberOfNotes)
}



if( remainingAmount >= 50){
    var tempAmount = remainingAmount%50
    var numberOfNotes = (remainingAmount - tempAmount)/50
    remainingAmount = remainingAmount - numberOfNotes*50
    console.log("Remaining amount after 50", remainingAmount)
    console.log("50 : ", numberOfNotes)
}


if( remainingAmount >= 20){
    var tempAmount = remainingAmount%20
    var numberOfNotes = (remainingAmount - tempAmount)/20
    remainingAmount = remainingAmount - numberOfNotes*20
    console.log("Remaining amount after 20", remainingAmount)
    

    console.log("20 : ", numberOfNotes)
}

if( remainingAmount >= 10){
    var tempAmount = remainingAmount%10
    var numberOfNotes = (remainingAmount - tempAmount)/10
    remainingAmount = remainingAmount - numberOfNotes*10
    console.log("Remaining amount after 10", remainingAmount)

    console.log("10 : ", numberOfNotes)
}


if( remainingAmount >= 5){
    var tempAmount = remainingAmount%5
    var numberOfNotes = (remainingAmount - tempAmount)/5
    remainingAmount = remainingAmount - numberOfNotes*5
    console.log("Remaining amount after 5", remainingAmount)

    console.log("5 : ", numberOfNotes)
}



if( remainingAmount >= 2){
    var tempAmount = remainingAmount%2
    var numberOfNotes = (remainingAmount - tempAmount)/2
    remainingAmount = remainingAmount - numberOfNotes*2
    console.log("Remaining amount after 2", remainingAmount)

    console.log("2 : ", numberOfNotes)
}


if( remainingAmount >= 1){
    var tempAmount = remainingAmount%1
    var numberOfNotes = (remainingAmount - tempAmount)/1
    remainingAmount = remainingAmount - numberOfNotes*1
    console.log("Remaining amount after 1", remainingAmount)

    console.log("1 : ", numberOfNotes)
}