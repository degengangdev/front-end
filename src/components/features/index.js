import React from "react";
import Fade from "react-reveal/Fade";
import Button from "../common/button";

function Index() {
  return (
      <div
        id="keyfeatures"
        style={{ backgroundImage: `url(images/KeyFeatures.png)` }}
        className="bg-cover bg-center h-full w-full py-16 md:py-24 xl:py-32 mb-4 mt-4"
          >
              <div className="flex flex-col items-center justify-center mx-auto container p-1 pb-8 text-white f-f-r">
                  <p className="text-white text-large font-wraith text-2xl">KEY FEATURES</p>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-0  max-w-screen-lg ">
                      <div >
                          <img
                              alt=""
                              className=""
                              src="images/FeaturesDegenBar.png"
                          />
                          <p className="ml-16 mr-16 -mt-16">
                              OG Degens. These Degens were here from the start and are the only ones that can
                              generate 10 $DCRED a day.

                              $DCRED can be used to name a Degen, write a lore for them, or even breed a beast...
                          </p>
                      </div>
                      <div >
                          <img
                              alt=""
                              className=""
                              src="images/FeaturesRewards.png"
                          />
                          <p className="ml-16 mr-16 -mt-16">
                              Pixel Degens lurk on the
                              Immutable X platform and like to fuck shit up in the bar.

                              These angry degens can be used in BAR FIGHTS to earn you $DEGEN for taking names and kicking ass.
                          </p>
                      </div>
                      <div >
                          <img
                              alt=""
                              className=""
                              src="images/FeaturesBarFights.png"
                          />
                          <p className="ml-16 mr-16 -mt-16">
                              A science experiment that went horribly wrong and now we have beasts to contend with...

                              There is still much to learn of these creatures and their powers.


                          </p>
                      </div>
                  </div>
                  <p className="text-white text-large font-wraith text-2xl mt-16">PARTNERS</p>
                  <img
                      className="w-1/2 md:w-1/4 xl:pr-10 mt-16"
                      src="/images/NetVrkLogo.png"
                      alt=""
                  />
                  <p className="text-white text-large font-wraith text-2xl mt-16">Team</p>
                  <div className="max-w-screen-md pt-16 text-center">
                      <p className="ml-16 mr-16">
                          The team is anonymous, however, have a combined experience of over 30 years in blockchain.
                      </p>
                  <p className="ml-16 mr-16 text-center mt-8">
                          With extensive backgrounds in marketing, business strategy, tech, finance and the art
                          sectors, Degen Gang is poised to become a potential leader on the charge into the NFT P2E gaming space.
                          There is still much to learn of these creatures and their powers.
                      </p>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-5 gap-2  max-w-screen-lg pt-24">
                      <div >
                          <img
                              alt=""
                              className=""
                              src="images/OverlordDegen.png"
                          />
                      </div>
                      <div >
                          <img
                              alt=""
                              className=""
                              src="images/DrDegen.png"
                          />
                      </div>
                      <div >
                          <img
                              alt=""
                              className=""
                              src="images/FrugLife.png"
                          />
                      </div>
                      <div >
                          <img
                              alt=""
                              className=""
                              src="images/SkeletonPrince.png"
                          />
                      </div>
                      <div >
                          <img
                              alt=""
                              className=""
                              src="images/WinnDix.png"
                          />
                      </div>
                </div>

              </div>
      </div>
  );
}

export default Index;
