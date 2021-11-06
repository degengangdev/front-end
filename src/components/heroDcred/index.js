import React from "react";

function Index() {
    return (
      <div
        style={{ backgroundImage: `url(images/dcredbackground.png)` }}
        className="bg-cover bg-center h-full w-full py-24 md:py-32 lg:py-40 xl:py-60 z-10">
        <div className="flex flex-col items-center justify-center mx-auto container ">
          <p className="text-white text-2xl pb-16">
              $Dcred
          </p>
        </div>
      </div>
  );
}

export default Index;
