export type FigureType = 'ROCK' | 'PAPER' | 'SCISSORS';

export interface IFigure {
  type: FigureType;
  coordinateX: number;
  coordinateY: number;
  width: number;
  height: number;

  render: () => void;
  clear: () => void;
  move: (direction: string) => void;
  checkCollision: () => void;
}
