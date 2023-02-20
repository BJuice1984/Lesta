import './index.css';
import { TicTacToe } from "../components/TicTacToe.js";

const game = document.getElementById('game');
const result = document.getElementById('result');
const resetBtn = document.getElementById('reset');
const boardSize = 9;
const template = document.querySelector('.template').content;

const ticTacToe = new TicTacToe(game, result, boardSize, template);

ticTacToe.startGame();
resetBtn.addEventListener("click", () => ticTacToe.startGame());
