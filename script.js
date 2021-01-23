var scores, roundScore, activePlayer, dice, gameplaying;

init();
//the function used below is also called as an anonymous func and the addeventlistener is used to add the click function to the roll dice 
document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gameplaying){
        
         //1.random number
    dice = Math.floor(Math.random() * 6) + 1;//convert the value of the dice into random from 0 to 6 and then to remove the point values we use floor
    
    //2.Display the result
    var DiceDOM=document.querySelector('.dice');
    DiceDOM.style.display='block';//set the dice again to not none or to display it as soon as we click on roll dice
    DiceDOM.src='dice-' + dice +'.png';//change the image of the dice 
    
    //3.Update the round score if the rolled number is not 1
    if(dice!==1)
        {
            //add score
            roundScore+=dice;
            document.querySelector('#current-' + activePlayer).textContent= roundScore;

        }
    else{
        //next player
        nextplayer();
    }
    }
})

//thefunction down below is used for button hold and to add the roundscore to the scores array and also to print the winner
document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gameplaying){
     
        //1.add current score to Global score
    scores[activePlayer] +=roundScore;
    
    //2.update the UI(the values will be added in the scores as soon as be use the hold button)
    document.querySelector('#score-' + activePlayer).textContent=scores[activePlayer];
    
    //3.check if player won the game
    if(scores[activePlayer]>=20){
        document.querySelector('#name-'+ activePlayer).textContent ='Winner';
        document.querySelector('.dice').style.display='none';//remove the dice as soon as we get the winner printed on the screen
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');//the winner class is added here from the properties also
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');//the active class is removed as the winner is decided now
        gameplaying=false;
        
    }
    else{
        nextplayer();
    }
    }
})

function nextplayer(){
    activePlayer===0 ? activePlayer=1 : activePlayer=0;
        roundScore=0;
        document.getElementById('current-0').textContent='0';//set the current to zero for 1
        document.getElementById('current-1').textContent='0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');//if player 0 is active the change it to player 1
        document.querySelector('.player-1-panel').classList.toggle('active');//toggle changes from add to remove and remove to add the active class
        document.querySelector('.dice').style.display='none';
        
}

document.querySelector('.btn-new').addEventListener('click',init);

function init(){
    //contains all the initialization values
scores = [0, 0];
roundScore = 0;
activePlayer = 0;
gameplaying=true;


document.querySelector('.dice').style.display='none';//to hideup the dice as soon as we open the game we set the property to none

document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('name-0').textContent='Player 1';
document.getElementById('name-1').textContent='Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');

}



