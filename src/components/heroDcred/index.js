import React from "react";
import Button from "../common/button";

function Index() {
    return (
        <div>
            <div
            style={{ backgroundImage: `url(images/dcredbackground.png)` }}
            className="bg-cover bg-center h-full w-full py-8 md:py-10 lg:py-30 xl:py-40 z-10 mb-8">
                <div className="flow-root text-white">
                    <div className="ml-4 md:float-right xl:mr-64 lg:mr-8 md:mr-20 md:w-1/2 lg:w-1/2 xl:w-1/3 2xl:w-1/3 border-2 border-purpleBrand lg:bg-black pt-4 md:max-w-screen-sm ">
                        <div className="flex flex-col items-center justify-center mx-auto container font-robmono p-1 pb-8 pl-4 pr-4 pt-2 text-sm md:text-lg ">
                            <span className="font-wraith">What is $Dcred?</span>
                            <span className="mt-6 xl:mt-12">Degen Street Cred, $DCRED, is our governance token that will give degens the power to</span>
                            <p className="mt-6">influence decisions and decide how the ecosystem should further develop.</p>
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
