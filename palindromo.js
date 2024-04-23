function palindromo(palindromo) {
     
  var re = /[\W_]/g; 
  var lowRegStr = palindromo.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  
  if (reverseStr == palindromo) {
    return true
  }else{
    return false
  }
}

module.exports = {palindromo}