var arr = [7,3,1,5,2];
var k = 6;
var n = arr.length;
for (i = 0; i < n - 1; i++) {
	for (j = 0; j < n - 1 - i; j++) {
		if (arr[j] > arr[j + 1]) {
			var temp = arr[j];
			arr[j] = arr[j + 1];
			arr[j + 1] = temp;
		}
	}
	console.log(arr)
	
}
console.log(arr);

// 

