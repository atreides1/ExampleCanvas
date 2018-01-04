var canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");


window.addEventListener('resize', resizeCanvas, false);

function drawSquares(x, y)
{
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(x, y, 10, 10);
}

function resizeCanvas()
{

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        for (var i = 0; i < 5; i++)
        {
          for (var j = 0; j < 5; j++)
          {
            drawSquares(i * 20, j * 20);
          };
        };
}
resizeCanvas();
