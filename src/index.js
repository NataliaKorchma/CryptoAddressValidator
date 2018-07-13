import sha256 from 'sha256'
import Base58 from 'base-58'

export default function checkBTC(address) {
  let decoded;

  try {
    decoded = Base58.decode(address);
  } catch (e) {
    return false;
  }

  decoded = String.fromCharCode.apply(null, decoded);  //Buffer to string

  if (decoded.length !== 25) {
    return false;
  }

  let length = decoded.length;
  let cksum = decoded.slice(length - 4, length);
  let body = decoded.slice(0, length - 4);

  let good_cksum = sha256.x2(body).substr(0,4);
  return cksum === good_cksum;
}
