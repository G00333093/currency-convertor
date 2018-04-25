function euroToPounds(){

  var amount = parseInt(document.getElementById("pounds").value);

  var pounds = amount * 0.86;
  var message = amount + ' euros converts to ' + pounds + ' sterling.';
  console.log(message);
  document.getElementById("resultsentence").innerHTML = message;

}
//changes to pounds

//chagnge to dollars
function euroToDollar(){

  var amount = parseInt(document.getElementById("dollars").value);

  var dollars = amount * 1.06;
  var message = amount + ' euros converts to ' + dollars + ' dollars.';
  console.log(message);
  document.getElementById("resultsentence").innerHTML = message;

}

// change to yen
function euroToJapaneseYen(){

  var amount = parseInt(document.getElementById("japaneseyen").value);

  var japaneseyen = amount * 121.12;
  var message = amount + ' euros converts to ' + japaneseyen + ' japaneseyen.';
  console.log(message);
  document.getElementById("resultsentence").innerHTML = message;

}

// change to nitcoin
function euroToBitcoin(){

  var amount = parseInt(document.getElementById("bitcoin").value);

  var bitcoin = amount * 0.00082;
  var message = amount + ' euros converts to ' + bitcoin + ' bitcoin.';
  console.log(message);
  document.getElementById("resultsentence").innerHTML = message;

}