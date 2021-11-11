import React from "react";
import Fade from "react-reveal/Fade";
function Index() {
  return (
      <div
        id="frens"
        style={{ backgroundImage: `url(images/third.png)` }}
        className="bg-cover bg-center h-full w-full py-10 md:py-14 lg:py-24"
      >
        <div className="flex items-center justify-center flex-col mx-auto container">
          <div className="lg:flex-row flex flex-col items-center justify-between lg:space-x-5 xl:space-x-10 w-11/12">
            <div className="lg:w-1/2">
              <p className="text-white text-xl md:text-3xl lg:text-4xl xl:text-41 uppercase">
                {" "}
                Exclusive benefits & membership
              </p>
              <p className="text-white text-base md:text-lg lg:text-2xl f-f-r mt-8">
                DEGEN GANG Member NFTs are beautifully designed collectible
                characters that also serve as your ticket to exclusive content.
                We have loads of awesome features in the pipeline which we can’t
                wait to share with you.
              </p>
            </div>

            <img
              alt=""
              className="mt-10 lg:mt-0  sm:w-1/2 lg:w-1/3"
              src="images/EXCLUSIVE BENEFITS - Image.jpg"
            />
          </div>
          <div className="lg:flex-row flex flex-col flex-col-reverse items-center justify-between lg:space-x-5 xl:space-x-10 w-11/12 mt-28">
            <img alt="" className="mt-10 lg:mt-0  sm:w-1/2 lg:w-1/3" src="images/COMMERCIAL USAGE - Image.jpg" />

            <div className="lg:w-1/2">
              <p className="text-white text-xl md:text-3xl lg:text-4xl xl:text-41 uppercase">
                {" "}
                commercial usage rights
              </p>
              <div className="text-white text-base md:text-lg lg:text-2xl f-f-r mt-8">
                Ownership and commercial usage rights are given to the consumer
                over their DEGEN GANG NFT.
                <p className="mt-5">You own it Frens.</p>
              </div>
            </div>
          </div>
          <div className="lg:flex-row flex flex-col items-center justify-between lg:space-x-5 xl:space-x-10 w-11/12 mt-28">
            <div className="lg:w-1/2">
              <p className="text-white text-xl md:text-3xl lg:text-4xl xl:text-41 uppercase">
                {" "}
                Benefits & FUTURE
              </p>
              <div className="text-white text-base md:text-lg lg:text-2xl f-f-r mt-8">
                <p>
                  During development we plan on holding plenty of giveaways and
                  competitions. Winners will be awarded as Early Degen Gang
                  Members on our Discord Server. More giveaways will be announced post launch
                  too.
                </p>
                <p className="mt-4">
                  During the sale we will create a community liquidity pool
                  where the community of DEGEN GANG Members will vote on how to
                  spend funds.
                </p>
              
              </div>
            </div>

            <img alt="" className="mt-10 lg:mt-0  sm:w-1/2 lg:w-1/3" src="images/BENEFITS & FUTURE - image.jpg" />
          </div>
        </div>
      </div>
  );
}

export default Index;
