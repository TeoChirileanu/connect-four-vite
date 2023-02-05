import { setupGame } from './setupGame';
import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="card" >
      <button id="game" type="button">Start Playing ConnectFour!</button>
      <div id="board-placeholder"></div>
    </div>
  </div>
`;

setupGame(document.querySelector<HTMLButtonElement>('#game')!);
