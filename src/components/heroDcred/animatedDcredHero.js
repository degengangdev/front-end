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
    <>
      <div className="pt-12 mb-6">
        <video id="background-video" className="w-full" autoPlay loop muted poster="images/dcred-bg.png">
          <source src="images/dcred-bg-hd.mp4" type="video/mp4" />
        </video>
        <div className="overlay dcred-overlay">
          <div className="w-full flex flex-col items-end justify-center mx-auto text-white f-f-r pl-4 pr-4 lg:pr-36 z-20">
            <div className="w-full sm:ml-8 sm:mr-8 sm:w-80 lg:w-96 border-2 border-purpleBrand bg-black pt-2  z20">
              <div className="flex flex-col items-center justify-center mx-auto text-xs lg:text-sm font-robmono p-1 pb-8 pl-4 pr-4 pt-2 z-20">
                <span className="font-wraith z-20">What is $Dcred?</span>
                <span className="mt-2 lg:pt-6 text-center z-20">Degen Street Cred, $DCRED, is our governance token that will give degens the power to influence decisions and decide how the ecosystem should further develop.</span>
                <span className="text-xs lg:text-sm z-20">
                  <p className="mt-4 lg:pt-8 z-20 font-wraith">Coming Soon</p>
                {/*  <p className="mt-2 z-20">CLAIMABLE AMOUNT: 10</p>*/}
                {/*  <p className="mt-2 z-20">CURRENT STASH: 450</p>*/}
                {/*  <p className="mt-2 z-20">WALLET: 0xb5aG...H7B6</p>*/}
                </span>
              {/*  <p className="mt-4 md:pt-6 font-wraith">*/}
              {/*    <ImxClaimButton />*/}
              {/*  </p>*/}
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default AnimatedDcredHero;
