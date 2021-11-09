import React from "react";
import Button from "../common/button";

function Index() {
    return (
        <div>
            <div
            style={{ backgroundImage: `url(images/dcredbackground.png)` }}
            className="bg-cover bg-center h-full w-full py-24 md:py-32 lg:py-40 xl:py-40 z-10 mb-16">
                <div className="flow-root text-white">
                    <div className="float-right mr-48 dcredbox border-2 border-purpleBrand bg-black pt-4">
                        <div className="flex flex-col items-center justify-center mx-auto container font-robmono p-1 pb-8">
                            <span className="font-wraith">What is $Dcred?</span>
                            <span className="mt-12">Degen Street Cred, $DCRED, is our governance</span>
                            <p>token that will give degens the power to</p>
                            <p className="mt-2">influence decisions and decide how the</p>
                            <p className="mt-2">ecosystem should further develop.</p>
                            <p className="mt-8">$DCRED CONTRACT: 0xb2aF...L7V4</p>
                            <p className="mt-2">CLAIMABLE AMOUNT: 10</p>
                            <p className="mt-2">CURRENT STASH: 450</p>
                            <p className="mt-2">WALLET: 0xb5aG...H7B6</p>
                            <p className="mt-6 font-wraith">
                                <a href="http://bbc.co.uk" target="__blank">
                                    <Button title="Claim" />
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
      </div>
  );
}

export default Index;
