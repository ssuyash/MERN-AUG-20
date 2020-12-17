$(function(){
    $("#number").keyup(function(e){        
        let pressedButton = String.fromCharCode(e.which)
        console.log(pressedButton)
        
        let inputVal = $(this).val()
        let isna = isNaN(inputVal)
        if(isna){
            $(this).removeClass('border-success')
            $(this).addClass('border-danger')
        }else{

            $(this).removeClass('border-danger')
            $(this).addClass('border-success')
        }
    })


    $(document).click(function(e){
        //console.log(e)
        let x = e.clientX
        let y = e.clientY
        console.log(x,y)
    })

    $('form').submit(function(e){
        e.preventDefault()
        let emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        let num = $("#number").val()
        if(emailReg.test(num)){
            console.log('valid email')
        }else{
            console.log('invalid email')
        }
        // if(isNaN(num)){
        //     e.preventDefault()
            
        //     $('.msg').text("Invalid number")
        //     $('.msg').removeClass('d-none')
        // }
        
    })
})