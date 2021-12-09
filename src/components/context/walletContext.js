import { createContext } from 'react';

const WalletContext = createContext({ walletId: "default", setWalletId: () => { }});

export default WalletContext;