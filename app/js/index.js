const gameController = (function (uiCtrl, logicCtrl) {
    // uiCtrl.hello();
    // logicCtrl.hello();

    let playerChoice, cpuChoice;
    // DOM ELEMENTS
    const elements = uiCtrl.elements;
    // SHOW THE RULES
    //Close the rules

    //click the choices
    //get the current choice
    //create a random pick for the cpu

    //check who won
    //add the corresponding response to the winner
    // add the score or subtract the score based on the
    function setupEventListeners() {
        document.addEventListener(
            "DOMContentLoaded",
            uiCtrl.updateScore(logicCtrl.getScore())
        );

        // BUTTON EVENTS
        elements.choices.forEach((choice) => {
            choice.addEventListener("click", (e) => {
                [playerChoice, cpuChoice] = logicCtrl.getChoice(e);

                // console.log(`Player:${playerChoice}, CPU:${cpuChoice}`);

                const winner = logicCtrl.checkWinner(playerChoice, cpuChoice);
                //display results panel
                let playerScore = logicCtrl.getScore();
                uiCtrl.displayResult(playerChoice, cpuChoice, winner, () =>
                    uiCtrl.updateScore(playerScore)
                );
                //display player pick
                //display cpu pick
                //display get winner pick
            });
        });

        // PLAY AGAIN

        elements.playAgainBtn.addEventListener("click", logicCtrl.playAgain);

        // SHOW RULES

        elements.rulesBtn.addEventListener('click',uiCtrl.showRules);

        //hide rules
        elements.closeBtn.addEventListener('click',uiCtrl.hideRules);


    }

    return {
        init: function () {
            setupEventListeners();
        },
    };
})(UIController, logicController);

gameController.init();
