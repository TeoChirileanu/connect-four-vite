import { BoardView } from './boardView';
import { ConnectFour } from './ConnectFour';

export class Game {
  private connectFour: ConnectFour;
  private boardView: BoardView;

  constructor(connectFour: ConnectFour, boardView: BoardView) {
    this.connectFour = connectFour;
    this.boardView = boardView;
  }

  public start(): void {
    const boardPlaceHolder =
      document.querySelector<HTMLDivElement>('#board-placeholder');
    boardPlaceHolder!.replaceWith(this.boardView.element);
    this.boardView.render();
    this.boardView.element.addEventListener('click', (event) => {
      const target = event.target as HTMLTableCellElement;
      if (target.tagName !== 'TD') return;
      const col = target.cellIndex;
      const result = this.connectFour.dropDisc(col);
      if (result) {
        this.boardView.render();
        if (this.connectFour.checkForWin(result))
          alert(`Player ${result.color} wins!`);
      } else {
        alert('Column is full, try another one');
      }
    });
  }
}
