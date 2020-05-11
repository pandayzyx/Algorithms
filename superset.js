function user(input) {
	var new_arr = input.split("\n");
	var set_1 = new_arr[0].split(" ");
	var set_2 = new_arr[1].split(" ");
	console.log(set_1);
	var c = 0;
	for (i = 0; i < set_1.length; i++) {
		for (j = 0; j < set_2.length; j++) {
			if (Number(set_1[i]) == Number(set_2[j])) {
				c++;
				set_2[j]="";
			}
		}
	}
	console.log(c);

	if (c == set_2.length) {
		console.log("Yes");
	} else {
		console.log("No");
	}
}
user("1 3 5 2 3\n1 2 3");
