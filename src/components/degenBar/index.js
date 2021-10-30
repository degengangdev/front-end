import React from "react";
import Button from "../common/button";
import Fade from "react-reveal/Fade";
function Index() {
  return (
    <Fade bottom>
      <div id="bar" className="bg-black py-10 md:py-14 lg:py-24 ">
        <div className="mx-auto container flex flex-col items-center justify-center px-4 xl:px-0">
          <div className="xl:w-7/12 2xl:w-3/5">
            <div className="flex flex-col items-center justify-center ">
              <p className="text-white text-xl md:text-3xl lg:text-4xl xl:text-41">
                degen bar
              </p>
              <p className="text-base md:text-lg lg:text-2xl f-f-r mt-8 md:mt-10 lg:mt-14 xl:mt-20 text-center text-white">
                Your DEGEN GANG NFT grants you exclusive entry to our virtual
                DEGEN BAR. From here you will enter our virtual reality
                metaverse on NetVRk, where you can get into BAR FIGHTS (NFT
                Play-to-Earn Gaming), hang out with degens, access the merch
                store and much much more.
              </p>
            </div>
          </div>
          <a href="https://www.netvrk.co/" target="__blank">
            <img
              className="py-6 md:py-14"
              src="images/Netvrk_logo.png"
              alt="netvrk"
            />
          </a>
          <img
            className="w-full h-full  mb-12 md:mb-14 lg:mb-20 xl:mb-28"
            src="images/degenBar.jpg"
            alt=""
          />
          <a href="/">
            <Button title="APE IN" />
          </a>
        </div>
      </div>
    </Fade>
  );
}

export default Index;
