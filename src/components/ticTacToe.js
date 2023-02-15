const human = 'X';
const bot = 'O';

export class TicTacToe {
  constructor(game, result, boardSize, template) {
    this._size = boardSize;
    this._game = game;
    this._result = result;
    this._template = template;
    this._turn = 0;
    this._cellList = [];
    this._boardArr = [];
    console.log(this._result)
  }

  _createView() {
    for (let i = 0; i < this._size; i++) {
      this._cell = this._template.querySelector('.game__cell').cloneNode(true);
      this._cell.setAttribute('data-cell', i);
      this._game.appendChild(this._cell);
      this._cellList.push(this._cell);
    }
  }

  _addEventListeners() {
    this._cells = Array.from(document.querySelectorAll('.game__cell'))
    this._cells.forEach((cell) => {
      cell.addEventListener('click', this._play)
    })
  }

  _removeEventListeners() {
    this._cells.forEach((cell) => {
      cell.removeEventListener('click', this._play)
    })
  }

  _play = (e) => {
    const item = e.target.getAttribute('data-cell');
    e.target.removeEventListener('click', this._play);
    this._boardArr[item] = human;
    this._cellList[item].innerHTML = `${human}`;
    this._turn = this._turn + 1;

    if (this._checkWinner(this._boardArr, human)) {
      this._result.textContent = 'You WIN!';
      this._result.classList.add('game__result_type_active');
      this._removeEventListeners()
      return
    }
    if (this._turn === 9) {
      this._result.textContent = 'WOW! DRAW!'
      return
    }
    this._bot();
  }

  _bot() {
    this._emptyCellArr = [];
    for (let i = 0; i < this._size; i++) {
      if (typeof(this._boardArr[i]) === "number") {
        this._emptyCellArr.push(i)
      }
    }
    const botCell = this._emptyCellArr[Math.floor(Math.random() * this._emptyCellArr.length)];
    this._boardArr[botCell] = bot;
    this._cellList[botCell].innerHTML = `${bot}`;
    this._turn = this._turn + 1;
    this._cells[botCell].removeEventListener('click', this._play)

    if (this._checkWinner(this._boardArr, bot)) {
      this._result.textContent = 'You lose..';
      this._result.classList.add('game__result_type_active');
      this._removeEventListeners();
      return
    }
  }

  _checkWinner(board, player) {
    for (let i = 0; i <= 6; i+= 3) {
      if (board[i] === player && board[i + 1] === player && board[i + 2] === player)
      return true
    }
    for (let i = 0; i < 3; i++) {
      if (board[i] === player && board[i + 3] === player && board[i + 6] === player)
      return true
    }
    if (board[0] === player && board[4] === player && board[8] === player ||
        board[2] === player && board[4] === player && board[6] === player)
      return true
  }

  startGame() {
    this._boardArr = Array.from(Array(9).keys());
    this._cellList = [];
    this._game.innerHTML = '';
    this._turn = 0;
    this._result.classList.remove('game__result_type_active');
    this._createView();
    this._addEventListeners();
  }
}
