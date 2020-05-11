function name(input) {
	var input_arr = input.split("\n");
	var out_arr = [];
	var set_1 = input_arr[0].split(" ");
	var row = Number(set_1[0]);
	var coloumn = Number(set_1[1]);
	var new_arr = [];

	for (j = 1; j <= row; j++) {
		out_arr.push(input_arr[j].split(" "));
	}

	function transpose() {
		for (k = 0; k < coloumn; k++) {
			new_arr[k] = [];
			for (i = 0; i < row; i++) {
				new_arr[k][i] = out_arr[i][k];
			}
		}
	}
	transpose(new_arr);
	function display_transpose() {
		for (i = 0; i < new_arr.length; i++) {
			console.log(new_arr[i].join(" "));
		}
	}
	display_transpose();
}

name("2 3\n1 5 6\n2 2 3");
