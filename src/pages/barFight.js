import React from "react";
import Hero from "../components/BarFightPage/hero";
import Games from "../components/BarFightPage/games";
import Join from "../components/join";
import Footer from "../components/footer";

function barFight() {
  return (
    <>
      <Hero />
      <Games />
      <Join />
      <Footer />
    </>
  );
}

export default barFight;
