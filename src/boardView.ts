import { ConnectFour } from './connectFour';

export class BoardView {
  private connectFour: ConnectFour;
  private table: HTMLTableElement;

  constructor(connectFour: ConnectFour) {
    this.connectFour = connectFour;
    this.table = document.createElement('table');
    this.render();
  }

  render(): void {
    this.table.innerHTML = '';
    for (let row = 0; row < this.connectFour.rows; row++) {
      const tr = document.createElement('tr');
      for (let col = 0; col < this.connectFour.cols; col++) {
        const td = document.createElement('td');
        td.innerText = this.connectFour.board[row][col];
        tr.appendChild(td);
      }
      this.table.appendChild(tr);
    }
  }

  get element(): HTMLTableElement {
    return this.table;
  }
}
