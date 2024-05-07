function encrypt() {
  var key = document.getElementById("encrypt-key").value;
  var message = document.getElementById("encrypt-message").value;

  var encrypted = CryptoJS.AES.encrypt(message, key).toString();

  document.getElementById("encrypted-message").innerHTML =
    "Encrypted Message: " + encrypted;
}

function decrypt() {
  var key = document.getElementById("decrypt-key").value;
  var encryptedMessage = document.getElementById("decrypt-message").value;

  var decrypted = CryptoJS.AES.decrypt(encryptedMessage, key).toString(
    CryptoJS.enc.Utf8
  );

  document.getElementById("decrypted-message").innerHTML =
    "Decrypted Message: " + decrypted;
}
