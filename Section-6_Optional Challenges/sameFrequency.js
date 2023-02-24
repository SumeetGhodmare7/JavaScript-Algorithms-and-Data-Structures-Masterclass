function sameFrequency(num1, num2){
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if(strNum1.length !== strNum2.length) return false;
  
  let countNum1 = {};
  let countNum2 = {};
  let i=0
  while(i < strNum1.length){
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
    i++
  }
  
  let j=0;
  while(j < strNum1.length){
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
    j++
  }
  
  for(let key in countNum1){
    if(countNum1[key] !== countNum2[key]) return false;
  }
 
  return true;
}
