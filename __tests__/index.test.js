import checkBTC from '../src/index'
import checkETH from '../src/check_eth'

//check BTC address
test('Test checkBTC with valid address', () => {
  expect(checkBTC("1Q1pE5vPGEEMqRcVRMbtBK842Y6Pzo6nK9")).toEqual(true);
});
test('Test checkBTC with valid address', () => {
  expect(checkBTC("1AGNa15ZQXAZUgFiqJ2i7Z2DPU2J6hW62i")).toEqual(true);
});
test('Test checkBTC with bad digest', () => {
  expect(checkBTC("1Q1pE5vPGEEMqRcVRMbtBK842Y6Pzo6nJ9")).toEqual(false); // bad digest
});
test('Test checkBTC with invalid character', () => {
  expect(checkBTC("1AGNa15ZQXAZUgFiqJ2i7Z2DPU2J6hW62I")).toEqual(false); // invalid character
});
test('Test checkBTC with insufficient number of characters', () => {
  expect(checkBTC("i55j")).toEqual(false); // insufficient number of characters
});

//check ETH address
test('Test checkETH with valid address', () => {
  expect(checkETH("0x52908400098527886E0F7030069857D2E4169EE7")).toEqual(true); // all caps
});
test('Test checkETH with valid address', () => {
  expect(checkETH("0xde709f2102306220921060314715629080e2fb77")).toEqual(true); // all lower
});
test('Test checkETH with valid address', () => {
  expect(checkETH("0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed")).toEqual(true); // all normal
});
test('Test checkETH with invalid character', () => {
  expect(checkETH("0x27b1fdb04752bbc536007a920d24acb04zx61c26")).toEqual(false); // invalid character
});
test('Test checkETH with many characters', () => {
  expect(checkETH("0x27b1fdb04752bbc536007a920d24acb04zx61c2623")).toEqual(false); // more than 40 symbols
});