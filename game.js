// let tog = 1
// let rollingSound = new Audio('rollSound.mp3')
// let winSound = new Audio('winSound.mp3')



// let p1sum = 0
// let p2sum = 0


// function play(player, psum, correction, num) {
//     let sum
//     if (psum == 'p1sum') {

//         p1sum = p1sum + num

//         if (p1sum > 100) {
//             p1sum = p1sum - num
//             // sum = p1sum
//         }

//         if (p1sum == 1) {
//             p1sum = 38
//         }
//         if (p1sum == 4) {
//             p1sum = 14
//         }
//         if (p1sum == 8) {
//             p1sum = 30
//         }
//         if (p1sum == 21) {
//             p1sum = 42
//         }
//         if (p1sum == 28) {
//             p1sum = 76
//         }
//         if (p1sum == 32) {
//             p1sum = 10
//         }
//         if (p1sum == 36) {
//             p1sum = 6
//         }
//         if (p1sum == 48) {
//             p1sum = 26
//         }
//         if (p1sum == 50) {
//             p1sum = 67
//         }
//         if (p1sum == 62) {
//             p1sum = 18
//         }
//         if (p1sum == 71) {
//             p1sum = 92
//         }
//         if (p1sum == 80) {
//             p1sum = 99
//         }
//         if (p1sum == 88) {
//             p1sum = 24
//         }
//         if (p1sum == 95) {
//             p1sum = 56
//         }
//         if (p1sum == 97) {
//             p1sum = 78
//         }

//         sum = p1sum



//     }

//     if (psum == 'p2sum') {

//         p2sum = p2sum + num

//         if (p2sum > 100) {
//             p2sum = p2sum - num
//             // sum = p1sum
//         }
        

//         if (p2sum == 1) {
//             p2sum = 38
//         }
//         if (p2sum == 4) {
//             p2sum = 14
//         }
//         if (p2sum == 8) {
//             p2sum = 30
//         }
//         if (p2sum == 21) {
//             p2sum = 42
//         }
//         if (p2sum == 28) {
//             p2sum = 76
//         }
//         if (p2sum == 32) {
//             p2sum = 10
//         }
//         if (p2sum == 36) {
//             p2sum = 6
//         }
//         if (p2sum == 48) {
//             p2sum = 26
//         }
//         if (p2sum == 50) {
//             p2sum = 67
//         }
//         if (p2sum == 62) {
//             p2sum = 18
//         }
//         if (p2sum == 71) {
//             p2sum = 92
//         }
//         if (p2sum == 80) {
//             p2sum = 99
//         }
//         if (p2sum == 88) {
//             p2sum = 24
//         }
//         if (p2sum == 95) {
//             p2sum = 56
//         }
//         if (p2sum == 97) {
//             p2sum = 78
//         }

//         sum = p2sum



//     }


//     document.getElementById(`${player}`).style.transition = `linear all .5s`





//     if (sum < 10) {

//         document.getElementById(`${player}`).style.left = `${(sum - 1) * 62}px`
//         document.getElementById(`${player}`).style.top = `${-0 * 62 - correction}px`


//     }

//     else if (sum == 100) {
//         winSound.play()
//         if (player == 'p1') {
//             alert("Red Won !!")
//         }
//         else if (player == 'p2') {
//             alert("Yellow Won !!")
//         }
//         location.reload()
//     }

//     else {

//         numarr = Array.from(String(sum))
//         n1 = eval(numarr.shift())
//         n2 = eval(numarr.pop())
//         // console.log(n1, n2)

//         if (n1 % 2 != 0) {

//             if (n2 == 0) {
//                 document.getElementById(`${player}`).style.left = `${(9) * 62}px`
//                 document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
//             }
//             else {
//                 document.getElementById(`${player}`).style.left = `${(9 - (n2 - 1)) * 62}px`
//                 document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`

//             }

//         }
//         else if (n1 % 2 == 0) {
//             if (n2 == 0) {

//                 document.getElementById(`${player}`).style.left = `${(0) * 62}px`
//                 document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
//             }
//             else {

//                 document.getElementById(`${player}`).style.left = `${(n2 - 1) * 62}px`
//                 document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`
//             }

//         }



//     }
// }


// document.getElementById("diceBtn").addEventListener("click", function () {
//     rollingSound.play()
//     num = Math.floor(Math.random() * (6 - 1 + 1) + 1)
//     document.getElementById("dice").innerText = num


//     if (tog % 2 != 0) {
//         document.getElementById('tog').innerText = "Yellow's Turn : "
//         play('p1', 'p1sum', 0, num)

//     }

//     else if (tog % 2 == 0) {
//         document.getElementById('tog').innerText = "Red's Turn : "

//         play('p2', 'p2sum', 55, num)

//     }

//     tog = tog + 1




// })

let tog = 1;
let rollingSound = new Audio("rollSound.mp3");
let winSound = new Audio("winSound.mp3");

let p1sum = 0;
let p2sum = 0;

// Function to handle dice rolling
function rollDice() {
  rollingSound.play();
  return Math.floor(Math.random() * 6) + 1;
}

// Function to check the start position of a player
function CheckPlayerStart(playerSum) {
  if (playerSum == 1) return 38;
  if (playerSum == 4) return 14;
  if (playerSum == 8) return 30;
  if (playerSum == 21) return 42;
  if (playerSum == 28) return 76;
  return playerSum;
}

// Function to check snake positions
function CheckSnake(playerSum) {
  if (playerSum == 32) return 10;
  if (playerSum == 36) return 6;
  if (playerSum == 48) return 26;
  if (playerSum == 62) return 18;
  if (playerSum == 88) return 24;
  if (playerSum == 95) return 56;
  if (playerSum == 97) return 78;
  return playerSum;
}

// Function to check ladder positions
function CheckLadder(playerSum) {
  if (playerSum == 1) return 38;
  if (playerSum == 4) return 14;
  if (playerSum == 8) return 30;
  if (playerSum == 21) return 42;
  if (playerSum == 28) return 76;
  if (playerSum == 50) return 67;
  if (playerSum == 71) return 92;
  if (playerSum == 80) return 99;
  return playerSum;
}

// Function to compute player position and avoid exceeding 100
function computePosition(playerSum, num) {
  playerSum += num;
  if (playerSum > 100) {
    playerSum -= num; // Player stays in place if move exceeds 100
  }
  return playerSum;
}

// Function to update the position on the board
function UpdatePosition(player, sum, correction) {
  document.getElementById(`${player}`).style.transition = `linear all .5s`;

  if (sum < 10) {
    document.getElementById(`${player}`).style.left = `${(sum - 1) * 62}px`;
    document.getElementById(`${player}`).style.top = `${
      -0 * 62 - correction
    }px`;
  } else if (sum == 100) {
    winSound.play();
    if (player == "p1") {
      alert("Red Won !!");
    } else if (player == "p2") {
      alert("Yellow Won !!");
    }
    location.reload();
  } else {
    let numarr = Array.from(String(sum));
    let n1 = eval(numarr.shift());
    let n2 = eval(numarr.pop());

    if (n1 % 2 != 0) {
      // Odd rows move right to left
      if (n2 == 0) {
        document.getElementById(`${player}`).style.left = `${9 * 62}px`;
        document.getElementById(`${player}`).style.top = `${
          (-n1 + 1) * 62 - correction
        }px`;
      } else {
        document.getElementById(`${player}`).style.left = `${
          (9 - (n2 - 1)) * 62
        }px`;
        document.getElementById(`${player}`).style.top = `${
          -n1 * 62 - correction
        }px`;
      }
    } else {
      // Even rows move left to right
      if (n2 == 0) {
        document.getElementById(`${player}`).style.left = `${0 * 62}px`;
        document.getElementById(`${player}`).style.top = `${
          (-n1 + 1) * 62 - correction
        }px`;
      } else {
        document.getElementById(`${player}`).style.left = `${(n2 - 1) * 62}px`;
        document.getElementById(`${player}`).style.top = `${
          -n1 * 62 - correction
        }px`;
      }
    }
  }
}

// Function to handle player's position and detect snakes or ladders
function CheckingChangeRetake(player, psum, correction, num) {
  let sum;
  if (psum == "p1sum") {
    p1sum = computePosition(p1sum, num);
    p1sum = CheckLadder(p1sum);
    p1sum = CheckSnake(p1sum);
    sum = p1sum;
  } else if (psum == "p2sum") {
    p2sum = computePosition(p2sum, num);
    p2sum = CheckLadder(p2sum);
    p2sum = CheckSnake(p2sum);
    sum = p2sum;
  }

  UpdatePosition(player, sum, correction);
}

// Event listener for the dice button click
document.getElementById("diceBtn").addEventListener("click", function () {
  let num = rollDice();
  document.getElementById("dice").innerText = num;

  if (tog % 2 != 0) {
      document.getElementById("tog").innerText = "Yellow's Turn : ";
      document.getElementById("tog").style.color = "Yellow";
    CheckingChangeRetake("p1", "p1sum", 0, num);
  } else {
      document.getElementById("tog").innerText = "Red's Turn : ";
      document.getElementById("tog").style.color = "Red";
    CheckingChangeRetake("p2", "p2sum", 55, num);
  }

  tog += 1;
});
