import React, { useState } from 'react';
import Button from "../common/button";
import Fade from "react-reveal/Fade";
import Navbar from "../common/navbar";
import ImxClaimButton from "../ImmutableX/imxClaimButton"
import { pixelDegenContractId } from '../ImmutableX//imxConfig'

export default function ClaimPageHero() {
  const [menu, setmenu] = useState(false);
  const [walletId, setWalletId] = useState("");
  const [canClaim, setCanClaim] = useState(false);
  const [claimMessage, setClaimMessage] = useState("");
  return (
    <Fade bottom>
      <div
        style={{ backgroundImage: `url(images/ClaimPageHeroBackground.png)` }}
        className="bg-cover bg-center h-full w-full z-10"
      >
        <div className="mx-auto container relative z-10 px-4 xl:px-0">
          <Navbar menu={menu} setmenu={setmenu} />
          <div className="pt-20 md:pt-60"></div>
          <div className="flex flex-col items-center justify-center mx-auto container px-4 xl:px-0 border-solid border-2 sm:11/12 md-7/12 lg:w-5/12 xl:w-1/3 py-8 bg-black">
            <p className="text-white text-xl md:text-3xl lg:text-3xl xl:text-xl -mt-24 sm:mt-0">
              PIXEL DEGENS
            </p>
            {claimMessage == "" ?
              <>
                <p className="text-white text-2xs sm:text-xs md:text-sm pb-8 f-f-r mt-8">
                  CLAIM YOUR PIXEL DEGENS
                </p>
              </> :
              <>
                <p className="text-center px-8 text-degenPink text-2xs sm:text-xs md:text-sm pb-8 f-f-r mt-8">
                  {claimMessage}
                </p>
              </>
            }
            <p className="text-white text-2xs sm:text-xs md:text-sm pb-8 f-f-r">
              PIXEL DEGEN CONTRACT: {pixelDegenContractId.substr(0, 5) + " ... " + pixelDegenContractId.substr(pixelDegenContractId.length - 5)}
            </p>
            {!canClaim ?
              <></> :
              <>
                <p className="text-white text-2xs sm:text-xs md:text-sm pb-8 f-f-r">
                  CLAIMABLE AMOUNT: 10
                </p>
              </>
            }
            {walletId == "" ?
              <></> :
              <>
                <p className="text-white text-2xs sm:text-xs md:text-sm pb-8 f-f-r">
                  WALLET: {walletId}
                </p>
              </>
            }
            <ImxClaimButton onSetCanClaim={setCanClaim} onSetWallet={setWalletId} onSetClaimMessage={setClaimMessage} />
          </div>
          <div className="pb-20 md:pb-60"></div>
        </div>
      </div>
    </Fade>
  );
}
