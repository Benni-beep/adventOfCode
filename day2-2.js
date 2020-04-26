const data = require("./day2-1data.json");
function opCodeProcess(input) {
  let counter = 0;
  let arr = [];
  let noun = 0;
  let verb = 0;
  let answer = "";

  for (let n = 0; n <= 99; n++) {
    for (let v = 0; v <= 99; v++) {
      let opcodePosition = 0;

      arr = input.slice();

      arr[1] = n;
      noun = n;
      arr[2] = v;
      verb = v;

      while (arr[opcodePosition] != 99) {
        switch (arr[opcodePosition]) {
          case 1:
            arr[arr[opcodePosition + 3]] =
              arr[arr[opcodePosition + 1]] + arr[arr[opcodePosition + 2]];
            break;
          case 2:
            arr[arr[opcodePosition + 3]] =
              arr[arr[opcodePosition + 1]] * arr[arr[opcodePosition + 2]];
            break;
          default:
            console.error(`opcode "${arr[opcodePosition]}"`);
            break;
        }
        opcodePosition += 4;
      }
      answer = `arr[0] = ${arr[0]}, noun: ${noun}, verb: ${verb}`;
      if (arr[0] == 19690720) return answer;
    }
  }  
}

console.log(opCodeProcess(data));