$(function(){
    let activePlayer = 0
    let scores = [0, 0]
    let winningScore = 100
    

    function getDiceImg(){
        let num = (Math.round(Math.random()*1000)%6)+1
        return {
            num:num,
            img:`../images/dice/dice-${num}.png`
        }
    }

     $('body').on('click', '.active',  function(){                            
        let data = getDiceImg()
        let img = data.img
        let num = data.num

        $(this).find('img').attr('src', img)

        scores[activePlayer] = scores[activePlayer]+num                
        $(this).find('.score').text(scores[activePlayer])        
        
        if(scores[activePlayer]  >= winningScore){
            alert('player'+(activePlayer+1)+" won")
            activePlayer = 0
            scores = [0, 0]
            $('.player-1').find('.score').text(0)
            $('.player-2').find('.score').text(0)
        }
        

        if(num != 6){
            $(this).removeClass('active')
            if(activePlayer == 0){
                activePlayer = 1
            }else{
                activePlayer = 0
            }
            
            $('.player-'+activePlayer).addClass('active')
        }

        
        
        
    })





   







})