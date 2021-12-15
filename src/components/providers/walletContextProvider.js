import React, { createContext, useState } from 'react'

export const WalletContext = createContext();

export const WalletContextProvider = ({ children }) => {

  const [walletDetails, setWalletDetails] = useState(new walletInfo("", "", 0, "", ""));

  return (
    <WalletContext.Provider value={[walletDetails, setWalletDetails]}>
      {children}
    </WalletContext.Provider>
  )
}

export class walletInfo {
  contructor(walletId, walletIdString, numClaimablePixelDegens, claimablePixelDegens, claimPixelDegensMessage) {
    this.walletId = walletId;
    this.walletIdString = walletIdString;
    this.numClaimablePixelDegens = numClaimablePixelDegens;
    this.claimablePixelDegens = claimablePixelDegens;
    this.claimPixelDegensMessage = claimPixelDegensMessage;
  }
}

export default WalletContextProvider;