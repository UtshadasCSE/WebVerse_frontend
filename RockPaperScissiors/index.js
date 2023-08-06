// let rockBtn = document.getElementById("rockBtn");
// let scissorsBtn = document.getElementById("scissorsBtn");
// let paperBtn = document.getElementById("paperBtn");
// let result = document.getElementById("result");
// let computerChoice = parseInt(Math.floor(Math.random() * 3) + 1);

// rockBtn.addEventListener("click", () => {
//   switch (computerChoice) {
//     case 1:
//       result.innerHTML = `Match Draw!! >computer choice=>${computerChoice}`;
//       break;
//     case 2:
//       result.innerHTML = `You Won! >computer choice=>${computerChoice}`;
//       break;
//     case 3:
//       result.innerHTML = `You Lose! >computer choice=>${computerChoice}`;
//       break;
//   }
// });
let btn = document.querySelectorAll("button");
btn.forEach((button) => {
  button.addEventListener("click", (event) => {
    let rockBtn = document.getElementById("rockBtn");
    let scissorsBtn = document.getElementById("scissorsBtn");
    let paperBtn = document.getElementById("paperBtn");
    let result = document.getElementById("result");
    let computerChoice = parseInt(Math.floor(Math.random() * 3) + 1);

    if (rockBtn) {
      switch (computerChoice) {
        case 1:
          result.innerHTML = `Match Draw!! >computer choice=>${computerChoice}`;
          break;
        case 2:
          result.innerHTML = `You Won! >computer choice=>${computerChoice}`;
          break;
        case 3:
          result.innerHTML = `You Lose! >computer choice=>${computerChoice}`;
          break;
      }

      //       //   if (computerChoice == 2) {
      //       //     result.innerHTML = `You Won! ---computer choice=> ${computerChoice}`;
      //       //   } else if (computerChoice == 1) {
      //       //     result.innerHTML = `Match Draw!! ---computer choice=> ${computerChoice}`;
      //       //   } else {
      //       //     result.innerHTML = `You lose! ---computer choice=> ${computerChoice}`;
      //       //   }
    }
    if (scissorsBtn) {
      switch (computerChoice) {
        case 1:
          result.innerHTML = `You lose! >computer choice=>${computerChoice}`;
          break;
        case 2:
          result.innerHTML = `Match Draw!! >computer choice=>${computerChoice}`;
          break;
        case 3:
          result.innerHTML = `You Won! >computer choice=>${computerChoice}`;
          break;
      }
    }
    if (paperBtn) {
      switch (computerChoice) {
        case 1:
          result.innerHTML = `You won! >computer choice=>${computerChoice}`;
          break;
        case 2:
          result.innerHTML = `you lose!! >computer choice=>${computerChoice}`;
          break;
        case 3:
          result.innerHTML = `mach draw! >computer choice=>${computerChoice}`;
          break;
      }
    }
  });
});
