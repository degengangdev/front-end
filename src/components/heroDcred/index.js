import React, { useState } from "react";
import Button from "../common/button";

function Index() {
    const [menu, setmenu] = useState(false);
    return (
        <div>
            <div
                style={{ backgroundImage: `url(images/DcredBackground.png)` }}
                className="xl:bg-cover bg-center pb-10 md:pb-20 md:h-full w-full">
                <div className="mx-auto container relative z-10 px-4 xl:px-0">
                    <div className="flow-root text-white pt-64">
                        <div className="ml-4 md:float-right xl:mr-64 lg:mr-8 md:mr-20 md:w-1/2 lg:w-1/2 xl:w-1/3 2xl:w-1/3 border-2 border-purpleBrand md:bg-black pt-4 md:max-w-screen-sm mr-4 -mt-16 ">
                            <div className="flex flex-col items-center justify-center mx-auto container font-robmono p-1 pb-8 pl-4 pr-4 pt-2 text-sm md:text-lg">
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
      </div>
  );
}

export default Index;
