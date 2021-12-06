import React, { useRef, useState, useEffect } from "react";
import Join from "../components/join";
import Footer from "../components/footer";
import Navbar from "../components/common/navbar";
import HeroStreetCred from "../components/heroStreetCred";
import HeroUsingDCred from "../components/heroUsingDcred";
import AnimatedDcredHero from "../components/heroDcred/animatedDcredHero";

export default function DcredPage() {
    const [menu, setmenu] = useState(false);
    return (
        <>
          <Navbar menu={menu} setmenu={setmenu} />
          <AnimatedDcredHero />
          <HeroStreetCred />
          <HeroUsingDCred />
          <Join />
          <Footer />
        </>
    );
}
