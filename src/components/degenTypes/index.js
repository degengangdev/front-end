import React from "react";

function Index() {
  return (
    <div style={{ backgroundImage: `url(images/brand-colour-1.png)` }}>
      <div className="h-auto w-full py-6 z-10 -mt-12" >
        <div className="flex flex-col items-center justify-center mx-auto container p-1 pb-1 text-white f-f-r">
          <p className="text-white text-large font-wraith text-2xl text-center">Types of Degen</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12  max-w-screen-lg pt-8 ">
            <div className="flex flex-col items-center justify-center mb-12">
              <span className="text-white f-r-r text-md uppercase text-2xl md:text-3xl">Genesis</span>
              <img
                alt=""
                className="mt-4 xl:w-96"
                src="images/genesis.png"
              />
              <p className="mt-6 w-64 h-180px px-2">
                OG Degens. These Degens were here from the start and are the only ones that can
                generate $DCRED daily. $DCRED can be used to name a Degen, write a lore for them, or even breed a beast...
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mb-12">
              <span className="text-white text-md f-r-r uppercase text-2xl md:text-3xl">Pixel Degens</span>
              <img
                alt=""
                className="mt-4 xl:w-96"
                src="images/pixel.png"
              />
              <p className="mt-6 w-64 h-180px px-2">
                Pixel Degens lurk on the
                Immutable X platform and like to fuck shit up in the bar.

                These angry degens can be used in BAR FIGHTS to earn you $DEGEN for taking names and kicking ass.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mb-12 place-items-start">
              <span className="text-white text-md f-r-r uppercase text-2xl md:text-3xl ">Beast Degens</span>
              <img
                alt=""
                className="mt-4 xl:w-96"
                src="images/beast.png"
              />
              <p className="mt-6 w-64 h-180px px-2">
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
