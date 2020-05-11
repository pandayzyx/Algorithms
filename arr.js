var str = "ramisagoodboy";
var x = str.length;
for (i = 0; i <=x; i++) {
	for (j = i+1; j <= x; j++) {
        substr = str.slice(i, j);
		console.log(substr);
	}
}
