import CryptoAddressValidator from '../src/crypto_address_validator'

document.getElementById('btc_button').addEventListener('click', function () {
  var address = document.getElementById('btc_address').value;

  alert(CryptoAddressValidator.validate(address, 'btc'))
})
