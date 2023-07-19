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

function letterCombinations(input_digit) {
  //Complete the function
	
	solve(0,"", input_digit);
	return combos;
}

function solve(index, str, input_digit){

	if(input_digit <= index){
		combos.push(str);
		return;
	}

	let currchar = table[index];

	for(let i = index,i<table[currchar].length;i++){
		solve(index+1, str + table[currchar][i],input_digit);
	}
	
}

module.exports = letterCombinations;
