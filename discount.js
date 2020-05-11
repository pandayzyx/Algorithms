function runProgram(input) {
	// Write code here
	var y;
	var d;
	var x = Number(input);
	if (300 <= x && x <= 1000) {
		d = 0.1 * x;
		y = 0.9 * x;
		console.log("Final price:" + y + ", Discount price:" + d);
	} else if (x > 1000) {
		y = x - 100;
		console.log("Final price:" + y + ", Discount price:" + "100");
	} else {
		console.log("Discount is Invalid. Final price:" + x);
	}
}
runProgram(300);
