export interface IBoardView {
    readonly htmlElement: HTMLTableElement;

    renderGameBoard(): void;
}