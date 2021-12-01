import React, { useRef, useState, useEffect } from "react";
import Vimeo from '@u-wave/react-vimeo';

function AnimatedBarFightHero() {
  return (
    <>
      <div >
        <div className="hidden sm:block ">
          <div className="sm:absolute w-full flex flex-col items-center justify-center mx-auto text-white f-f-r pt-16 pl-4 pr-4">
            <img
              className="w-1/2"
              src="images/BARFIGHTS-TrasparentBKG.png"
              alt="main"
            />
            <p className="text-white text-2xl md:text-28 py-2  text-center ">
              The First Virtual Fight Club for Web 3.0
            </p>
          </div>
        </div>
        <video id="background-video" className="w-full" autoPlay loop muted poster="images/barfights-bg.png">
          <source src="images/barfights-bg.mp4" type="video/mp4" />
        </video>
        <div className="sm:hidden flex flex-col items-center justify-center mx-auto container text-white f-f-r xs:pt-24 md:pt-48 lg:pt-64 pl-4 pr-4">
          <img
            className="md:w-3/4"
            src="images/BARFIGHTS-TrasparentBKG.png"
            alt="main"
          />
          <p className="text-white text-2xl md:text-28 py-2  text-center ">
            The First Virtual Fight Club for Web 3.0
          </p>
        </div>
      </div>
    </>
  );

  //  return (
  //    <div className="">
  //      <video id="background-video" className="w-full" autoPlay loop muted poster="images/barfights-bg.png">
  //        <source src="images/barfights-bg.mp4" type="video/mp4" />
  //      </video>
  //      <div className="inline-block flex z-40 flex-col items-center justify-center mx-auto container text-white f-f-r pl-4 pr-4 max-w-screen-sm w-full" style={{ marginLeft: "0 auto", marginRight: "0 auto",  marginTop: "-450px"}}>
  //        <img
  //          className="md:w-3/4"
  //          src="images/BARFIGHTS-TrasparentBKG.png"
  //          alt="main"
  //        />
  //        <p className="text-white text-2xl md:text-28 py-2  text-center ">
  //          The First Virtual Fight Club for Web 3.0
  //        </p>
  //      </div>
  //    </div>
  //  );
}

export default AnimatedBarFightHero;
