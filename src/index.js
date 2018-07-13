import sha256 from 'crypto-js/sha256'
import CryptoJS from 'crypto-js'

export default function checkBTC(address) {
  if (!/^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/.test(address)) return false;

  const BUFFER_LENGTH  = 25;
  const DIGIT58 = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
  let buffer = new Uint8Array(BUFFER_LENGTH);

  for (let i = 0; i < address.length; i++) {
    const NUM = DIGIT58.indexOf(address[i]);

    // buffer = buffer * 58 + NUM
    let carry = 0;

    for (let j = BUFFER_LENGTH - 1; j >= 0; --j) {
      // NUM < 256, so we just add it to last
      const RESULT = buffer[j] * 58 + carry + (j === BUFFER_LENGTH - 1 ? NUM : 0);

      buffer[j] = RESULT % (1 << 8);
      carry = Math.floor(RESULT / (1 << 8));
    }
  }

  // check whether sha256(sha256(buffer[:-4]))[:4] === buffer[-4:]
  const hashedWords1 = sha256(CryptoJS.lib.WordArray.create(buffer.slice(0, 21)));
  const hashedWords = sha256(hashedWords1).words;

  // get buffer[-4:] with big-endian
  const lastWordAddress = new DataView(buffer.slice(-4).buffer).getInt32(0, false);
  const expectedLastWord = hashedWords[0];
  return lastWordAddress === expectedLastWord;
}
