import React from "react";
import Fade from "react-reveal/Fade";
function Index() {
  return (
    <Fade bottom>
      <div
        id="frens"
        style={{ backgroundImage: `url(images/third.png)` }}
        className="bg-cover bg-center h-full w-full py-10 md:py-14 lg:py-24 -mb-10 z-20 relative"
      >
        <div className="flex items-center justify-center flex-col mx-auto container  ">
          <div className="lg:flex-row flex flex-col items-center justify-between lg:space-x-5 xl:space-x-10 w-11/12">
            <div className="lg:w-1/2">
              <p className="text-white text-base md:text-lg text-center lg:text-left f-f-r">
                Bar Fights is a first of its kind arcade NFT game, where you can
                use your NFT to fight others and earn ETH! Play-to-Earn!
              </p>
              <p className="text-white text-base md:text-lg text-center lg:text-left f-f-r mt-4">
                It all starts in the Degen Bar, from here you can head to the
                Arcade Machine and select Bar Fights from the list of games
                available.
              </p>
            </div>

            <img
              alt=""
              className="mt-10 lg:mt-0  sm:w-1/2 lg:w-5/12"
              src="images/barfight1.png"
            />
          </div>
          <div className="lg:flex-row flex flex-col flex-col-reverse items-center justify-between lg:space-x-5 xl:space-x-10 w-11/12 mt-28">
            <img
              alt=""
              className="mt-10 lg:mt-0  sm:w-1/2 lg:w-5/12"
              src="images/barfight2.png"
            />

            <div className="lg:w-1/2">
              <p className="text-white text-base md:text-lg text-center lg:text-left  f-f-r">
                Once the game is loaded up you will connect your wallet to see
                your Degen Gang NFT fighters! The more NFTs you own the more
                fighters you have available!
              </p>
              <p className="text-white text-base md:text-lg text-center lg:text-left  f-f-r mt-4">
                In the future certain traits from your NFTs will allow you to
                have exclusive weapons or powers/ abilities to be used in the
                game! In-game purchases for more weapons and additional skins
                will also be available in the future!
              </p>
            </div>
          </div>
          <div className="lg:flex-row flex flex-col items-center justify-between lg:space-x-5 xl:space-x-10 w-11/12 mt-28">
            <div className="lg:w-1/2">
              <p className="text-white text-base md:text-lg text-center lg:text-left  f-f-r">
                Feeling confident? Our match making system will pool you against
                another Degen Gang fighter with a similar bet...
              </p>
              <p className="text-white text-base md:text-lg text-center lg:text-left  f-f-r mt-4">
                FIGHT TIME!
              </p>
            </div>

            <img
              alt=""
              className="mt-10 lg:mt-0  sm:w-1/2 lg:w-5/12"
              src="images/barfight3.png"
            />
          </div>
          <div className="lg:flex-row flex flex-col flex-col-reverse items-center justify-between lg:space-x-5 xl:space-x-10 w-11/12 mt-28">
            <img
              alt=""
              className="mt-10 lg:mt-0  sm:w-1/2 lg:w-5/12"
              src="images/barfight4.png"
            />

            <div className="lg:w-1/2">
              <p className="text-white text-base md:text-lg text-center lg:text-left  f-f-r">
                Battle it out over 3 rounds - the winner takes all!
              </p>
              <p className="text-white text-base md:text-lg text-center lg:text-left  f-f-r mt-4">
                Rank the leaderboards, compete in different leagues based on the
                strength of your Degen or go in the free for all league for more
                risk to earn faster! Occasional tournaments with valuable/
                exclusive prizes will be made available to those who prove
                themselves in the bar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Index;
