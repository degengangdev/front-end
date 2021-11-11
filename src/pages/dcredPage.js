import React, { useRef, useState, useEffect } from "react";
import Join from "../components/join";
import Footer from "../components/footer";
import Navbar from "../components/common/navbar";
import HeroDcred from "../components/heroDcred";
import HeroStreetCred from "../components/heroStreetCred";
import HeroUsingDCred from "../components/heroUsingDecred";

export default function DcredPage() {
    const [menu, setmenu] = useState(false);
    return (
        <>
            <HeroDcred />
            <HeroStreetCred />
            <HeroUsingDCred />
            <Join />
            <Footer />
        </>
    );
}
