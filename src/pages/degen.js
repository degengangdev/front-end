import React, { useState } from "react";
import MyPixelDegens from "../components/myInventory/myPixelDegens";
import Features from "../components/features";
import Join from "../components/join";
import Footer from "../components/footer";
import SoldOut from "../components/soldOut";
import DegenTypes from "../components/degenTypes";
import LitePaper from "../components/litePaper";
import RoadMap from "../components/roadmap";
import Navbar from "../components/common/navbar";
import AnimatedHero from "../components/hero/animatedHero"

export default function Degen() {
    const [menu, setmenu] = useState(false);

  return (
      <>
      <Navbar menu={menu} setmenu={setmenu} />
      <MyPixelDegens />
    </>
  );
}
