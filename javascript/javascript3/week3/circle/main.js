//Paint a circle to a canvas element
// let c = document.getElementById("canvas");
// let ctx = c.getContext("2d");
// ctx.beginPath();
// ctx.arc(100, 75, 50, 0, 2 * Math.PI);
// ctx.stroke();
// // ctx.fillStyle = "blue";
// ctx.fill();

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
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext("2d");
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
const c1 = new Circle(50, 50, 20, 0, 2 * Math.PI, "#000000");
c1.draw();
const c2 = new Circle(300, 300, 150, 20, 10 * Math.PI, "blue");
c2.draw();

//Follow the mouse

let myCircle = document.getElementById("canvas2");
const onMouseMove = (e) => {
  myCircle.style.left = e.pageX + "px";
  myCircle.style.top = e.pageY + "px";
  setInterval(() => {
    let makeMove = new NewCircle();
    makeMove.draw();
  }, 100); //they move too quick
};
document.addEventListener("mousemove", onMouseMove);
class NewCircle extends Circle {
  draw() {
    const canvas = document.getElementById("canvas2");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");
    const x = Math.ceil(Math.random() * canvas.width);
    const y = Math.ceil(Math.random() * canvas.height);
    const radius = Math.ceil(Math.random() * 150);
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#" + Math.floor(Math.random() * 16777215).toString(16);
    ctx.fill();
  }
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  makeMove.draw();
});

// setTimeout(() => {
//   let makeMove = new NewCircle();
//   makeMove.draw();
// }, 1000);
