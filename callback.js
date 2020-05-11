var set_1 = [1, 8, 9, 7];
var set_2 = [5, 6, 7, 6];
var x = set_1.length;
var a;

function sum_check(a) {
	var sum = 0;
	for (i = 0; i < x; i++) {
		sum = sum + a[i];
	}
	return(sum);
}


function check_average(z) {
    var average_1 = sum_check(set_1)/x;
    var average_2 = sum_check(set_2)/x;
      console.log(average_2,average_1)
		if (average_1 > average_2 && average_1 % 2 == 0) {
			console.log(average_1);
		}
		else if(average_1 < average_2 && average_2%2==0){
		    console.log(average_2)
		}
		else if(average_1 == average_2 && average_1%2==0){
		    console.log(average_1)
		}
		else{
		    console.log("-1")
		}
		
	
}
check_average()
