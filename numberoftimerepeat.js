function user(input) {
	var input_arr = input.split("\n");
	var out_arr = input_arr[0].split(" ");
    var x = Number(input_arr[1]);
    console.log(out_arr)
    var c = 0;
	for (i = 0; i < out_arr.length; i++) {
        if( x == Number(out_arr[i])){
            c++
        }
    }
    console.log(c)
    
}
user("1 2 3 3 4 4 5 1 1 2\n4");



	
