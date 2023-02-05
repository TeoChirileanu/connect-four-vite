import './style.css';
import {ConnectFour} from "./Implementations/ConnectFour";
import {BoardView} from "./Implementations/BoardView";
import {ConnectFourGame} from "./Implementations/ConnectFourGame";
import {IGame} from "./Interfaces/IGame";
import {IConnectFour} from "./Interfaces/IConnectFour";
import {IBoardView} from "./Interfaces/IBoardView";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="card" >
      <button id="startGame" type="button">Start Playing ConnectFour!</button>
      <div id="gameBoard"></div>
    </div>
  </div>
`;

const connectFour: IConnectFour = new ConnectFour();
const boardView: IBoardView = new BoardView(connectFour);

document.querySelector<HTMLButtonElement>('#startGame')!.addEventListener('click', () => {
    const game: IGame = new ConnectFourGame(connectFour, boardView);
    game.start();
})
