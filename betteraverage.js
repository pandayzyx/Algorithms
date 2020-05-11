function user(input) {
	var input_arr = input.split("\n");
	var set_1 = input_arr[1].split(" ");
	var set_2 = input_arr[2].split(" ");
	var x = Number(input_arr[0]);

	function sum_cal(a) {
		var sum = 0;
		for (i = 0; i < x; i++) {
			sum = sum + Number(a[i]);
		}
		var y = sum;
		return y;
	}
	function check_average() {
		var average1 = sum_cal(set_1) / x;
		var average12 = sum_cal(set_2) / x;
		if (average1 > average12 && average1 % 2 == 0) {
			console.log(Math.ceil(average1));
		} else if (average1 < average12 && average12 % 2 == 0) {
			console.log(average12);
		} else if (average1 == average12 && average12%2 == 0) {
			console.log(average12);
		} else {
			console.log("-1");
		}
	}
	check_average();
}
user("3\n10 20 30\n40 80 60");
