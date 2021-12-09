import React, { useState, useContext } from "react";
import MyPixelDegens from "../components/myInventory/myPixelDegens";
import WalletContext from "../components/context/walletContext";
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
  const walletDetails = useContext(WalletContext);

  return (
    <>
      <Navbar menu={menu} setmenu={setmenu} />
      <h1 className="text-white pt-48">{"Wallet Id:" + walletDetails.walletId}</h1>
      <MyPixelDegens />
    </>
  );
}
