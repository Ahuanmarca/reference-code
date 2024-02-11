const layout = [
  [ 'a', 'b', 'c', 'd', 'e', '1', '2', '3' ],
  [ 'f', 'g', 'h', 'i', 'j', '4', '5', '6' ],
  [ 'k', 'l', 'm', 'n', 'o', '7', '8', '9' ],
  [ 'p', 'q', 'r', 's', 't', '.', '@', '0' ],
  [ 'u', 'v', 'w', 'x', 'y', 'z', '_', '/' ]
]

let lastChar = 'a';

function findPos(char) {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 8; j++) {
      if (layout[i][j] === char) {
        return [ i, j ];
      }
    }
  }
}

function countKeyStrokes(char) {
  const currPos = findPos(lastChar);
  const newPos = findPos(char);
  const verticalMoves = Math.abs(currPos[0] - newPos[0]);
  const horizontalMoves = Math.abs(currPos[1] - newPos[1]);
  const totalKeyStrokes = verticalMoves + horizontalMoves + 1;
  // console.log(`lastChar: ${lastChar} position: ${currPos}`);
  // console.log(`newChar: ${char} position: ${newPos}`);
  // console.log(`totalKeyStrokes: ${totalKeyStrokes}`);
  lastChar = char;
  return totalKeyStrokes;
}


function tvRemote(word = '/3') {
  let keyStrokes = 0;
  for (char of word) {
    keyStrokes += countKeyStrokes(char);
  }
  return keyStrokes;
}

console.log(tvRemote());

