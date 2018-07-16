import CryptoAddressValidator from '../src/crypto_address_validator'

//check BTC address
test('Test checkBTC with valid address', () => {
  expect(CryptoAddressValidator.validate("1Q1pE5vPGEEMqRcVRMbtBK842Y6Pzo6nK9", "btc")).toEqual(true);
});
test('Test checkBTC with valid address', () => {
  expect(CryptoAddressValidator.validate("1AGNa15ZQXAZUgFiqJ2i7Z2DPU2J6hW62i", "btc")).toEqual(true);
});
test('Test checkBTC with bad digest', () => {
  expect(CryptoAddressValidator.validate("1Q1pE5vPGEEMqRcVRMbtBK842Y6Pzo6nJ9", "btc")).toEqual(false); // bad digest
});
test('Test checkBTC with invalid character', () => {
  expect(CryptoAddressValidator.validate("1AGNa15ZQXAZUgFiqJ2i7Z2DPU2J6hW62I", "btc")).toEqual(false); // invalid character
});
test('Test checkBTC with insufficient number of characters', () => {
  expect(CryptoAddressValidator.validate("i55j", "btc")).toEqual(false); // insufficient number of characters
});
//check ETH address
test('Test checkETH with valid address', () => {
  expect(CryptoAddressValidator.validate("0x52908400098527886E0F7030069857D2E4169EE7", "eth")).toEqual(true); // all caps
});
test('Test checkETH with valid address', () => {
  expect(CryptoAddressValidator.validate("0xde709f2102306220921060314715629080e2fb77", "eth")).toEqual(true); // all lower
});
test('Test checkETH with valid address', () => {
  expect(CryptoAddressValidator.validate("0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed", "eth")).toEqual(true); // all normal
});
test('Test checkETH with invalid character', () => {
  expect(CryptoAddressValidator.validate("0x27b1fdb04752bbc536007a920d24acb04zx61c26", "eth")).toEqual(false); // invalid character
});
test('Test checkETH with many characters', () => {
  expect(CryptoAddressValidator.validate("0x27b1fdb04752bbc536007a920d24acb04zx61c2623", "eth")).toEqual(false); // more than 40 symbols
});


//test BTC address from https://chain.so/address/btcfund
test('Test checkBTC with insufficient number of characters', () => {
  expect(CryptoAddressValidator.validate("1HTL18EnUAgCjb8n2x3NN7bmVUmmDcnzBZ", "btc")).toEqual(true); // insufficient number of characters
});

//test ETH address from http://faucet.ropsten.be:3001/
test('Test checkETH with many characters', () => {
  expect(CryptoAddressValidator.validate("0x1dEC11495b29B1820FD11151f3984DDB1C13484f", "eth")).toEqual(true);
});

