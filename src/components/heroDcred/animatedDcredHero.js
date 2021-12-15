import React, { useRef, useState, useEffect } from "react";

function AnimatedDcredHero() {
  return (
    <>
      <div className="pt-12 mb-6">
        <video id="background-video" className="w-full" autoPlay loop muted poster="images/dcred-bg.png">
          <source src="images/dcred-bg-hd.mp4" type="video/mp4" />
        </video>
        <div className="overlay dcred-overlay">
          <div className="w-full flex flex-col items-end justify-center mx-auto text-white f-f-r pl-4 pr-4 lg:pr-36 z-20">
            <div className="w-full sm:ml-8 sm:mr-8 sm:w-80 lg:w-96 border-2 border-purpleBrand bg-black pt-2  z20">
              <div className="flex flex-col items-center justify-center mx-auto text-xs lg:text-sm font-robmono p-1 pb-8 pl-4 pr-4 pt-2 z-20">
                <span className="font-wraith z-20">What is $Dcred?</span>
                <span className="mt-2 lg:pt-6 text-center z-20">Degen Street Cred, $DCRED, is our governance token that will give degens the power to influence decisions and decide how the ecosystem should further develop.</span>
                <span className="text-xs lg:text-sm z-20">
                  <p className="mt-4 lg:pt-8 z-20 font-wraith">Coming Soon</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AnimatedDcredHero;
