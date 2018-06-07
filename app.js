do {
  var cardNumber = prompt('Insira aqui o número do seu cartão de crédito.');
  isValidCard(cardNumber);
} while(cardNumber.length < 1);

function isValidCard(cardNumber){
  var arrayReverse = [];
  var arrayNumber = [];
  var sum = 0;

  for (var i = cardNumber.length - 1; i >= 0; i--){
    arrayReverse.push(cardNumber[i]);
  }

  for (var j = 0; j < arrayReverse.length; j++){
    if (j % 2 === 1){
      var multiplication = arrayReverse[j] * 2;
      if (multiplication >= 10){
        var subtraction = multiplication - 9;
        arrayNumber.push(subtraction);
      } else {
        arrayNumber.push(multiplication);
      }
    } else {
      arrayNumber.push(parseInt(arrayReverse[j]));
    }
  }

  for (var k = 0; k < arrayNumber.length; k++){
    sum += arrayNumber[k];
  }

  if (sum % 10 === 0){
    return document.write('Ok, número de cartão válido!');
  } else {
    return document.write('Número de cartão inválido, por favor, tente novamente.')
  }
}
