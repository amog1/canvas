// HTML Canvas

// Canvas setup
var cnv = document.getElementById("my-canvas");
var ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 800;

// animation variables (x)
// let star1x =
// let star2x =

// sky
ctx.fillStyle = "lightblue";
ctx.fillRect(0, 0, 800, 800);

// lake
ctx.fillStyle = "blue";
ctx.fillRect(0, 620, 800, 800);

// land
ctx.fillStyle = "green";
ctx.fillRect(0, 500, 800, 120);

// big wall
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(400, 800);
ctx.lineTo(400, 0);
ctx.stroke();

// buildings 1
// wall 1
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(100, 500);
ctx.lineTo(100, 460);
ctx.stroke();

// wall 2
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(150, 500);
ctx.lineTo(150, 460);
ctx.stroke();

// door side 1
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(120, 500);
ctx.lineTo(120, 480);
ctx.stroke();

// door side 2
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(130, 500);
ctx.lineTo(130, 480);
ctx.stroke();

// door top
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(120, 480);
ctx.lineTo(130, 480);
ctx.stroke();

// house top
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(100, 460);
ctx.lineTo(150, 460);
ctx.stroke();

// house rooftop side 1
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(100, 460);
ctx.lineTo(125, 430);
ctx.stroke();

// house rooftop side 2
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(150, 460);
ctx.lineTo(125, 430);
ctx.stroke();

// window 1
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(110, 470, 6, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "black";
ctx.stroke();

// window 2
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(140, 470, 6, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "black";
ctx.stroke();

// buildings 2
// wall 1
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(500, 500);
ctx.lineTo(500, 460);
ctx.stroke();

// wall 2
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(550, 500);
ctx.lineTo(550, 460);
ctx.stroke();

// door side 1
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(520, 500);
ctx.lineTo(520, 480);
ctx.stroke();

// door side 2
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(530, 500);
ctx.lineTo(530, 480);
ctx.stroke();

// door top
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(520, 480);
ctx.lineTo(530, 480);
ctx.stroke();

// house top
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(500, 460);
ctx.lineTo(550, 460);
ctx.stroke();

// house rooftop side 1
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(500, 460);
ctx.lineTo(525, 430);
ctx.stroke();

// house rooftop side 2
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(550, 460);
ctx.lineTo(525, 430);
ctx.stroke();

// window 1
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(510, 470, 6, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "black";
ctx.stroke();

// window 2
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(540, 470, 6, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "black";
ctx.stroke();
// title 1
ctx.fillStyle = "rgb(25,4,4)";
ctx.font = "40px Arial";
ctx.fillText("Good night", 30, 580);

// title 2
ctx.fillStyle = "rgb(25,4,4)";
ctx.font = "40px Arial";
ctx.fillText("Good morning", 500, 580);

requestAnimationFrame(loop);
// fuction loop stars
function loop() {
  // stars variables
  let starsX1 = 80;
  let starsX2 = 180;
  let starsX3 = 280;
  let starsX4 = 350;
  let starY1 = 13;
  let starY2 = 35;
  let starY3 = 45;
  let starY4 = 60;

  // cloud variables
  let cloud1X = 518;
  let cloud2X = 558;
  let cloud3X = 618;
  let cloud4X = 488;
  let cloud1Y = 80;
  let cloud2Y = 40;
  let cloud3Y = 25;
  let cloud4Y = 10;

  // starsstar animation
  // x:1-500
  // y:1-1000
  // // stars
  let stars = document.getElementById("stars");
  ctx.drawImage(stars, starsX1, starY1, 35, 35);
  ctx.drawImage(stars, starsX2, starY2, 35, 35);
  ctx.drawImage(stars, starsX3, starY3, 35, 35);
  ctx.drawImage(stars, starsX4, starY4, 35, 35);

  // clouds
  let clouds = document.getElementById("cloud");
  ctx.drawImage(clouds, cloud1X, cloud1Y, 50, 50);
  ctx.drawImage(clouds, cloud2X, cloud2Y, 50, 50);
  ctx.drawImage(clouds, cloud3X, cloud3Y, 50, 50);
  ctx.drawImage(clouds, cloud4X, cloud4Y, 50, 50);

  // tree
  let tree = document.getElementById("tree");
  ctx.drawImage(tree, 320, 450, 60, 60);
  ctx.drawImage(tree, 650, 450, 60, 60);

  // moon animation
  // moon
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(100, 200, 50, 0, 2 * Math.PI);
  ctx.fill();
  ctx.strokeStyle = "black";
  ctx.stroke();

  // sun animation
  // sun

  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(500, 200, 50, 0, 2 * Math.PI);
  ctx.fill();
  ctx.strokeStyle = "white";
  ctx.stroke();

  requestAnimationFrame(loop);
}
