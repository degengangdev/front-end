import React, { useRef, useState, useEffect } from "react";
import Button from "../common/button";
import { scroller } from "react-scroll";

function AnimatedHero() {

  const scrollToAboutSection = () => {
    scroller.scrollTo("litepapersection", {
      duration: 200,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <>
      <div className="pt-12 mb-4">
        <video id="background-video" className="w-full" autoPlay loop muted poster="images/home-bg.png">
          <source src="images/home-bg-hd.mp4" type="video/mp4" />
        </video>
        <div className="overlay">
          <div className="w-full flex flex-col items-center justify-center mx-auto text-white f-f-r pl-4 pr-4">
            <img className="pt-16 md:pt-0 sm:w-2/3 xl:w-1/2 z-20" src="images/DegenLargePinkLogo.png" alt="img" /><br />
            <div className="p-2 backdrop-filter backdrop-blur-lg">
              <p className="pt-4 text-center text-lg z-20">The biggest bunch of degenerates on the blockchain.</p>
              <p className="pt-4 text-center text-lg z-20">7,000 strong and ready to take over.</p>
            </div>
            <Button tailwind="mt-16 mb-12" title="LFG" onClickhandler={scrollToAboutSection}></Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AnimatedHero;
