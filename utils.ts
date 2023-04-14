import { MetaMask } from '@web3-react/metamask';
import type { Connector } from '@web3-react/types';

export function getName(connector: Connector) {
  if (connector instanceof MetaMask) return 'MetaMask';
  return 'Unknown';
}

export function numberWithCommas(x: number) {
  if (x < 1) return x;
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
