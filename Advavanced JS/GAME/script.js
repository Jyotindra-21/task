let buttons = document.querySelectorAll(".box");
let winnerMsg = document.querySelector("#winner");
let newGame = document.querySelector("#newbtn");
let resetGamebtn = document.querySelector("#resetbtn");
let msgCon = document.querySelector(".msg-con");
let p1 = document.querySelector("#player1");
let p2 = document.querySelector("#player2");
let turn0 = true;
let player1 = prompt("ENTER YOUR NAME");
let player2 = prompt("ENTER YOUR NAME");
let flag = 0;
let winPats = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

p1.innerHTML = `Player  X is : <span>${player1}</span>`;
p2.innerHTML = `Player  O is : <span>${player2}</span>`;

const resetGame = () => {
  turn0 = true;
  startGame();
  msgCon.classList.add("hide");
};
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (turn0) {
      btn.innerText = "X";
      turn0 = false;
    } else {
      btn.innerText = "O";
      turn0 = true;
    }
    btn.disabled = true;
    flag++;
    checkWinner();
  });
});

const stopGame = () => {
  for (const btn of buttons) {
    btn.disabled = true;
  }
};
const startGame = () => {
  for (const btn of buttons) {
    btn.disabled = false;
    btn.innerText = "";
  }
};

const showWinner = (winner) => {
  if (winner === "X") {
    winnerMsg.innerText = `Congratulation🎉🎉🎊🎊 WINNER IS ${player1}`;
  } else {
    winnerMsg.innerText = `WINNER IS ${player2}`;
  }
  msgCon.classList.remove("hide");
  stopGame();
};

const matchDraw = (a) => {
  winnerMsg.innerText = `Sorry Match Draw ${a}`;
};

const checkWinner = () => {
  for (const pattern of winPats) {
    let pos1Val = buttons[pattern[0]].innerText;
    let pos2Val = buttons[pattern[1]].innerText;
    let pos3Val = buttons[pattern[2]].innerText;
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(buttons[pattern[0]], buttons[pattern[1]], buttons[pattern[2]]);
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      }
    }
  }
};
newGame.addEventListener("click", resetGame);
resetGamebtn.addEventListener("click", resetGame);
