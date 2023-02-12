import * as readline from "readline";

// create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// print pattern
function printPattern(n: number) {
  const offset = n * 2 - 1;
  let lengthLoopMinus = 1
  let flagAddingMinus = true
  for (let i = 0; i < offset; i++) {
    let loopPlus = (offset - lengthLoopMinus) / 2

    // print left "+"
    for (let j = 0; j < loopPlus; j++) {
        process.stdout.write("+");
    }

    // print middle "-"
    for (let j = 0; j < lengthLoopMinus; j++) {
        process.stdout.write("-");
    }

    // print right "+"
    for (let j = 0; j < loopPlus; j++) {
        process.stdout.write("+");
    }

    if (i === n - 1) flagAddingMinus = !flagAddingMinus

    if (flagAddingMinus) lengthLoopMinus += 2
    else lengthLoopMinus -= 2
    
    process.stdout.write("\n");
  }

  rl.close();
}

// start app
rl.question("Input integer of N: ", (answer) => printPattern(Number(answer)));
