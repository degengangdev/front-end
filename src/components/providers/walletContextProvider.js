import React, { createContext, useState } from 'react'

export const WalletContext = createContext();

export const WalletContextProvider = ({ children }) => {

  const [walletDetails, setWalletDetails] = useState({ walletId: ""});

  return (
    <WalletContext.Provider value={[walletDetails, setWalletDetails]}>
      {children}
    </WalletContext.Provider>
  )
}

export default WalletContextProvider;