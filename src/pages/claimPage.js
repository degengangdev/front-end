import React from "react";
import ClaimPageHero from "../components/claimPage/claimPageHero";
import ClaimPageLitePaper from "../components/claimPage/claimPageLitePaper";
import UnsoldDegens from "../components/claimPage/unsoldDegens";
import Join from "../components/join";
import Footer from "../components/footer";
import TestWalletContext from "../components/claimPage/testWalletContext";

export default function ClaimPage() {
  return (
    <>
      <TestWalletContext />
      <ClaimPageHero />
      <ClaimPageLitePaper />
      <Join />
      <Footer />
    </>
  );
}
