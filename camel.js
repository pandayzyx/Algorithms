function runProgram(input) {
	// Write code here
	var input_arr = input.split("\n");
	var out_arr = input_arr[0].split("");
	var c = 0;

	if (input_arr[1] === "snake_case") {
		snake_case(input_arr[0]);
	} else if (input_arr[1] === "hyphen-case") {
		hyphen_case(input_arr[0]);
	} else if (input_arr[1] === "camelCase") {
		camelCase(input_arr[0]);
	}

	function camelCase() {
		for (i = 0; i < out_arr.length; i++) {
			if (out_arr[i] === " ") {
				out_arr[i] = "";
				out_arr[i + 1] = out_arr[i + 1].toUpperCase();
			}
		}
		console.log(out_arr.join(""));
	}
	function hyphen_case() {
		for (i = 0; i < out_arr.length; i++) {
			if (out_arr[i] === " ") {
				out_arr[i] = "-";
			}
		}
		console.log(out_arr.join(""));
	}
	function snake_case() {
		for (i = 0; i < out_arr.length; i++) {
			if (out_arr[i] === " ") {
				out_arr[i] = "_";
				out_arr[i + 1] = out_arr[i + 1].toLowerCase();
			}
		}
		out_arr[0] = out_arr[0].toLowerCase();
		console.log(out_arr.join(""));
	}
}
runProgram("Masai School\nsnake_case");
