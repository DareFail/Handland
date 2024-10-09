var gameState = {
    health_you: 3,
    health_other: 3,
    bullets_you: 1,
    bullets_other: 1,
    is_resolving: false,
    move_you: '',
    move_other: '',
    end_game: false,
    remoteVideoVisible: false,
    videoMove_you: "",
    videoMove_other: "",
    gameStateText: "",
    winnerText: "",
    yourCurrentPrediction: "",
    is_playing: true
  }

  

function resolveRound(gameData) {

    gameState = gameData;

    if (gameState.remoteVideoVisible) {
        document.getElementById("remoteVideo").style.display = "block";
    } else {
        document.getElementById("remoteVideo").style.display = "none";
    }

    document.getElementById("move_you").innerHTML = "You: " + gameState.move_you;
    document.getElementById("health_you").innerHTML = "Health: " + gameState.health_you;
    document.getElementById("bullets_you").innerHTML = "Bullet: " + gameState.bullets_you;
    document.getElementById("videoMove_you").innerHTML = gameState.videoMove_you;
    
    document.getElementById("move_other").innerHTML = "Opponent: " + gameState.move_other;
    document.getElementById("health_other").innerHTML = "Health: " + gameState.health_other;
    document.getElementById("bullets_other").innerHTML = "Bullet: " + gameState.bullets_other;
    document.getElementById("videoMove_other").innerHTML = gameState.videoMove_other;

    document.getElementById("gameStateText").innerHTML = gameState.gameStateText;
    document.getElementById("winnerText").innerHTML = gameState.winnerText;
}