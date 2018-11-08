var game = {
    ball: $("#ball"),
    gamezone: $("#gamezone"),
    gameInterval: null,
    vx: Math.floor(Math.random()*11)+ 1,
    vy: Math.floor(Math.random()*11)+ 1,
    dx: 1,
    dy: 1,
    x: 250,
    y: 250,
    playGame: function() {
        console.log(game.vx, game.vy)
        game.setTimer();
    },
    setTimer: function() {
        game.gameInterval = setInterval(game.ballBounce, 30);
    },
    ballBounce: function() {
       
        
        var gamecoords = game.gamezone.offset();
        var coords = game.ball.offset();
   
        var zoneX = gamecoords["left"]+10;
        var zoneY = gamecoords["top"]+10;
        var x = coords["left"];
        var y = coords["top"];

        var newX = x + (game.dx * game.vx);
        var newY = y + (game.dy * game.vy);


        game.ball.offset({top: newY, left: newX})
  
        if (newX - zoneX >= 475) {
            game.dx = -1;
        } else if (newX - zoneX  <= 0) {
            game.dx = 1;
        }

        if (newY - zoneY >= 475) {
            game.dy = -1;
        } else if (newY - zoneY <= 0) {
            game.dy = 1;
        }

    }
}

game.playGame();