import React from "react";

function Index() {
    return (
        <div>
            <div
            style={{ backgroundImage: `url(images/degenstreetcred.png)` }}
                className="bg-cover bg-center h-full w-full py-4 md:py-10 lg:py-20 xl:py-20 z-10">
                <div className="flex flex-col items-center justify-center mx-auto container p-1 pb-8 text-white f-f-r pl-8 max-w-screen-md">
                    <p className="font-wraith text-lg md:text-2xl">DEGEN STREET CRED</p>
                    <p className="font-wraith text-lg md:text-2xl">$DCRED</p>
                    <p className="pt-8">As with any gang, the longer you're in, the more you contribute and the more influential you are, you gain street cred.</p>
                    <p className="pt-8">Degen Street Cred, $DCRED, is our governance token that will give degens the power to influence decisions and decide how the ecosystem should further develop.</p>
                    <img
                        alt=""
                        className="pt-12"
                        src="images/degenganglogocircle.png"
                    />

                </div>
            </div>
      </div>
  );
}

export default Index;
