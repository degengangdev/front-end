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
      <div className="xl:bg-cover bg-center h-62rem md:pb-20 md:h-full w-full xl:pb-64" style={{ backgroundImage: `url(images/DegenGangHomeTop.png)` }}>
        <div className="mx-auto container relative z-10 px-4 xl:px-0">
          <Navbar menu={menu} setmenu={setmenu} />
                  <div className="flex flex-col items-center justify-center mx-auto container p-1 pb-8 text-white f-f-r pl-8 max-w-screen-sm md:pt-28 xl:pt-64 md:pb-40">
                      <img className="" src="images/DegenLargePinkLogo.png" alt="img" /><br />
                      <p className="pt-12 text-center">The biggest bunch of degenerates on the blockchain. 7,000 strong and ready to take over.</p>
                      <a className="mt-12 mb-12" href="http://discord.gg/VyxVr4byxH" target="__blank">
                          <Button title="LFG" />
                      </a>

          </div>
        </div>
    </div>
  );
}

export default Index;
