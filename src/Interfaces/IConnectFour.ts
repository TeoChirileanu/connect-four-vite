import {IGameBoardCell} from "./IGameBoardCell";

export interface IConnectFour {
    readonly gameBoardAsArray: string[][];
    readonly columns: number;
    readonly rows: number;

    dropCoin(columnIndex: number): IGameBoardCell | null;

    switchPlayer(): void;

    checkWinningConditions(cell: IGameBoardCell): boolean;
}