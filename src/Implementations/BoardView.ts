import {IBoardView} from "../Interfaces/IBoardView";
import {IConnectFour} from "../Interfaces/IConnectFour";

export class BoardView implements IBoardView {
  private connectFour: IConnectFour;
  private readonly gameBoard: HTMLTableElement = document.createElement('table');

  constructor(connectFour: IConnectFour) {
    this.connectFour = connectFour;
    this.renderGameBoard();
  }

  renderGameBoard(): void {
    this.gameBoard.innerHTML = '';
    for (let row = 0; row < this.connectFour.rows; row++) {
      const gameBoardRow = document.createElement('tr');
      for (let column = 0; column < this.connectFour.columns; column++) {
        const gameBoardColumn = document.createElement('td');
        gameBoardColumn.innerText = this.connectFour.gameBoardAsArray[row][column];
        gameBoardRow.appendChild(gameBoardColumn);
      }
      this.gameBoard.appendChild(gameBoardRow);
    }
  }

  get htmlElement(): HTMLTableElement {
    return this.gameBoard;
  }
}
