import React from "react";

function Index() {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(images/BarFightsPixelDegens.png)` }}
        className="bg-cover bg-center h-full w-full py-4 md:py-10 lg:py-10 xl:py-10 z-10">
        <div className="flex flex-col items-center justify-center mx-auto container p-1 pr-6 pb-8 text-white f-f-r pl-8 max-w-screen-sm md:pt-28 md:pb-40">
          <img
            alt=""
            className="pt-36"
            src="images/PixelDegensLogo.png"
          />
          <img
            alt=""
            className="pt-12"
            src="images/ImmutableXLogo.png"
          />
          <p className="font-wraith text-md md:text-lg mt-8">No Gas Fees</p>
          <p className="font-wraith text-md md:text-lg mt-4">Instant Transactions</p>
        </div>
      </div>
    </div>
  );
}

export default Index;
