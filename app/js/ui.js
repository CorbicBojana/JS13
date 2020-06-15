const UIController = (function () {
    const domElements = {
        choices: document.querySelectorAll(".game__control"),
        rulesBtn: document.querySelector(".rulesBtn"),
        closeBtn: document.querySelector(".close"),
        playAgainBtn: document.querySelector(".playAgain"),
        finalText: document.querySelector(".game__finalText"),
        playerSide: document.querySelector(".player"),
        cpuSide: document.querySelector(".cpu"),
        gameScore: document.querySelector(".game__score"),
        resultPanel: document.querySelector(".game__result"),
        finalPanel: document.querySelector(".game__final"),
        controlPanel: document.querySelector(".game__controls"),
        rulesPanel: document.querySelector(".rules__container"),
    };

    function updateScore(score) {
        domElements.gameScore.textContent =
            score < 10 && !(score < 0) ? (score = `0${score}`) : score;
    }

    function addWinnerClass(winner) {
        setTimeout(() => {
            if (winner.includes("Win")) {
                document
                    .querySelector(".playerElement")
                    .classList.add("winner");
            } else if (winner.includes("Lose")) {
                document.querySelector(".cpuElement").classList.add("winner");
            } else {
                document
                    .querySelector(".playerElement")
                    .classList.add("winner");

                document.querySelector(".cpuElement").classList.add("winner");
            }
        }, 500);
    }

    return {
        elements: domElements,

        updateScore: updateScore,

        displayResult: function (playerChoice, cpuChoice, winner, callback) {
            let playerClass, cpuClass;
            domElements.controlPanel.classList.remove("showControls");
            domElements.resultPanel.classList.add("showResult");
            winner.includes("Win") ? (playerClass = "winner") : "";
            domElements.playerSide.innerHTML = `
            <div class="element ${playerChoice} playerElement">
              <div class="holder">
                <img src="./images/icon-${playerChoice}.svg" alt="" class="game__img">
              </div>
            </div>
            `;

            setTimeout(() => {
                winner.includes("Win") ? "" : (cpuClass = "winner");
                domElements.cpuSide.innerHTML = `
                <div class="element ${cpuChoice} cpuElement">
                <div class="holder">
                  <img src="./images/icon-${cpuChoice}.svg" alt="" class="game__img">
                </div>
                </div>
                `;

                addWinnerClass(winner);
                // display final result
                domElements.finalText.textContent = winner;
                domElements.finalPanel.classList.add("showFinal");
                callback();
            }, 1500);
        },

        showRules: function () {
            domElements.rulesPanel.classList.add("showRules");
        },
        hideRules: function () {
            domElements.rulesPanel.classList.remove("showRules");
        },
    };
})();
