const stack = `[M][S][S]
[M][N][L][T][Q]
[G][P][C][F][G][T]
[B][J][D][P][V][F][F]
[D][D][G][C][Z][H][B][G]
[C][G][Q][L][N][D][M][D][Q]
[P][V][S][S][B][B][Z][M][C]
[R][H][N][P][J][Q][B][C][F]`;

const formatedStack =
  [
    ["MSS"],
    ["MNLTQ"],
    ["GPCFGT"],
    ["BJDPVFF"],
    ["DDGCZHBG"],
    ["CGQLNDMDQ"],
    ["PVSSBBZMC"],
    ["RHNPJQBCF"]
  ];


const numberRange = `1   2   3   4   5   6   7   8   9`;

function makeStackObjet() {
  const startRange = Number(numberRange[0]);
  const endRange = Number(numberRange.at(-1));

  const stackObject = {};

  for (let i = startRange; i <= endRange; i++) {
    stackObject[i] = formatedStack[i - 1];
  }

  return stackObject;
}

export const stackObject = makeStackObjet();