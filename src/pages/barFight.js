import React from "react";
import Hero from "../components/BarFightPage/hero";
import Games from "../components/BarFightPage/games";
import PixelDegen from "../components/pixelDegen";
import DegenDollas from "../components/degenDollas";
import Join from "../components/join";
import Footer from "../components/footer";

function barFight() {
  return (
    <>
      <Hero />
      <Games />
      <PixelDegen />
      <DegenDollas />
      <Join />
      <Footer />
    </>
  );
}

export default barFight;
