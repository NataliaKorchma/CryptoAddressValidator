document.getElementById('btc_button').addEventListener('click', function () {
  var address = document.getElementById('btc_address').value;

  alert(CryptoAddressValidator.validate(address, 'btc'));
});

document.getElementById('eth_button').addEventListener('click', function () {
  var address = document.getElementById('eth_address').value;

  alert(CryptoAddressValidator.validate(address, 'eth'));
});

