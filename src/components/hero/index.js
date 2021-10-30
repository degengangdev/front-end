import React, { useRef, useState, useEffect } from "react";
import Button from "../common/button";
import Slider from "react-slick";
import Fade from "react-reveal/Fade";
import Navbar from "../common/navbar/index";
import useTotalSupply from "../../hooks/useTotalSupply";
function Index() {
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
    <div
      style={{ backgroundImage: `url(images/first.png)` }}
      className="xl:bg-cover bg-center h-62rem md:pb-20 md:h-full w-full xl:pb-64"
    >
      <Fade bottom>
        <div className="mx-auto container relative z-10 px-4 xl:px-0">
          <Navbar menu={menu} setmenu={setmenu} />
          <div className="xl:flex items-center pt-14 xl:pt-246px justify-center w-full h-full">
            <div className="lg:flex-row flex flex-col  xl:w-11/12 md:space-x-10 lg:space-x-14 xl:space-x-20">
              <div className="lg:w-1/2">
                <p className="text-white text-3xl md:text-4xl  2xl:text-54 text-center lg:text-left">
                  Welcome to THE DEGEN GANG
                </p>
                <br />
                <p className="pt-4 text-white text-2xl f-f-r text-center lg:text-left">
                  {totalSupply >= 7000 ?
                      "We're officially sold out."
                      : "MINTING IS LIVE"}
                </p>
                {poolActive && (
                  <div className="pt-6">
                    <p className="text-white text-2xl f-f-r text-center lg:text-left uppercase">
                      REVEAL DATE: 23RD SEPT - 5pm utc
                    </p>
                    <div className="flex items-center justify-center lg:justify-start space-x-3  md:space-x-10 xl:space-x-12 pt-3">
                      <div className="flex flex-col items-center justify-center uppercase text-white f-f-r">
                        <p className="text-xl md:text-3xl lg:text-5xl font-semibold">
                          {days}
                        </p>
                        <p className="text-sm md:text-lg">Days</p>
                      </div>
                      <div className="flex flex-col items-center justify-center uppercase text-white f-f-r">
                        <p className="text-xl md:text-3xl lg:text-5xl font-semibold">
                          {hours}
                        </p>
                        <p className="text-sm md:text-lg">hours</p>
                      </div>
                      <div className="flex flex-col items-center justify-center uppercase text-white f-f-r">
                        <p className="text-xl md:text-3xl lg:text-5xl font-semibold">
                          {minutes}
                        </p>
                        <p className="text-sm md:text-lg">minutes</p>
                      </div>
                      <div className="flex flex-col items-center justify-center uppercase text-white f-f-r">
                        <p className="text-xl md:text-3xl lg:text-5xl font-semibold">
                          {seconds}
                        </p>
                        <p className="text-sm md:text-lg">seconds</p>
                      </div>
                    </div>
                  </div>
                )}
                <p className="pt-6 pb-4 text-white f-f-r text-center lg:text-left">
                  7,000 Unique DEGEN GANG Member NFTs are programmatically
                  generated from a random combination of more than 180 traits.
                  DEGEN GANG Member NFTs live on the Ethereum Blockchain in the
                  form of ERC-721 tokens.
                </p>
                <div className="flex items-center justify-center lg:justify-start space-x-12">
                  <a href="https://opensea.io/collection/degengang" target="__blank">
                    <Button title="BUY ON OPENSEA" />
                  </a>
                  <a href="http://discord.gg/VyxVr4byxH" target="__blank">
                    {" "}
                    <Button title="JOIN US" />
                  </a>
                </div>
              </div>
              <div className="lg:w-1/2 flex flex-col items-center mt-12 lg:mt-0">
                <Slider
                  className="w-9/12 sm:w-8/12 md:w-1/2 2xl:w-7/12"
                  ref={sliderRef}
                  {...settings}
                >
                  <img src="images/slider/1-min.jpg" alt="img" />
                  <img src="images/slider/2-min.jpg" alt="img" />
                  <img src="images/slider/3-min.jpg" alt="img" />
                  <img src="images/slider/4-min.jpg" alt="img" />
                  <img src="images/slider/5-min.jpg" alt="img" />
                  <img src="images/slider/6-min.jpg" alt="img" />
                </Slider>
                <div className="flex items-center space-x-3 ">
                  <button onClick={() => gotoPrev()}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-chevron-left text-white mt-1 focus-within:outline-none"
                      width={26}
                      height={47}
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      stroke="#fff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <polyline points="15 6 9 12 15 18" />
                    </svg>
                  </button>
                  <p className="text-xs md:text-lg text-white">
                    DEGEN GANG COLLECTION
                  </p>
                  <button onClick={() => gotoNext()}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-chevron-right text-white mt-1 focus-within:outline-none"
                      width={26}
                      height={47}
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      stroke="#fff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <polyline points="9 6 15 12 9 18" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Index;
