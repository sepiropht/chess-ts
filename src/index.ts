import * as defs from "./defs";

function init() {
  initFilesRanksBrd();
  console.log("main init called");
}

function initFilesRanksBrd() {
  let sq = defs.SQUARES.A1;

  for (let index = 0; index < defs.BRD_SQ_NUM; index += 1) {
    defs.FilesBrd[index] = defs.SQUARES.OFFBOARD;
    defs.RanksBrd[index] = defs.SQUARES.OFFBOARD;
  }

  for (let rank = defs.RANKS.RANK_1; rank <= defs.RANKS.RANK_8; rank += 1) {
    for (let file = defs.FILES.FILE_A; file <= defs.FILES.FILE_H; file += 1) {
      sq = defs.frTosq(file, rank);
      defs.FilesBrd[sq] = file;
      defs.RanksBrd[sq] = rank;
    }
  }
  console.log(
    `Filebrd[defs.SQUARES.A1]: 
      ${defs.FilesBrd[defs.SQUARES.A1]} 
      Rankbrd[defs.SQUARES.A1]: 
	  ${defs.RanksBrd[defs.SQUARES.A1]}
	  `
  );
  console.log(
    `Filebrd[defs.SQUARES.E8]:
      ${defs.FilesBrd[defs.SQUARES.E8]}
      Rankbrd[defs.SQUARES.E8]:
	  ${defs.RanksBrd[defs.SQUARES.E8]}
	  `
  );
}

init();
