import React from "react";
function Index() {
  return (
    <div
      id="frens"
      style={{ backgroundImage: `url(images/third.png)` }}
      className="bg-cover bg-center h-full w-full py-10 md:py-14 lg:py-24 -mb-10 z-20 relative"
    >
      <div className="flex items-center justify-center flex-col mx-auto container  ">
        <div className="lg:flex-row flex flex-col items-center justify-between lg:space-x-5 xl:space-x-10 w-11/12">

          <img
            alt=""
            className="mt-10 lg:mt-0  sm:w-1/2 lg:w-5/12"
            src="images/BarFightsCover.png"
          />
          <div className="lg:w-1/2 pt-16 lg:pt-0">
            <p className="text-white text-base md:text-lg text-center lg:text-left f-f-r">
              Bar Fights is a first of its kind arcade NFT game, where you can use your Pixel Degen to fight others and earn our degen dolla!

            </p>
            <p className="text-white text-base md:text-lg text-center lg:text-left f-f-r mt-4">
              Battle it out over 3 rounds - the winner takes all!
            </p>
            <p className="text-white text-base md:text-lg text-center lg:text-left f-f-r mt-4">
              Rank the leaderboards, compete in different leagues based on the strength of your Degen or go in the free for all league for more risk to earn faster! Occasional tournaments with valuable/ exclusive prizes will be made available to those who prove themselves in the bar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
