function runProgram(input) {
	// Write code here
	var obj = {};
	var input_arr = input.split("\n");
	var set_1arr = input_arr[0].split(" ");
	var set_2arr = input_arr[1].split(" ");
	set_1arr.forEach(function(x) {
		obj[x] = "xy";
	});
	set_2arr.forEach(function(z) {
		obj[z] = "xy";
	});
	console.log(Object.keys(obj).join(" "));
}

runProgram("1 2 9 4\n3 4 2 6");
