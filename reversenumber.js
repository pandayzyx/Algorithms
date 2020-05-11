function runProgram(input) {
	// Write code here
	var y = input;
	var out_arr = [];
	var c = 0;

	for (i = y.length - 1; i >= 0; i--) {
		if (y[0] != 0 && y[i] == 0) {
			c++;
		}
	}
	console.log(c);
	function arr_push() {
		for (j = y.length - 1; j >= 0; j--) {
			if (c == y.length - 1) {
                out_arr.push(y[0]);
                break;
			} else {
				out_arr.push(y[j]);
			}
		}
	}
	arr_push();

	console.log(Number(out_arr.join("")));
}
runProgram("523");
