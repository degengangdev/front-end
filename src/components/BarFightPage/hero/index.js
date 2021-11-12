import React, { useState } from "react";

function Index() {
  return (
    <div
      style={{ backgroundImage: `url(images/BarFightsBackground.png)` }}
      className="xl:bg-cover bg-center pb-10 md:pb-20 md:h-full w-full " >
        <div className="mx-auto container relative z-10 px-4 xl:px-0">
          <div className="flex flex-col justify-center items-center pt-14  w-full h-full">
            <div className="w-full md:w-10/12 lg:w-9/12 xl:w-2/3">
              <div className="flex flex-col justify-center items-center">
                <img
                  className="w-8/12"
                  src="images/BARFIGHTS-TrasparentBKG.png"
                  alt="main"
                />
                <p className="text-white text-2xl md:text-28 py-8  text-center ">
                  The First Virtual Fight Club for Web 3.0
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Index;
