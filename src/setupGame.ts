import { BoardView } from "./boardView";
import { ConnectFour } from "./connectFour";
import { Game } from "./game";

export function setupGame(button: HTMLButtonElement): void {
  const connectFour = new ConnectFour();
  const boardView = new BoardView(connectFour);

  button.addEventListener('click', () => {
    const game = new Game(connectFour, boardView);
    game.start();
  })
}
