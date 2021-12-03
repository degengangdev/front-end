import React from "react";
import Fade from "react-reveal/Fade";
import Button from "../common/button";

function Index() {
  return (
    <div
      id="roadmap"
      style={{ backgroundImage: `url(images/RoadmapBackground.png)` }}
      className="bg-cover bg-center h-full w-full md:py-24 xl:py-32"
    >
      <div className="flex flex-col items-center justify-center mx-auto container p-1 pb-8 text-white f-f-r lg:pr-8">
        <p className="text-white text-large font-wraith text-2xl text-center mt-8">POST LAUNCH ROADMAP</p>
        <div className="grid grid-cols-1 md:grid-cols-7 gap-8  pl-0 md:pl-8 max-w-screen-lg pt-16">
          <div className="md:col-span-4 pl-6 md:pl-0">
            <p className="pl-12 w-64 text-white mt-8 font-wraith text-2xl pt-2 pb-4" style={{ backgroundImage: `url(images/PhaseBackground.png)` }}>
              Phase 1
            </p>
            <p className="text-white mt-8 text-2xl">
              Degen Street Cred Launch & DAO
            </p>
            <p className="text-white mt-8">
              Degen Street Cred, $DCRED, is our governance token that will give degens the power to influence decisions and decide how the ecosystem should further develop.
            </p>
          </div>
          <div className="md:col-span-3 md:mt-20 flex flex-col items-center justify-center">
            <img
              className="mt-8 w-72 xl:pr-10 "
              src="/images/phase1.png"
              alt=""
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-7 gap-8  pl-0 md:pl-8 max-w-screen-lg pt-16">
          <div className="md:col-span-3 mt-20md:mt-20 flex flex-col items-center justify-center hidden md:block">
            <img
              className="mt-6 w-72 lg:pr-5 xl:pr-10 lg:ml-24 mt-16"
              src="/images/phase2.png"
              alt=""
            />
          </div>
          <div className="md:col-span-4 pl-6 md:pl-0">
            <p className="pl-12 w-64 text-white mt-8 font-wraith text-2xl pt-2 pb-4" style={{ backgroundImage: `url(images/PhaseBackground.png)` }}>
              Phase 2
            </p>
            <p className="text-white mt-8 text-2xl">
              Activate Beast Mode ...
            </p>
            <p className="text-white mt-8">
              There are rumours of evil scientists selling beasts in the degen labs. It will cost you some $DCRED and you may not like what you find...Activate Beast Mode?
            </p>
          </div>
          <div className="md:col-span-3 md:mt-20 flex flex-col items-center justify-center block md:hidden">
            <img
              className="w-72 mt-6 lg:pr-5 xl:pr-10"
              src="/images/phase2.png"
              alt=""
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-7 gap-8  pl-0 md:pl-8 max-w-screen-lg pt-16">
          <div className="md:col-span-4 pl-6 md:pl-0">
            <p className="pl-12 w-64 text-white mt-8 font-wraith text-2xl pt-2 pb-4" style={{ backgroundImage: `url(images/PhaseBackground.png)` }}>
              Phase 3
            </p>
            <p className="text-white mt-8 text-2xl">
              BAR FIGHTS V1 & DEGEN DOLLA
            </p>
            <p className="text-white mt-8">
              The first virtual fight club for web 3.0 is open for business. The first rule of fight club is to tell everyone you know about fight club.
            </p>
          </div>
          <div className="md:col-span-3 md:mt-20 flex flex-col items-center justify-center">
            <img
              className="mt-6 w-72 lg:pr-5 xl:pr-10 "
              src="/images/phase3.png"
              alt=""
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-7 gap-8  pl-0 md:pl-8 max-w-screen-lg">
          <div className="md:col-span-3 md:mt-20 flex flex-col items-center justify-center hidden md:block  lg:ml-24">
            <img
              className="mt-20 w-72 lg:pr-5 xl:pr-10 -mt-2"
              src="/images/phase4.png"
              alt=""
            />
          </div>
          <div className="md:col-span-4 pl-6 md:pl-0">
            <p className="pl-12 w-64 text-white mt-8 font-wraith text-2xl pt-2 pb-4" style={{ backgroundImage: `url(images/PhaseBackground.png)` }}>
              Phase 4
            </p>
            <p className="text-white mt-8 text-2xl">
              DEGEN BAR AND BAR FIGHTS V2
            </p>
            <p className="text-white mt-8">
              Enter the virtual reality metaverse on NetVRk and get yourself a drink at the Degen Bar. This is Degen Gang HQ and simply where you need to be.
            </p>
          </div>
          <div className="md:col-span-3 flex flex-col items-center justify-center block md:hidden">
            <img
              className="mt-20 w-72 lg:pr-5 xl:pr-10"
              src="/images/phase4.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
