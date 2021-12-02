import React, { useRef, useState, useEffect } from "react";
import Vimeo from '@u-wave/react-vimeo';

function AnimatedBarFightHero() {
  return (
    <>
      <div className="pt-12">
        <video id="background-video" className="w-full" autoPlay loop muted poster="images/barfights-bg.png">
          <source src="images/barfights-bg.mp4" type="video/mp4" />
        </video>
        <div className="overlay">
          <div className="w-full flex flex-col items-center justify-center mx-auto text-white f-f-r pl-4 pr-4 z20">
            <img className="md:pt-0 sm:w-2/3 xl:w-1/2 z-20" src="images/BARFIGHTS-TrasparentBKG.png" alt="img" /><br />
            <p className="pt-4 text-center z-20">The First Virtual Fight Club for Web 3.0</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AnimatedBarFightHero;
