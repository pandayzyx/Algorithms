function name(input){
    var str = input
    var x = str.length
    var longest  = 0
    for(i=0; i<x; i++){
        for(j=i+1;j<=x ;j++){
           var substr = str.substring(i,j)
            if(checkpallindrome(substr)){
                var length = checkpallindrome(substr)
                if(length > longest){
                    longest = length
                }
            }


        }
    }
    function checkpallindrome(substr){
        if(substr.length>1){
            for(i=0;i<Math.floor(substr.length/2); i++){
                if(substr[i] != substr[substr.length-1 - i]){
                    return false
                }
            }
        }
        return substr.length
    }
    console.log(longest)
}
name("thisracecarisgood")