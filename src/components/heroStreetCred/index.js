import React from "react";

function Index() {
    return (
        <div>
            <div
                style={{ backgroundImage: `url(images/DegenStreetCred.png)` }}
                className="bg-cover bg-center h-full w-full py-4 md:py-10 lg:py-10 xl:py-10 z-10">
                <div className="flex flex-col items-center justify-center mx-auto container p-1 pb-8 text-white f-f-r pl-8 max-w-screen-sm md:pt-28 md:pb-40">
                    <p className="font-wraith text-md md:text-2xl ">DEGEN STREET CRED</p>
                    <p className="font-wraith text-md md:text-2xl">$DCRED</p>
                    <p className="pt-12">As with any gang, the longer you're in, the more you contribute and the more influential you are, you gain street cred.</p>
                    <p className="pt-12">Degen Street Cred, $DCRED, is our governance token that will give degens the power to influence decisions and decide how the ecosystem should further develop.</p>
                    <img
                        alt=""
                        className="pt-36"
                        src="images/DegenGangLogoCircle.png"
                    />

                </div>
            </div>
      </div>
  );
}

export default Index;
