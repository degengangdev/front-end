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
    <div className="">
      <Vimeo
        video="https://player.vimeo.com/video/644097813?h=2fefa73ddd&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        autoplay={true} controls={true} loop={true} background={true} responsive={true} width="2000px"
      />
      <div className="inline-block flex flex-col items-center justify-center mx-auto container text-white f-f-r pl-4 pr-4 max-w-screen-sm w-full" style={{ marginLeft: "0 auto", marginRight: "0 auto",  marginTop: "-450px"}}>
        <img className="pt-16 md:pt-0 w-2/3 md:w-full z-50" src="images/DegenLargePinkLogo.png" alt="img" /><br />
        <p className="pt-12 text-center z-50">The biggest bunch of degenerates on the blockchain. 7,000 strong and ready to take over.</p>
        <a className="mt-12 mb-12 " href="http://discord.gg/VyxVr4byxH" target="__blank">
          <Button title="LFG" className="w-3/4" />
        </a>
      </div>
    </div>
  );
}

export default AnimatedHero;
