const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// ctx.fillStyle = 'red';
// ctx.fillRect(10, 10, 100, 100);

// ctx.fillStyle = 'orange';
// ctx.fillRect(200, 200, 100, 100);

// ctx.lineWidth = 5;
// ctx.strokeStyle = 'purple';
// ctx.strokeRect(200, 200, 50, 50);

// ctx.beginPath()
// ctx.lineWidth = 10;
// ctx.fillStyle = 'yellow';
// ctx.strokeStyle = 'orange';
// ctx.arc(canvas.width / 2, canvas.height / 2, 50, 0, Math.PI * 2); // defino forma
// ctx.fill(); // relleno
// ctx.stroke(); // pongo borde
// ctx.closePath()

// ctx.clearRect(0, 0, 1000, 600); // limpio el canvas


const sun = {
  x: 100,
  y: 100,
  width: 200,
  height: 200
}

const car = {
  x: 100,
  y: 490,
  width: 150,
  height: 150,
}

const trees = [
  {
    x: 200,
    y: 500,
    width: 100,
    height: 100
  },
  {
    x: 400,
    y: 500,
    width: 100,
    height: 100
  },
  {
    x: 600,
    y: 500,
    width: 100,
    height: 100
  },
  {
    x: 800,
    y: 500,
    width: 100,
    height: 100
  }
]

const sunImg = new Image();
sunImg.src = './img/sun.png';

const treeImg = new Image();
treeImg.src = './img/tree.png';

const carImg = new Image();
carImg.src = './img/car.png';

function drawElements() {
  ctx.drawImage(sunImg, sun.x, sun.y, sun.width, sun.height);
  trees.forEach(tree => {
    ctx.drawImage(treeImg, tree.x, tree.y, tree.width, tree.height)
  })
  ctx.drawImage(carImg, car.x, car.y, car.width, car.height);
}

window.onload = drawElements;

function moveCar() {
  ctx.clearRect(0, 0, 1000, 600);
  car.x = car.x + 10;
  if (car.x > 1000) {
    car.x = 0 - car.width;
  }
  sun.y = sun.y - 10;
  if (sun.y < 0) {
    sun.y = 600 - sun.width;
  }
  drawElements();
}

setTimeout(() => {
  setInterval(moveCar, 100);
}, 2000);










