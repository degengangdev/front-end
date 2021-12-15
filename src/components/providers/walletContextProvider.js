import React, { createContext, useState } from 'react'

export const WalletContext = createContext();

export const WalletContextProvider = ({ children }) => {

  const [walletDetails, setWalletDetails] = useState({ walletId: "", walletIdString: "", numClaimablePixelDegens: 0, claimablePixelDegens: "", claimPixelDegensMessage: "" });

  return (
    <WalletContext.Provider value={[walletDetails, setWalletDetails]}>
      {children}
    </WalletContext.Provider>
  )
}

export default WalletContextProvider;