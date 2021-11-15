import React, { useState } from 'react';
import Button from "../common/button";
import Fade from "react-reveal/Fade";
import Navbar from "../common/navbar";
import ImxClaimButton from "../ImmutableX/imxClaimButton"

export default function ClaimPageHero() {
    const [menu, setmenu] = useState(false);
    return (
        <Fade bottom>
          <div
              style={{ backgroundImage: `url(images/ClaimPageHeroBackground.png)` }}
              className="bg-cover bg-center h-full w-full  z-10"
        >
            <div className="mx-auto container relative z-10 px-4 xl:px-0">
            <Navbar menu={menu} setmenu={setmenu} />
              <div className="pt-20 md:pt-60"></div>
              <div className="flex flex-col items-center justify-center mx-auto container px-4 xl:px-0 border-solid border-2 border-magenta w-11/12 md-7/12 lg:w-5/12 xl:w-1/3 h-434px bg-black py-8">
                <p className="text-white text-xl md:text-3xl lg:text-4xl xl:text-xl">
                    PIXEL DEGENS
                </p>
                <p className="text-white text-2xs sm:text-xs md:text-sm pb-8 f-f-r mt-8">
                  CLAIM YOUR PIXEL DEGENS
                </p>
                <p className="text-white text-2xs sm:text-xs md:text-sm pb-8 f-f-r">
                    PIXEL DEGEN CONTRACT: 0xb2aF...L7V4
                </p>
                <p className="text-white text-2xs sm:text-xs md:text-sm pb-8 f-f-r">
                    CLAIMABLE AMOUNT: 10
                </p>
                <p className="text-white text-2xs sm:text-xs md:text-sm pb-8 f-f-r">
                    WALLET: 0xb5aG...H7B6
                </p>
                <ImxClaimButton />
              </div>
              <div className="pb-20 md:pb-60"></div>
           </div>
          </div>
        </Fade>
  );
}
