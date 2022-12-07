const stack = `
[M][S][S]
[M][N][L][T][Q]
[G][P][C][F][G][T]
[B][J][D][P][V][F][F]
[D][D][G][C][Z][H][B][G]
[C][G][Q][L][N][D][M][D][Q]
[P][V][S][S][B][B][Z][M][C]
[R][H][N][P][J][Q][B][C][F]`;

// const formatedStack =
//   [
//     ["MSS"],
//     ["MNLTQ"],
//     ["GPCFGT"],
//     ["BJDPVFF"],
//     ["DDGCZHBG"],
//     ["CGQLNDMDQ"],
//     ["PVSSBBZMC"],
//     ["RHNPJQBCF"]
//   ];

const formatedStack = [
  ["GBDCPR"],
  ["GVH"],
  ["MPJDQSN"],
  ["MNCDGLSP"],
  ["SLFPCNBJ"],
  ["STGVZDBQ"],
  ["QTFHMZB"],
  ["FBDMC"],
  ["GQCF"]
];


function makeStackObjet() {
  const endRange = formatedStack.length;

  const stackObject = {};

  for (let i = 1; i <= endRange; i++) {
    stackObject[i] = [...formatedStack[i - 1][0]];
  }

  return { stackObject, endRange };
}

export const { stackObject, endRange } = makeStackObjet();

