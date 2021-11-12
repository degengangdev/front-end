import React, { useState } from "react";
import Hero from "../components/BarFightPage/hero";
import Games from "../components/BarFightPage/games";
import PixelDegen from "../components/pixelDegen";
import DegenDollas from "../components/degenDollas";
import Join from "../components/join";
import Footer from "../components/footer";
import Navbar from "../components/common/navbar";

export default function BarFight() {
    const [menu, setmenu] = useState(false);

  return (
      <>
      <Navbar menu={menu} setmenu={setmenu} />
      <Hero />
      <Games />
      <PixelDegen />
      <DegenDollas />
      <Join />
      <Footer />
    </>
  );
}
