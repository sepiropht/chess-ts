import * as defs from './defs'

function init () {
  InitFilesRanksBrd();
  console.log('main init called')
}

function InitFilesRanksBrd() {
	
	var index = 0;
	var file = defs.FILES.FILE_A;
	var rank = defs.RANKS.RANK_1;
	var sq = defs.SQUARES.A1;
	var sq64 = 0;
	
	for(index = 0; index < defs.BRD_SQ_NUM; ++index) {
		defs.FilesBrd[index] = defs.SQUARES.OFFBOARD;
		defs.RanksBrd[index] = defs.SQUARES.OFFBOARD;
	}
	
	for(rank = defs.RANKS.RANK_1; rank <= defs.RANKS.RANK_8; ++rank) {
		for(file = defs.FILES.FILE_A; file <= defs.FILES.FILE_H; ++file) {
			sq = defs.FR2SQ(file, rank);
			defs.FilesBrd[sq] = file;
			defs.RanksBrd[sq] = rank;
		}
  }
  console.log("Filebrd[0]:"+ defs.FilesBrd[0] + "Rankbrd[0]:"+ defs.RanksBrd[0])
  console.log("Filebrd[defs.SQUARES.A1]:"+ defs.FilesBrd[defs.SQUARES.A1] + "Rankbrd[defs.SQUARES.A1]:"+ defs.RanksBrd[defs.SQUARES.A1])
  console.log("Filebrd[defs.SQUARES.E8]:"+ defs.FilesBrd[defs.SQUARES.E8] + "Rankbrd[defs.SQUARES.E8]:"+ defs.RanksBrd[defs.SQUARES.E8])
}

init()

