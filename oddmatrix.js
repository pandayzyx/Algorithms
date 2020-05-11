function runProgram(input) {
	// Write code here
	var out_arr = input.split("\n");
	var x = Number(out_arr[0]);
	var set_2darr = [];
    var sum = 0;
    
	for (i = 1; i <= x; i++) {
		set_2darr.push(out_arr[i].split(" "));
	}
	function check_odd() {
		for (j = 0; j < x; j++) {
			for (k = 0; k < x; k++) {
				if((Number(set_2darr[j][k]) % 2) != 0) {
					sum = sum + Number(set_2darr[j][k]);
				}
			}
		}
		return sum;
	}
   console.log(check_odd())

	
}
runProgram("3\n1 5 4\n2 3 5\n7 5 3");
