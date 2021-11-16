import React from "react";

function Index() {
  return (
    <div style={{ backgroundImage: `url(images/brand-colour-1.png)` }}>
      <div className="h-auto w-full py-6 z-10 -mt-12" >
        <div className="flex flex-col items-center justify-center mx-auto container p-1 pb-1 text-white f-f-r">
          <p className="text-white text-large font-wraith text-2xl text-center">Types of Degen</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0  max-w-screen-lg pt-8">
            <div className="flex flex-col items-center justify-center mb-12 pt-8">
              <span className="text-white font-wraith text-md">Genesis</span>
              <img
                alt=""
                className="mt-4"
                src="images/genesis.png"
              />
              <p className="ml-16 mr-16 mt-6">
                OG Degens. These Degens were here from the start and are the only ones that can
                generate 10 $DCRED a day.

                $DCRED can be used to name a Degen, write a lore for them, or even breed a beast...
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mb-12 pt-8">
              <span className="text-white font-wraith text-md">Pixel Degens</span>
              <img
                alt=""
                className="mt-4"
                src="images/pixel.png"
              />
              <p className="ml-16 mr-16 mt-6">
                Pixel Degens lurk on the
                Immutable X platform and like to fuck shit up in the bar.

                These angry degens can be used in BAR FIGHTS to earn you $DEGEN for taking names and kicking ass.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mb-12 place-items-start">
              <span className="text-white font-wraith text-md">Beast Degens</span>
              <img
                alt=""
                className="mt-4"
                src="images/beast.png"
              />
              <p className="ml-16 mr-16 mt-6">
                A science experiment that went horribly wrong and now we have beasts to contend with...

                There is still much to learn of these creatures and their powers.


              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
