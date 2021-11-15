import React from "react";
import ClaimPageHero from "../components/claimPage/claimPageHero";
import ClaimPageLitePaper from "../components/claimPage/claimPageLitePaper";
import Join from "../components/join";
import Footer from "../components/footer";

export default function ClaimPage() {
  return (
    <>
      <ClaimPageHero />
      <ClaimPageLitePaper />
      <Join />
      <Footer />
    </>
  );
}
