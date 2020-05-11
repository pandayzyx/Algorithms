function runProgram(input) {
    var input_arr = input.split("\n");
    var set_1 = input_arr[0].split(" ");
    var set_2 = input_arr[1].split(" ");
    var new_arr = [];
    var c;

    function arr_difference(a, b) {
        c = 0;
        for (i = 0; i < a.length; i++) {
            for (j = 0; j < b.length; j++) {
                if (a[i] === b[j]) {
                    c++;
                }
            }
            if (c > 0) {
                c = 0;
            } else {
                new_arr.push(a[i]);
            }
        }
    }
    arr_difference(set_1, set_2);
    arr_difference(set_2, set_1);
    if (new_arr.length > 0) {
        console.log(new_arr.join(" "));
    } else {
        console.log("Empty");
    }
}
runProgram("1 2 9 4\n3 4 2 6");
