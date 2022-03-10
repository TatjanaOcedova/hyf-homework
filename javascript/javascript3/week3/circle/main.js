//Paint a circle to a canvas element
// let c = document.getElementById("canvas");
// let ctx = c.getContext("2d");
// ctx.beginPath();
// ctx.arc(100, 75, 50, 0, 2 * Math.PI);
// ctx.stroke();
// // ctx.fillStyle = "blue";
// ctx.fill();

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }
  draw() {
    const x = this.x;
    const y = this.y;
    const radius = this.r;
    ctx.beginPath();
    ctx.arc(x, y, radius, this.startAngle, this.endAngle * Math.PI, false);
    ctx.stroke();
    ctx.fillStyle = this.fillColor;
    ctx.fill();
  }
}
// const c1 = new Circle(50, 50, 20, 0, 2 * Math.PI, "#000000");
// c1.draw();
// const c2 = new Circle(300, 300, 150, 20, 10 * Math.PI, "blue");
// c2.draw();

// to show random circles
function randomCircles() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const x = Math.ceil(Math.random() * canvas.width);
  const y = Math.ceil(Math.random() * canvas.height);
  const r = Math.ceil(Math.random() * 150);
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  const c3 = new Circle(x, y, r, 0, 2 * Math.PI, randomColor);
  c3.draw();
}
// setInterval(randomCircles, 100);

//Follow the mouse
document.addEventListener("mousemove", mouseMove);
function mouseMove(e) {
  mouseXCoord = e.clientX;
  mouseYCoord = e.clientY;
}

let mouseXCoord = 0;
let mouseYCoord = 0;

function onMouseMove() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const x = mouseXCoord;
  const y = mouseYCoord;
  const r = Math.ceil(Math.random() * 150);
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  const c4 = new Circle(x, y, r, 0, 2 * Math.PI, randomColor);
  c4.draw();
}
setInterval(onMouseMove, 100);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  makeMove.draw();
});
