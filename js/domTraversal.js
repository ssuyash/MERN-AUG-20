//Parent 

// 1) parent()  => return direct parent 
// 2) parents() => return all ancestor html
// 3) parentsUntil() => return until given parent


//Descendants
// 1) children() => return direct children
// 2) find() => finds inside given element


//Siblings
// 1) siblings()
// 2) next()
// 3) nextAll()
// 4) nextUntil()
// 5) prev()
// 6) prevAll()
// 7) prevUntil()


$(function(){
    // $('button').click(function(){
    //     $(this).parentsUntil('tbody').addClass('bg-danger')
    // })


    // $('tr').click(function(){
    //     $(this).find('button').remove()
    // })


    // $('tr').click(function(){
    //     $(this).nextAll().each(function(){
    //         $(this).addClass('bg-danger')
    //     })        
    // })


    $('#roll').click(function(){
        let diceFace = (Math.round((Math.random()*10000))%6)+1
        let imgPath = `./images/dice/dice-${diceFace}.png`
        $('img').attr('src', imgPath)
    })

})


//     .text()
//     .html()
// .attr()
        // >Getter : .attr('attr')
        // >Setter : .attr('attr', 'newval')
//     .val()
    // .append()
    // .prepend()
    // .after()
    // .before()
    // .remove()
    // .empty()
    // .css()
    // .addClass()
    // .removeClass()
    // .hasClass()
    // .toggleClass()
    // .animate()

    // .width()
    // .height()
    // .innerWidth()
    // .innerHeight()
    // .outerWidth()
    // .outerHeight()

    //ajax => asyncronous javascript and xml