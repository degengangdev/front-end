import React from "react";
import Hero from "../components/hero/index";
import Features from "../components/features";
import MemberShip from "../components/membership";
import DegenBar from "../components/degenBar";
import Faqs from "../components/faqs";
import Join from "../components/join";
import Footer from "../components/footer";
import Roadmap from "../components/roadmap";
import BarFight from "../components/barFight";

export default function Degen() {
  return (
    <>
      <Hero />
      <Features />
      <MemberShip />
      <Roadmap />
      <DegenBar />
      <BarFight />
      <Faqs />
      <Join />
      <Footer />
    </>
  );
}
