function user(input) {
	var input_arr = input.split("\n");
	var out_arr = input_arr[0].split(" ");
	var x = Number(input_arr[1]);
	console.log(out_arr);
	var c = 0;
	function arr_index(a, b) {
		for (i = 0; i < b.length; i++) {
			if (a == Number(b[i])) {
                return i;
                break;
                
			}
        }
       return -1
    }
    console.log(arr_index(x,out_arr))
}
user("1 2 3 3 4 4 5 1 1 2\n3");
