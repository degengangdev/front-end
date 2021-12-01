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
    <div className="h-24"></div>
      <div className="divbackground" style={{ backgroundImage: `url(images/home-bg.png)` }}>
        <div className=".divmiddlecontent flex flex-col items-center justify-center mx-auto container text-white f-f-r pt-8 xs:pt-24 md:pt-48 lg:pt-64 pl-4 pr-4">
          <img className="pt-16 md:pt-0 4/5 xs:2/3 xl:w-1/2 z-20" src="images/DegenLargePinkLogo.png" alt="img" /><br />
          <p className="pt-4 text-center z-20">The biggest bunch of degenerates on the blockchain. 7,000 strong and ready to take over.</p>
          <a className="mt-16 md:mt-48 lg:mt-96 xl:mt-48 mb-12 " href="http://discord.gg/VyxVr4byxH" target="__blank">
            <Button title="LFG" className="w-3/4" />
          </a>
        </div>
      </div>
    </>
  //  <div className="bg-no-repeat bg-cover bg-center
  //              bg-green-200 w-full h-auto border-2 pt-96" style={{ backgroundImage: `url(images/home-bg.png)` }}>
  //  <div style={{ height: "1024px" }}></div>
  //  {/*  <Vimeo className="mb-6"*/}
  //  {/*    video="https://vimeo.com/647780689/1c563561c9"*/}
  //  {/*    autoplay={true} controls={true} loop={true} background={true} responsive={true} width="2000px"*/}
  //    {/*  />*/}
  //    <div className="inline-block flex flex-col items-center justify-center mx-auto container text-white f-f-r pl-4 pr-4 max-w-screen-sm w-full" style={{ marginLeft: "0 auto", marginRight: "0 auto",  marginTop: "-800px"}}>
  //      <img className="pt-16 md:pt-0 w-2/3 md:w-full z-20" src="images/DegenLargePinkLogo.png" alt="img" /><br />
  //      <p className="pt-12 text-center z-20">The biggest bunch of degenerates on the blockchain. 7,000 strong and ready to take over.</p>
  //      <a className="mt-12 mb-12 " href="http://discord.gg/VyxVr4byxH" target="__blank">
  //        <Button title="LFG" className="w-3/4" />
  //      </a>
  //    </div>
  //  </div>
  );
}

export default AnimatedHero;
