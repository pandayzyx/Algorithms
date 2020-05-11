var array = [1, 9, 7, 5, 8, 2];
var out_arr = [];

function sort(a, b) {
	var c = 0;
	for (i = 0; i < array.length; i++) {
		for (j = 0; j < array.length; j++) {
			if (a[i] < b[j]) {
				c++;
			}
		}

		if (c == a.length - 1) {
			out_arr.push(a[i]);
		}
		c = 0;
	}
	console.log(a.length);
	return out_arr;
}
sort(array, array);
console.log(out_arr);
