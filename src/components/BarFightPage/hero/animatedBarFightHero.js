import React, { useRef, useState, useEffect } from "react";
import Vimeo from '@u-wave/react-vimeo';

function AnimatedBarFightHero() {
  return (
    <div className="">
      <Vimeo
        video="https://vimeo.com/641999629/2773885f62"
        autoplay={true} controls={true} loop={true} background={true} responsive={true} width="2000px"
      />
      <div className="inline-block flex z-40 flex-col items-center justify-center mx-auto container text-white f-f-r pl-4 pr-4 max-w-screen-sm w-full" style={{ marginLeft: "0 auto", marginRight: "0 auto",  marginTop: "-450px"}}>
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
  );
}

export default AnimatedBarFightHero;
