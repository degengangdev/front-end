import React from "react";

function Index() {
    return (
        <div style={{ backgroundImage: `url(images/brand-colour-1.png)` }}>
            <div className="h-auto w-full py-6 z-10 -mt-16" >
                <div className="flex flex-col items-center justify-center mx-auto container p-1 pb-1 text-white f-f-r">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-0  max-w-screen-lg ">
                        <div >
                            <img
                                alt=""
                                className=""
                                src="images/DegenGenesis.png"
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
                                src="images/PixelDegens.png"
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
                                src="images/BeastDegens.png"
                            />
                            <p className="ml-16 mr-16 -mt-16">
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
