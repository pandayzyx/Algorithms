function processData(input) { 
      //Enter your code here 
      var str = input 
      var x = str.length 
      var longest  = 0 
      for(i=0; i<x; i++){ 
          for(j= i+1;j<x ;j++){ 
             var substr = str.slice(i,j); 
              if(checkpallindrome(substr) == true){ 
                  var length = substr.length 
                  console.log(substr) 
              } 
                  if(length > longest){ 
                      longest = length 
                 } 
                 length = 0; 
          } 
      } 
      
   
      function checkpallindrome(substr){ 
          var y = Math.floor(substr.length/2) 
          var flag; 
          if(substr.length>1){ 
              for(i=0; i<y; i++){ 
                  if(substr[i] == substr[substr.length-1-i]){ 
                      flag = true 
                  } 
                  else{ 
                      flag = false; 
                      break; 
                  } 
              } 
          } 
          return flag 
             
      } 
      console.log("longest")
  }
    processData("thisracecarisgood")
