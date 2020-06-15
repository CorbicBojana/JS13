const logicController = (function () {

    let score;

    if(localStorage.getItem('score')){
        score = parseInt(localStorage.getItem('score'))
    }else{
        score = 0;
    }


    saveScore = function(){
            localStorage.setItem('score',score);
        }

    return {
        // hello:function(){
        //     console.log('this is the logic controller')
        getChoice:(e) => {
            const playerChoice = e.target.closest('.game__control').dataset.type;
            const choices = ['scissors','paper','rock','rock','paper','scissors','paper','paper','paper','rock','rock','rock','scissors','scissors','scissors','scissors','paper','paper','paper','paper'];
            const random = Math.floor(Math.random() * choices.length);
            const cpuChoice = choices[random];
            
            return [playerChoice,cpuChoice];
        },
        checkWinner:(player,cpu)=>{
            if(player === cpu){
                return 'draw';
            }else if(player === 'scissors' && cpu === 'rock'){
                score-=1;
                saveScore();
                return `You Lose!`;
            }
            else if(player === 'scissors' && cpu === 'paper'){
                score+=1;
                saveScore();
                return `You Win!`;
            }
            else if(player === 'rock' && cpu === 'scissors'){
                score+=1;
                saveScore();
                return `You Win!`;
            }
            else if(player === 'rock' && cpu === 'paper'){
                score-=1;
                saveScore();
                return `You Lose!`;
            }
            else if(player === 'paper' && cpu === 'scissors'){
                score-=1;
                saveScore();
                return `You Lose!`;
            }
            else if(player === 'paper' && cpu === 'rock'){
                score+=1;
                saveScore();
                return `You Win!`;
            }
        },

        getScore:function(){
            return score;
        },

        playAgain:function(){
            window.location.reload();
        }
    };
})();
