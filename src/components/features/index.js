import React from "react";
import Fade from "react-reveal/Fade";
function Index() {
  return (
    <Fade bottom>
      <div
        id="about"
        style={{ backgroundImage: `url(images/second.png)` }}
        className="bg-cover bg-center h-full w-full py-16 md:py-24 xl:py-32"
      >
        <div className="flex w-full mx-auto container items-center justify-center px-4 xl:px-0">
          <div className="flex flex-col items-center lg:w-10/12 2xl:w-9/12">
            <p className="text-white text-3xl md:text-4xl  lg:text-5xl xl:text-54 text-center w-11/12">
              YOUR UNIQUE DEGEN GANG NFT
            </p>
            <div className="py-10 md:py-14 lg:py-24 text-base md:text-lg lg:text-2xl text-white text-center f-f-r">
              <p>
                Ownership of a DEGEN GANG NFT gives full commercial rights to
                that character.
              </p>
              <p className="mt-4">
                DEGEN GANG members are inspired by collective artworks of
                internet artists. The project is not associated with Matt Furie.
              </p>
            </div>
            <div className="flex flex-col items-center lg:flex-row lg:items-stretch justify-between lg:space-x-7 xl:space-x-10 w-full">
              <img
                className="lg:w-2/5 lg:pr-5 xl:pr-10"
                src="/images/website.gif"
                alt=""
              />
              <div className="flex flex-col items-start lg:w-3/5 xl:w-1/2 mt-8 lg:mt-0 pl-4 lg:pl-0">
                <p className="text-2xl  lg:text-33 text-yellowBrand pb-12 leading-3">
                  Key Features
                </p>
                <ul className="list-disc f-f-r text-yellowBrand text-base md:text-lg lg:text-2xl leading-10">
                  <li> 7,000 DEGEN GANG NFTs</li>
                  <li>UP to 30 DEGEN GANG NFTs Per Transaction </li>
                  <li>0.06 ETH + gas </li>
                  <li>Random Minting</li>
                  <li>
                    5% of sale funds will be used to buy the floor and push the DEGEN GANG brand forward.
                  </li>
                  <li>
                    Gang Members will be revealed shortly after the minting{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Index;
