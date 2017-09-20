function isAlpha(char) {
  var alphabet = [
    "a","b","c","d","e",
    "f","g","h","i","j",
    "k","l","m","n","o",
    "p","q","r","s","t",
    "u","v","w","x","y",
    "z"
  ];

  return (alphabet.indexOf(char) !== -1);
}

function isNumeric(char) {
  var numbers = [ "1","2","3","4","5","6","7","8","9","0" ];

  return (numbers.indexOf(char) !== -1);
}

function isAlphanumeric(char) {
  return (isAlpha(char) || isNumeric(char);
}

function isValidEmail(email) {
  var emailParts = email.split("@");

  if (emailParts.length !== 2) {
    return false;
  }

  var firstPart = emailParts[0];
  var secondPart = emailParts[1];

  for (var i = 0; i < firstPart.length; i += 1) {
    var char = firstPart[i];

    if (!isAlphanumeric(char) && char !== "_" && char !== ".") {
      return false;
    }
  }

  if (secondPart.split(".").length !== 2) {
    return false;
  }

  for (var i = 0; i < secondPart.length; i += 1) {
    var char = secondPart[i];

    if (!isAlpha(char) && char !== ".") {
      return false;
    }
  }

  return true;
}
