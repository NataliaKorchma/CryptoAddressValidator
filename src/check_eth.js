export default function checkETH(address) {
  const ETH_REGXP = /^0x[a-fA-F0-9]{40}$/;

  return ETH_REGXP.test(address);
}