import React, { useRef, useState, useEffect } from "react";
import Vimeo from '@u-wave/react-vimeo';
import ImxClaimButton from "../../components/ImmutableX/imxClaimButton";

import useTotalSupply from "../../hooks/useTotalSupply";
function AnimatedDcredHero() {
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
      <div className="float-left flex flex-col mx-auto container text-white f-f-r pl-36 pr-4 w-full mt-32  md:mt-36  lg:mt-48 " >
        <div className="border-2 border-purpleBrand z-40 md:bg-black pt-0 md:pt-4 -mt-16 md:mb-16 md:ml-64 xl:ml-40rem lg:ml-96 sm:w-96  lg:w-30rem ">
          <div className="flex flex-col items-center justify-center mx-auto container font-robmono p-1 pb-8 pl-4 pr-4 pt-2 text-sm md:text-md">
            <span className="font-wraith">What is $Dcred?</span>
            <span className="mt-2 md:pt-6 xl:mt-12">Degen Street Cred, $DCRED, is our governance token that will give degens the power to</span>
            <p className="mt-2 md:pt-6">influence decisions and decide how the ecosystem should further develop.</p>
            <span className="text-xs lg:text-sm">
              <p className="mt-4 md:pt-8">$DCRED CONTRACT: 0xb2aF...L7V4</p>
              <p className="mt-2">CLAIMABLE AMOUNT: 10</p>
              <p className="mt-2">CURRENT STASH: 450</p>
              <p className="mt-2">WALLET: 0xb5aG...H7B6</p>
            </span>
            <p className="mt-2 md:pt-6 font-wraith">
              <ImxClaimButton />
            </p>
          </div>
        </div>
      </div>
      <Vimeo
        video="https://player.vimeo.com/video/644097813?h=2fefa73ddd&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        autoplay={true} controls={true} loop={true} background={true} responsive={true}
      />
    </div>
  );
}

export default AnimatedDcredHero;
