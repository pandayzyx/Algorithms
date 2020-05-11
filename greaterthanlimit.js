function runProgram(input) {
	// Write code here
	var input_arr = input.split("\n");
	var out_str = Number(input_arr[1]);
	var out_arr = input_arr[0].split(" ");
	var c = 0;
	var arr_1 = [];
	for (i = 0; i < out_arr.length; i++) {
		if (out_arr[i] > out_str) {
			arr_1.push(out_arr[i]);
		}
	}
	if (out_arr.length > 0) {
        var y = arr_1.join(" ")
        console.log(y)
	} else {
		console.log("Empty");
	}
}
runProgram("2 5 4 10 4 5 3 2 1 9\n5");
