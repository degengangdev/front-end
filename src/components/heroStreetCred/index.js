import React from "react";

function Index() {
    return (
        <div>
            <div
            style={{ backgroundImage: `url(images/degenstreetcred.png)` }}
                className="bg-cover bg-center h-full w-full py-24 md:py-32 lg:py-40 xl:py-40 z-10">
                <div className="flex flex-col items-center justify-center mx-auto container p-1 pb-8 text-white f-f-r">
                    <p className="font-wraith text-2xl">DEGEN STREET CRED</p>
                    <p className="font-wraith text-2xl">$DCRED</p>
                    <p className="pt-8">As with any gang, the longer you're in, the more</p>
                    <p className="">you contribute and the more influential you are, you gain</p>
                    <p className="">street cred.</p>
                    <p className="pt-8">Degen Street Cred, $DCRED, is our governance token</p>
                    <p className="">that will give degens the power to influence decisions</p>
                    <p className="">and decide how the ecosystem should further develop.</p>
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
