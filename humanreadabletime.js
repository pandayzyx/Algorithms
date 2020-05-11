function runProgram(input) {
	// Write code here
	var N = Number(input);
	var hr = Math.floor(N / 60);
	var min = N - 60 * hr;

	if (min === 0) {
		console.log(hr + "hour" + " " + "00mins");
	} else if (hr == 1 && hr < 2) {
		console.log(hr + "hour" + " " + min + "mins");
	} else {
		console.log(hr + "hrs" + " " + min + "mins");
	}
}
runProgram("130");
