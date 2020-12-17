$(function(){

    $('button').click(function(e){

        let clickedBtn = $(this).text()

        let oldVal = $('textarea').val() == "0" ? "" : $('textarea').val()
        
        let newVal = ''

        if(clickedBtn == '='){
            newVal = eval(oldVal)    
        }else if(clickedBtn == 'C'){
            newVal = "0"
        }else{
            newVal = oldVal+clickedBtn
        }
        
        $('textarea').val(newVal)        
    })

})