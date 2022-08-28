import 'styles/app.css';
import './vendor';
import './interfaces';
import { FigureType, IFigure } from './interfaces';
import { db } from './fb';
import { collection, getDocs, addDoc, doc, onSnapshot, updateDoc, serverTimestamp } from 'firebase/firestore';

// try {
//   const docRef = await addDoc(collection(db, 'users'), {
//     first: 'Ada',
//     last: 'Lovelace',
//     born: 1815
//   });
//   console.log('Document written with ID: ', docRef.id);
// } catch (e) {
//   console.error('Error adding document: ', e);
// }

// const querySnapshot = await getDocs(collection(db, 'users'));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });

const CANVAS_WIDTH: number = 300;
const CANVAS_HEIGHT: number = 300;
const FIGURE_WIDTH: number = 10;
const FIGURE_HEIGHT: number = 10;
const FIGURES_COUNT: number = 5;
const FPS: number = 10;

const figureImages = {
  ROCK: '🪨',
  PAPER: '🧻',
  SCISSORS: '✂️'
};

const figureDirections = {
  0: 'up',
  1: 'down',
  2: 'right',
  3: 'left'
};

let figures: IFigure[] = [];
let interval: number;

const canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvas.getContext('2d');

const rockScore = document.getElementById('rock-score') as HTMLSpanElement;
const paperScore = document.getElementById('paper-score') as HTMLSpanElement;
const scissorsScore = document.getElementById('scissors-score') as HTMLSpanElement;

const rockTotal = document.getElementById('rock-total') as HTMLSpanElement;
const paperTotal = document.getElementById('paper-total') as HTMLSpanElement;
const scissorsTotal = document.getElementById('scissors-total') as HTMLSpanElement;
const totalSims = document.getElementById('total-sims') as HTMLSpanElement;
const lastSim = document.getElementById('last-sim') as HTMLSpanElement;

const startBtn = document.querySelector('.btn-start') as HTMLButtonElement;
const pauseBtn = document.querySelector('.btn-pause') as HTMLButtonElement;
const newSimBtn = document.querySelector('.btn-newsim') as HTMLButtonElement;

const count = document.getElementById('count') as HTMLInputElement;
const speed = document.getElementById('speed') as HTMLInputElement;

count.value = FIGURES_COUNT.toString();
speed.value = FPS.toString();

pauseBtn.disabled = true;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

onSnapshot(doc(db, 'sim', 'score'), (doc) => {
  rockTotal.textContent = doc.data().rock;
  paperTotal.textContent = doc.data().paper;
  scissorsTotal.textContent = doc.data().scissors;
  totalSims.textContent = doc.data().totalSims;
  lastSim.textContent = doc.data().timestamp.toDate().toLocaleTimeString('ru-RU');
});

const scoreRef = doc(db, 'sim', 'score');

const updateFS = async (figure: string, count: number) => {
  await updateDoc(scoreRef, {
    [figure]: count,
    totalSims: +totalSims.textContent + 1,
    timestamp: serverTimestamp()
  });
};

const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getFloorCoordinateX = (): number => {
  return Math.floor(getRandomInt(0, CANVAS_WIDTH) / 10) * 10;
};

const getFloorCoordinateY = (): number => {
  return Math.floor(getRandomInt(0, CANVAS_HEIGHT) / 10) * 10;
};

const clearCanvas = (): void => {
  ctx.clearRect(0, 0, canvas.height, canvas.width);
};

const resetButtons = (): void => {
  startBtn.disabled = true;
  pauseBtn.disabled = true;
  count.disabled = false;
  speed.disabled = false;
};

const resetScore = (): void => {
  rockScore.textContent = 0 + '';
  paperScore.textContent = 0 + '';
  scissorsScore.textContent = 0 + '';
};

const changeScore = (typeInc: FigureType, typeDec: FigureType = null): void => {
  switch (typeInc) {
    case 'ROCK':
      rockScore.textContent = (+rockScore.textContent + 1).toString();
      break;
    case 'PAPER':
      paperScore.textContent = (+paperScore.textContent + 1).toString();
      break;
    case 'SCISSORS':
      scissorsScore.textContent = (+scissorsScore.textContent + 1).toString();
      break;

    default:
      break;
  }

  switch (typeDec) {
    case 'ROCK':
      rockScore.textContent = (+rockScore.textContent - 1).toString();
      break;
    case 'PAPER':
      paperScore.textContent = (+paperScore.textContent - 1).toString();
      break;
    case 'SCISSORS':
      scissorsScore.textContent = (+scissorsScore.textContent - 1).toString();
      break;

    default:
      break;
  }
};

const placeFigures = (): void => {
  if (figures.length < 1) {
    for (let i = 0; i < +count.value; i++) {
      figures.push(new Figure('ROCK', getFloorCoordinateX(), getFloorCoordinateY()));
      figures.push(new Figure('PAPER', getFloorCoordinateX(), getFloorCoordinateY()));
      figures.push(new Figure('SCISSORS', getFloorCoordinateX(), getFloorCoordinateY()));

      changeScore('ROCK');
      changeScore('PAPER');
      changeScore('SCISSORS');
    }

    figures.forEach((f) => {
      f.render();
    });
  }
};

const checkSimOver = (): void => {
  const totalCount = +count.value * 3;
  const rock = +rockScore.textContent;
  const paper = +paperScore.textContent;
  const scissors = +scissorsScore.textContent;

  if (rock === totalCount) {
    clearInterval(interval);
    updateFS('rock', +rockTotal.textContent + 1);
    resetButtons();
    alert('Sim over, ROCK WIN!');
  }

  if (paper === totalCount) {
    clearInterval(interval);
    updateFS('paper', +paperTotal.textContent + 1);
    resetButtons();
    alert('Sim over, PAPER WIN!');
  }

  if (scissors === totalCount) {
    clearInterval(interval);
    updateFS('scissors', +scissorsTotal.textContent + 1);
    resetButtons();
    alert('Sim over, SCISSORS WIN!');
  }
};

const start = (): void => {
  placeFigures();
  count.disabled = true;
  speed.disabled = true;

  interval = window.setInterval(() => {
    clearCanvas();

    figures.forEach((f) => {
      let direction: number = getRandomInt(0, 3);

      f.checkCollision();
      f.move(figureDirections[direction]);
      f.render();
    });
    checkSimOver();
  }, 1000 / +speed.value);

  startBtn.disabled = true;
  pauseBtn.disabled = false;
};

const pause = (): void => {
  clearInterval(interval);
  speed.disabled = false;
  startBtn.disabled = false;
  pauseBtn.disabled = true;
};

const newSim = (): void => {
  pause();
  clearCanvas();
  figures = [];
  resetScore();
  count.disabled = false;
  placeFigures();
};

startBtn.addEventListener('click', start);
pauseBtn.addEventListener('click', pause);
newSimBtn.addEventListener('click', newSim);

class Figure implements IFigure {
  type: FigureType;
  coordinateX: number;
  coordinateY: number;
  newCoordinateX: number;
  newCoordinateY: number;
  width: number = FIGURE_WIDTH;
  height: number = FIGURE_HEIGHT;

  constructor(figureType: FigureType, coordinateX: number, coordinateY: number) {
    this.type = figureType;
    this.coordinateX = coordinateX;
    this.coordinateY = coordinateY;
    this.newCoordinateX = this.coordinateX;
    this.newCoordinateY = this.coordinateY;
  }

  render() {
    ctx.fillText(figureImages[this.type], this.coordinateX, this.coordinateY, this.width);
  }

  clear() {
    ctx.clearRect(this.coordinateX, this.coordinateY, this.width, this.height);
  }

  move(direction: string) {
    switch (direction) {
      case 'up':
        this.moveUp();
        break;
      case 'down':
        this.moveDown();
        break;
      case 'right':
        this.moveRight();
        break;
      case 'left':
        this.moveLeft();
        break;

      default:
        break;
    }
  }

  checkCollision() {
    figures.forEach((f) => {
      if (this.checkCollisionWithFigure(f)) {
        this.compareTypes(f);
      }
    });
  }

  checkCollisionWithFigure(f: IFigure) {
    return (
      this.newCoordinateX < f.coordinateX + f.width &&
      this.newCoordinateX + this.width > f.coordinateX &&
      this.newCoordinateY < f.coordinateY + f.height &&
      this.newCoordinateY + this.height > f.coordinateY
    );
  }

  compareTypes(f: IFigure) {
    if ((this.type === 'ROCK' && f.type === 'SCISSORS') || (this.type === 'SCISSORS' && f.type === 'ROCK')) {
      this.type = f.type = 'ROCK';
      changeScore('ROCK', 'SCISSORS');
      return;
    }
    if ((this.type === 'ROCK' && f.type === 'PAPER') || (this.type === 'PAPER' && f.type === 'ROCK')) {
      this.type = f.type = 'PAPER';
      changeScore('PAPER', 'ROCK');
      return;
    }
    if ((this.type === 'PAPER' && f.type === 'SCISSORS') || (this.type === 'SCISSORS' && f.type === 'PAPER')) {
      this.type = f.type = 'SCISSORS';
      changeScore('SCISSORS', 'PAPER');
      return;
    }
  }

  moveUp() {
    if (this.checkUp()) {
      this.newCoordinateY = this.coordinateY - this.height;
      this.coordinateY -= this.width;
    }
  }

  moveDown() {
    if (this.checkDown()) {
      this.newCoordinateY = this.coordinateY + this.height;
      this.coordinateY += this.height;
    }
  }

  moveRight() {
    if (this.checkRight()) {
      this.newCoordinateX = this.coordinateX + this.width;
      this.coordinateX += this.width;
    }
  }

  moveLeft() {
    if (this.checkLeft()) {
      this.newCoordinateX = this.coordinateX - this.width;
      this.coordinateX -= this.width;
    }
  }

  checkUp() {
    return this.coordinateY - this.width > 0;
  }

  checkDown() {
    return this.coordinateY + this.height <= CANVAS_HEIGHT;
  }

  checkRight() {
    return this.coordinateX + this.width < CANVAS_WIDTH;
  }

  checkLeft() {
    return this.coordinateX - this.width >= 0;
  }
}

placeFigures();
