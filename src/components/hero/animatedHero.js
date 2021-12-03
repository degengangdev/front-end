import React, { useRef, useState, useEffect } from "react";
import Button from "../common/button";
import Vimeo from '@u-wave/react-vimeo';

import useTotalSupply from "../../hooks/useTotalSupply";
function AnimatedHero() {
  const [menu, setmenu] = useState(false);
  const totalSupply = useTotalSupply();

  const sliderRef = useRef();
  const gotoNext = () => {
    sliderRef.current.slickNext();
  };
  const gotoPrev = () => {
    sliderRef.current.slickPrev();
  };
  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    cssEase: "linear",
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
  };
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [poolActive, setPoolActive] = useState(false);
  const timestamp = 1632416400000;

  const leadingZero = (num) => {
    return num < 10 && num > 0 ? `0 ${num}` : num;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (timestamp - Date.now() < 0) {
        setPoolActive(false);
      } else {
        setPoolActive(true);
        const timee = timestamp - Date.now();
        const time = Math.abs(timee);
        const dayss = Math.floor(time / (1000 * 60 * 60 * 24));
        const hourss = Math.floor((time / (1000 * 60 * 60)) % 24);
        const minutess = Math.floor((time / 1000 / 60) % 60);
        const secondss = Math.floor((time / 1000) % 60);
        setDays(dayss);
        setHours(hourss);
        setMinutes(minutess);
        setSeconds(secondss);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [timestamp]);
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
            <a className="mt-16 mb-12 " href="http://discord.gg/VyxVr4byxH" target="__blank">
              <Button title="LFG" className="w-3/4" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default AnimatedHero;
