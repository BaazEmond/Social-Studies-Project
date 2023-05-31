// Social Studies Project by: Baaz

//Add Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

// Set up Canvas and Graphics Content
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let ball = {
  x: 375,
  y: 275,
  w: 50,
  h: 50,
  xSpeed: -3,
  ySpeed: 3.5,
};

let playerPaddle = {
  x: 0,
  y: 200,
  w: 25,
  h: 200,
  ySpeed: 3,
};

function btnClicked() {
  //Main Program Loop
  requestAnimationFrame(loop);
  document.getElementById("goal-out").innerHTML = "";

  function loop() {
    // Logic
    if (ball.x >= 750) {
      document.getElementById("goal-out").innerHTML = "GOAL!";
    }

    if (ball.x <= 0) {
      document.getElementById("goal-out").innerHTML =
        "Sorry.  Better luck next time!";
    }

    if (ball.y >= 550) {
      ball.ySpeed = ball.ySpeed * -1;
    }

    if (ball.y <= 0) {
      ball.ySpeed = ball.ySpeed * -1;
    }
    // Drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Move Ball by xSpeed and ySpeed
    ball.x += ball.xSpeed;
    ball.y += ball.ySpeed;

    // Move Player Paddle by ySpeed
    playerPaddle.y += playerPaddle.ySpeed;

    // Draw Ball
    ctx.fillStyle = "white";
    ctx.fillRect(ball.x, ball.y, ball.w, ball.h);

    //Draw Paddle
    ctx.fillStyle = "white";
    ctx.fillRect(
      playerPaddle.x,
      playerPaddle.y,
      playerPaddle.w,
      playerPaddle.h
    );

    // Request another Animation Frame
    requestAnimationFrame(loop);
  }
}
