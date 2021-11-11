import React from "react";
import Hero from "../components/hero/index";
import Features from "../components/features";
import Join from "../components/join";
import Footer from "../components/footer";
import SoldOut from "../components/soldOut";
import DegenTypes from "../components/degenTypes";
import LitePaper from "../components/litePaper";
import RoadMap from "../components/roadmap";

export default function Degen() {
  return (
    <>
      <Hero />
      <SoldOut />
      <LitePaper />
      <DegenTypes />
      <RoadMap />
      <Features />
      <Join />
      <Footer />
    </>
  );
}
