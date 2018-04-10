module.exports = {
  difference: function(num1,num2) {
    return num1 - num2;
  },
  isEqual: function(num1,num2) {
    return num1 === num2;
  },
  isEven: function(num1){
    return num1 % 2 === 0;
  },
  isDivisible: function(num1, num2) {
    return num1 % num2 === 0;
  },
  discountPercentage: function(amount, percent){
    if (percent < 0 || percent > 100) {
        return "please enter a number between 0 and 100";
    } else {
        return amount * (percent/100);
    }
  },
  isVowel: function(letter) {
  //   if (letter = "A" || letter = 'E' || letter = 'I' || letter = 'O' || letter = "U")
  //     return True;
  },
  celsiusToFahrenheit: function(temp){
    return (temp * 1.8) + 32;
  },
  biggestOfThree: function( num1, num2, num3 ){
    if (num1 > num2) {
      if (num1 > num3) {
        return num1;
      } else if (num2 > num3) {
          return num2;
      } else {
          return num3;
      }
    }
  },
//Bonus
  federalIncomeTaxCalculator: function(salary){

  }
};
