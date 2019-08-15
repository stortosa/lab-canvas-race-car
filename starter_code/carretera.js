
/** @type HTMLCanvasElement */
var canvasDOMEl = document.querySelector("#race-game");

/** @type CanvasRenderingContext2D */
var ctx = canvasDOMEl.getContext("2d")

var w = 400
var h = 700


var w2 = w / 2;
var h2 = h / 2;
var dashedLineY = 800

///posición de Delorean
var deloreanWidth = w2 - 30
var deloreanHeight = h - 80

function boxCanvas() {

  canvasDOMEl.setAttribute("height", h)
  canvasDOMEl.setAttribute("width", w);

}

function drawGreen() {
  ctx.fillStyle = "green";
  ctx.beginPath()
  ctx.rect(0, 0, w, h)
  ctx.fill();
  ctx.closePath();
}

function drawRectWhite() {

  ctx.fillStyle = "white";
  ctx.beginPath()
  ctx.rect(+30, 0, w - 60, h)
  ctx.fill();
  ctx.closePath();

}

function drawGrey() {
  ctx.fillStyle = "grey";
  ctx.beginPath()
  ctx.rect(+40, 0, w - 80, h)
  ctx.fill();
  ctx.closePath();

}
var dashedLineY = 700
function drawMiniWhite() {

  ctx.beginPath()
  ctx.lineWidth = 4
  ctx.strokeStyle = "#f2f2f2"
  ctx.setLineDash([50, 10])
  ctx.moveTo(w / 2, dashedLineY)
  ctx.lineTo(w / 2, 0)
  ctx.stroke()
}

function clearScreen() {
  ctx.clearRect(0, 0, w, h);
}

function drawBrownThing() {

  ctx.fillStyle = `blue`
  ctx.beginPath();
  ctx.rect(400, i + 200, 500, 10);
  ctx.fill();
  ctx.closePath();
  ctx.restore()

}
function drawBrownThing2() {

  ctx.fillStyle = `brown`
  ctx.beginPath();
  ctx.rect(120, i, 100, 50);
  ctx.fill();
  ctx.closePath();
  ctx.restore()

}
function drawBrownThing3() {

  ctx.fillStyle = `black`
  ctx.beginPath();
  ctx.rect(170, i + 150, 200, 50);
  ctx.fill();
  ctx.closePath();
  ctx.restore()

}

///////////////////////////////////////////
///////Parte Delorean
var imgDelorean = new Image();
imgDelorean.src = './images/car.png'; ///./images/DeloreanR.png

imgDelorean.onload = function () {
  paintDelorean()
}
var deloreanSize = 60

function paintDelorean() {


  clearScreen()


  boxCanvas()
  drawGreen()
  drawRectWhite()
  drawGrey()
  drawMiniWhite()
  drawBrownThing()
  drawBrownThing2()
  drawBrownThing3()
  ctx.drawImage(imgDelorean, deloreanWidth, deloreanHeight, deloreanSize, deloreanSize);

}

///////////////////////////////////////////////////

window.onkeydown = function (e) {
  console.log(e.keyCode)

  const desplazamiento = 20


  switch (e.keyCode) {
    case 39: //goes to the right
      deloreanWidth += desplazamiento;
      if (deloreanWidth > 320)
        deloreanWidth = 320;

      break;

    case 37: //goes to the left
      deloreanWidth -= desplazamiento;
      if (deloreanWidth < 50)
        deloreanWidth = desplazamiento;
      break;

  }


  paintDelorean()

}
paintDelorean()

//let setIntervalID;

function repaintingMiniWhite() {
  setInterval(() => {

    dashedLineY++
    paintDelorean()
  }, 10)
}


repaintingMiniWhite()
//createObstacle()

function drawObs() {
  let length = 50
  let ancho = 50

  for (var i = 0; i < h; i += 10) {

    ctx.fillStyle = `#880000`
    ctx.save()
    ctx.rotate(i)
    ctx.beginPath();

    ctx.rect(50, i, length, ancho);
    ctx.fill();
    ctx.closePath();
    ctx.restore()

  }
}


