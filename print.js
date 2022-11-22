function printNumber(number) {
    var holder = document.getElementById('laPrint');
    holder.innerHTML = number;
  }
  function printNumber2(number) {
    var holder = document.getElementById('secondPrint');
    holder.innerHTML = number;
  }
  function printNumberAdd(number1,number2) {
    var holder = document.getElementById('addPrint');
    holder.innerHTML = number1 + number2;
  }

  
  var button = document.getElementById('button');
  
  button.onclick = function() {
    var result = dice.roll();
    var result2 = dice.roll();
    printNumber("dice 1" + result);
    printNumber2(result2);
    printNumberAdd(result,result2)
  };
  