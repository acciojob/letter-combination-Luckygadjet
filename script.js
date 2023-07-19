

function letterCombinations(input_digit) {
  //Complete the function
	let table={
	"2":"abc",
	"3":"def",
	"4":"ghi",
	"5":"jkl",
	"6":"mno",
	"7":"pqrs",
	"8":"tuv",
	"9":"wxyz"
}

let combos = [];
	function solve(index, str){

	if(input_digit <= index){
		combos.push(str);
		return;
	}

	let currchar = table[index];

	for(let i = index,i<table[currchar].length;i++){
		solve(index+1, str + table[currchar][i]);
	}
	
}

	solve(0,"");
	
	
	return combos;
}



module.exports = letterCombinations;
