import React, { useState, useContext } from 'react';
import { WalletContext } from "../providers/walletContextProvider";

export default function TestWalletContext() {
  const [walletDetails, setWalletDetails] = useContext(WalletContext);
  return (
    <div className="pt-24">
      <h1 className="text-white">{walletDetails.walletId}</h1>
      {walletDetails.walletId == "" ?
        <button className="text-white" onClick={() => {
          setWalletDetails({
            walletId: "0x314....59fdf"
          })
        }}>Connect Wallet</button>
        :
        <button className="text-white" onClick={() => {
          setWalletDetails({
            walletId: ""
          })
        }}>Disconnect Wallet</button>
      }
    </div>
  );
}

