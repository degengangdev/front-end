import React, { useState } from "react";
import Games from "../components/BarFightPage/games";
import PixelDegen from "../components/pixelDegen";
import DegenDollas from "../components/degenDollas";
import AnimatedBarFightHero from "../components/BarFightPage/hero/animatedBarFightHero";
import Join from "../components/join";
import Footer from "../components/footer";
import Navbar from "../components/common/navbar";

export default function BarFight() {
    const [menu, setmenu] = useState(false);

  return (
      <>
      <Navbar menu={menu} setmenu={setmenu} />
      <AnimatedBarFightHero />
      <Games />
      <PixelDegen />
      <DegenDollas />
      <Join />
      <Footer />
    </>
  );
}
