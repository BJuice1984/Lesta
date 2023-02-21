const human = 'X';
const bot = 'O';

export class TicTacToe {
  constructor(game, result, boardSize, template) {
    this._size = boardSize;
    this._game = game;
    this._result = result;
    this._template = template;
    this._turn = 0;
    this._stopGame = false;
    this._cellList = [];
    this._boardArr = [];
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
    this._cellList[item].textContent = `${human}`;
    this._turn = this._turn + 1;
    this._checkWinner(this._boardArr, human)

    if (this._stopGame) {
      this._result.textContent = 'You WIN!';
      this._result.classList.add('game__result_type_active');
      this._removeEventListeners()
      return
    }
    if (this._turn === 9) {
      this._result.textContent = 'WOW! DRAW!';
      this._result.classList.add('game__result_type_active');
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
    this._cellList[botCell].textContent = `${bot}`;
    this._turn = this._turn + 1;
    this._cells[botCell].removeEventListener('click', this._play);
    this._checkWinner(this._boardArr, bot)

    if (this._stopGame) {
      this._result.textContent = 'You lose..';
      this._result.classList.add('game__result_type_active');
      this._removeEventListeners();
      return
    }
  }

  _checkWinner(board, player) {
    for (let i = 0; i <= 6; i+= 3) {
      if (board[i] === player && board[i + 1] === player && board[i + 2] === player) {
        this._stopGame = true;
        this._highlight(i, i + 1, i + 2, player);
        return
      }
    }
    for (let i = 0; i < 3; i++) {
      if (board[i] === player && board[i + 3] === player && board[i + 6] === player) {
        this._stopGame = true;
        this._highlight(i, i + 3, i + 6, player);
        return
      }
    }
    if (board[0] === player && board[4] === player && board[8] === player) {
      this._stopGame = true;
      this._highlight(0, 4, 8, player)
      return
    }
    if (board[2] === player && board[4] === player && board[6] === player) {
      this._stopGame = true;
      this._highlight(2, 4, 6, player)
      return
    }
  }

  _highlight(c1, c2, c3, player) {
    player === 'X' ? (
      this._cellList[c1].classList.add('game__cell_type_human-win'),
      this._cellList[c2].classList.add('game__cell_type_human-win'),
      this._cellList[c3].classList.add('game__cell_type_human-win')
    ) : (
      this._cellList[c1].classList.add('game__cell_type_bot-win'),
      this._cellList[c2].classList.add('game__cell_type_bot-win'),
      this._cellList[c3].classList.add('game__cell_type_bot-win')
    )
  }

  startGame() {
    this._boardArr = Array.from(Array(9).keys());
    this._cellList = [];
    this._game.innerHTML = '';
    this._turn = 0;
    this._stopGame = false;
    this._result.classList.remove('game__result_type_active');
    this._createView();
    this._addEventListeners();
  }
}
