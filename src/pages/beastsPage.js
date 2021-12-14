import React, { useRef, useState, useEffect } from "react";
import Navbar from "../components/common/navbar";
import TestWalletContext from "../components/claimPage/testWalletContext";


export default function BeastsPage() {
  const [menu, setmenu] = useState(false);

    return (
        <>
        <Navbar menu={menu} setmenu={setmenu} />
        <h1 className="text-white pt-24">Beasts Page</h1>
        <TestWalletContext />
        </>
    );
}
