import {IGameBoardCell} from '../Interfaces/IGameBoardCell';
import {IConnectFour} from "../Interfaces/IConnectFour";

export class ConnectFour implements IConnectFour {
    private readonly _rows: number = 6;
    private readonly _columns: number = 7;
    private readonly _gameBoardAsArray: string[][] = [];

    private currentPlayerSymbol: string = '🔴';

    constructor() {
        this.initializeGameBoard();
    }

    private initializeGameBoard(): void {
        for (let row = 0; row < this._rows; row++) {
            this._gameBoardAsArray[row] = [];
            for (let col = 0; col < this._columns; col++) {
                this._gameBoardAsArray[row][col] = '⚪';
            }
        }
    }

    dropCoin(columnIndex: number): IGameBoardCell | null {
        for (let rowIndex = this._rows - 1; rowIndex >= 0; rowIndex--) {
            let currentBoardCellIsUninitialized = this._gameBoardAsArray[rowIndex][columnIndex] === '⚪';
            if (currentBoardCellIsUninitialized) {
                // assign current player symbol to current board cell
                this._gameBoardAsArray[rowIndex][columnIndex] = this.currentPlayerSymbol;
                const currentGameBoardCell: IGameBoardCell = {
                    row: rowIndex,
                    column: columnIndex,
                    color: this.currentPlayerSymbol
                };
                this.switchPlayer();
                return currentGameBoardCell;
            }
        }
        // if the iteration is finished, the column is full
        return null;
    }

    switchPlayer(): void {
        this.currentPlayerSymbol = this.currentPlayerSymbol === '🔴' ? '🟡' : '🔴';
    }

    checkWinningConditions(cell: IGameBoardCell): boolean {
        const {row, column, color} = cell;
        let count = 0;

        // Check horizontal
        for (let c = column - 3; c <= column + 3; c++) {
            if (c >= 0 && c < this._columns && this._gameBoardAsArray[row][c] === color) {
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
            if (r >= 0 && r < this._rows && this._gameBoardAsArray[r][column] === color) {
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
        for (let r = row - 3, c = column - 3; r <= row + 3; r++, c++) {
            if (
                r >= 0 &&
                r < this._rows &&
                c >= 0 &&
                c < this._columns &&
                this._gameBoardAsArray[r][c] === color
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
        for (let r = row + 3, c = column - 3; r >= 0; r--, c++) {
            if (
                r >= 0 &&
                r < this._rows &&
                c >= 0 &&
                c < this._columns &&
                this._gameBoardAsArray[r][c] === color
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

    get gameBoardAsArray(): string[][] {
        return this._gameBoardAsArray;
    }

    get columns(): number {
        return this._columns;
    }

    get rows(): number {
        return this._rows;
    }
}
