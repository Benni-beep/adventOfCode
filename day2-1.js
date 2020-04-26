const data = require('./day2-1data.json')

function opCodeProcess(arr) {
  let opcodePosition = 0;

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
        console.log(`ERROR: opcode "${arr[opcodePosition]}"`);
        break;
    }
    opcodePosition += 4;
  }
  return arr[0];
}

console.log(opCodeProcess(data));
