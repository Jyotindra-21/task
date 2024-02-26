function numberToWord(n) {
    // Check if the number is negative
    if (n < 0)
      return false;
  
    // Define arrays for words representation
    const singleDigit = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const doubleDigit = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const belowHundred = ['Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  
    // Handle special case when the number is zero
    if (n === 0) return 'Zero';
  
    // Recursive function to translate a number to words
    function translate(num) {
      let word = "";
      if (num < 10) {
        word = singleDigit[num] + ' ';
      } else if (num < 20) {
        word = doubleDigit[num - 10] + ' ';
      } else if (num < 100) {
        const remainder = translate(num % 10);
        word = belowHundred[Math.trunc((num - num % 10) / 10) - 2] + ' ' + remainder;
      } else if (num < 1000) {
        word = singleDigit[Math.trunc(num / 100)] + ' Hundred ' + translate(num % 100);
      } else if (num < 1000000) {
        word = translate(parseInt(num / 1000)).trim() + ' Thousand ' + translate(num % 1000);
      } else if (num < 1000000000) {
        word = translate(parseInt(num / 1000000)).trim() + ' Million ' + translate(num % 1000000);
      } else {
        word = translate(parseInt(num / 1000000000)).trim() + ' Billion ' + translate(num % 1000000000);
      }
      return word;
    }
  
    // Call the translate function with the input number
    const result = translate(n);
  
    // Trim and add a period at the end of the result
    return result.trim() + '.';
  }
  

