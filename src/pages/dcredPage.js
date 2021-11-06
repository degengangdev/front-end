import React, { useRef, useState, useEffect } from "react";
import Join from "../components/join";
import Footer from "../components/footer";
import Navbar from "../components/common/navbar";
import HeroDcred from "../components/heroDcred";

export default function DcredPage() {
    const [menu, setmenu] = useState(false);
    return (
        <>
            <Navbar menu={menu} setmenu={setmenu} />
            <HeroDcred />
            <Join />
            <Footer />
        </>
    );
}
