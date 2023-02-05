import { Cell } from './cell';

export class ConnectFour {
  public rows: number = 6;
  public cols: number = 7;
  public board: string[][] = [];
  public currentPlayer: string = '🔴';

  constructor() {
    for (let row = 0; row < this.rows; row++) {
      this.board[row] = [];
      for (let col = 0; col < this.cols; col++) {
        this.board[row][col] = '⚪';
      }
    }
  }

  public dropDisc(col: number): Cell | null {
    for (let row = this.rows - 1; row >= 0; row--) {
      if (this.board[row][col] === '⚪') {
        alert(`Assigning ${row} ${col} to ${this.currentPlayer}`);
        this.board[row][col] = this.currentPlayer;
        const cell: Cell = { row, col, color: this.currentPlayer };
        this.switchPlayer();
        return cell;
      }
    }
    return null;
  }

  public switchPlayer(): void {
    this.currentPlayer = this.currentPlayer === '🔴' ? '🟡' : '🔴';
  }

  public checkForWin(cell: Cell): boolean {
    const { row, col, color } = cell;
    let count = 0;

    // Check horizontal
    for (let c = col - 3; c <= col + 3; c++) {
      if (c >= 0 && c < this.cols && this.board[row][c] === color) {
        count++;
        if (count === 4) {
          return true;
        }
      } else {
        count = 0;
      }
    }

    count = 0;
    // Check vertical
    for (let r = row - 3; r <= row + 3; r++) {
      if (r >= 0 && r < this.rows && this.board[r][col] === color) {
        count++;
        if (count === 4) {
          return true;
        }
      } else {
        count = 0;
      }
    }

    count = 0;
    // Check diagonal up
    for (let r = row - 3, c = col - 3; r <= row + 3; r++, c++) {
      if (
        r >= 0 &&
        r < this.rows &&
        c >= 0 &&
        c < this.cols &&
        this.board[r][c] === color
      ) {
        count++;
        if (count === 4) {
          return true;
        }
      } else {
        count = 0;
      }
    }

    count = 0;
    // Check diagonal down
    for (let r = row + 3, c = col - 3; r >= 0; r--, c++) {
      if (
        r >= 0 &&
        r < this.rows &&
        c >= 0 &&
        c < this.cols &&
        this.board[r][c] === color
      ) {
        count++;
        if (count === 4) {
          return true;
        }
      } else {
        count = 0;
      }
    }

    return false;
  }
}
