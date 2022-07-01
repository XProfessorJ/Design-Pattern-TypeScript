abstract class Game {
  abstract chooseCharactor(): void;
  abstract buyWeapon(): void;
  abstract startGame(): void;
  runGame(): void {
    this.chooseCharactor();
    this.buyWeapon();
    this.startGame();
  }
}
export class LOL extends Game {
  chooseCharactor(): void {
    console.log('LOL', 'chooseCharactor');
  }
  buyWeapon(): void {
    console.log('LOL', 'buyWeapon');
  }
  startGame(): void {
    console.log('LOL', 'startGame');
  }
}
