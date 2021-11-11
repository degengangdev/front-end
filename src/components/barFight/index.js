import React from "react";
import Button from "../common/button";
import Fade from "react-reveal/Fade";

function Index() {
  return (
      <div
        id="fight"
        style={{ backgroundImage: `url(images/third.png)`}}
        className="bg-cover bg-center h-full w-full py-10 md:py-14 lg:py-32"
      >
        <div className="flex items-center justify-center flex-col mx-auto container">
          <div className="flex flex-col items-center justify-between w-11/12">
            <div className="lg:w-8/12 xl:w-1/2 text-center">
              <p className="text-white text-xl md:text-3xl lg:text-4xl xl:text-41 leading-8 uppercase">
                {" "}
                BAR FIGHTS
              </p>
              <p className="text-white text-base md:text-lg lg:text-2xl f-f-r mt-8 xl:mt-16">
                Use your NFT to fight others in the Degen Bar! Play-to-Earn
                arcade fighter game where you can win prizes and ETH! Coming
                soon!
              </p>
            </div>
          </div>
          <div className="lg:flex-row flex flex-col  items-center justify-between lg:space-x-5 xl:space-x-5 w-11/12 mt-8 xl:mt-16">
            <img
              alt=""
              className="sm:w-1/2"
              src="images/barfight3.png"
            />
            <img
              alt=""
              className="mt-10 lg:mt-0  sm:w-1/2"
              src="images/barfight4.png"
            />
          </div>
          <a href="barfights" style={{ marginTop: 80}}>
            <Button title="BAR FIGHTS" />
          </a>
        </div>
      </div>
  );
}

export default Index;
