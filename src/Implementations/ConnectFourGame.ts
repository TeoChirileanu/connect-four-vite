import {IGame} from "../Interfaces/IGame";
import {IConnectFour} from "../Interfaces/IConnectFour";
import {IBoardView} from "../Interfaces/IBoardView";

export class ConnectFourGame implements IGame {
    private connectFour: IConnectFour;
    private boardView: IBoardView;

    constructor(connectFour: IConnectFour, boardView: IBoardView) {
        this.connectFour = connectFour;
        this.boardView = boardView;
    }

    public start(): void {
        const gameBoard = document.querySelector<HTMLDivElement>('#gameBoard');
        gameBoard!.replaceWith(this.boardView.htmlElement);
        this.boardView.renderGameBoard();
        this.boardView.htmlElement.addEventListener('click', this.OnBoardViewCellClicked());
    }

    private OnBoardViewCellClicked() {
        return (e: MouseEvent) => {
            const cellElement = e.target as HTMLTableCellElement;
            // only consider table row (tr) elements
            if (cellElement.tagName !== 'TD') return;
            this.placeCoinAndCheckWinningConditions(cellElement);
        };
    }

    private placeCoinAndCheckWinningConditions(cellElement: HTMLTableCellElement) {
        const result = this.connectFour.dropCoin(cellElement.cellIndex);
        this.boardView.renderGameBoard();

        if (!result) {
            alert('Column is full, try another one');
            return;
        }
        if (this.connectFour.checkWinningConditions(result)) {
            alert(`Player ${result.color} wins!`);
        }
    }
}
