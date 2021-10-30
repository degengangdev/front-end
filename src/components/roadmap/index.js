import React from "react";
import Fade from "react-reveal/Fade";

function Index() {
  const data = [
    {
      percent: `10%`,
      para: `- 20 Degen Gang NFTs will be airdropped to early degen adopters to thank them for believing in us (OGs: 15, E-Birds: 5)`,
    },
    {
      percent: `25%`,
      para: `- An Exclusive Degen Gang Merch line will drop, featuring Limited Edition tees, hoodies, hats and more. `,
    },
    {
      percent: `50%`,
      para: `- Community fund of $30,000 is launched. Create, design, or build something that the community values and receive funding from the Degen Gang team. In addition to this 1.5% of the OpenSea fees will go into this community grant forever! `,
    },
    {
      percent: `75%`,
      para: `- We will create a liquidity pool for buying the floor and pushing the Degen Gang brand forward!`,
    },
    {
      percent: `90%`,
      para: ` - A surprise collection of new gang members will be airdropped to all NFT holders!`,
    },
    {
      percent: `100%`,
      para: ` - BAR FIGHTS (NFT GAMING)! The Degen Bar is open and pumping! Get yourself into Bar Fights against other gang members to win rewards and ETH! Play-to-Earn!`,
    }
  ];

  return (
    <Fade bottom>
      <div
        id="roadmap"
        style={{ backgroundImage: `url(images/first.png)` }}
        className="bg-cover bg-center h-full w-full py-14 md:py-20 xl:py-32"
      >
        <div className="mx-auto container flex flex-col items-center justify-center px-4 xl:px-0">
          <div className="xl:w-9/12 2xl:w-8/12">
            <div className="flex flex-col items-center justify-center ">
              <p className="text-white text-xl md:text-3xl lg:text-4xl xl:text-41">
                ROADMAP
              </p>
              <div className="flex flex-col items-center lg:w-11/12 mt-8 xl:mt-10 2xl:mt-12">
                {data.map((item, i) => {
                  return (
                   
                      <div
                        key={i}
                        className="hover:scale-105 transform transition-all duration-300 cursor-pointer ease-in-out bg-black py-4 px-4 md:py-8 md:px-8  xl:px-16 w-full mb-8 relative border-b-8 border-r-8 border-yellowBrand"
                      >
                        <p>
                          <span className="text-yellowBrand text-base md:text-lg lg:text-xl xl:text-2xl">
                            {item.percent}
                          </span>
                          <span className="f-f-r text-sm md:text-base lg:text-lg xl:text-xl  text-white">
                            {item.para}
                          </span>
                        </p>
                      </div>
                    
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Index;
