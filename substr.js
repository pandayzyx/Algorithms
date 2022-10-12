
// Longest Substring Without Repeating Characters 
// Brute force Approach
function checkDuplicate(inputData){
const outputArr =[]
console.log(inputData)
for(let i=0;i<inputData.length;i++){
    const index = outputArr.findIndex(item=>item===inputData[i])
    if(index!==-1) return true
    if(index ===-1){
        outputArr.push(inputData[i])
    }
}
  return false
}

for(let i=0;i<inputStr.length;i++){
    let subStr =''
    for(let j=i;j<inputStr.length;j++){
     subStr+=inputStr[j]
     //console.log(subStr)
     if(subStr.length>maxLength && !checkDuplicate(subStr)){
         maxLength = subStr.length
     }
    }
}
console.log(maxLength)

// Sliding windows technique with two popinters
