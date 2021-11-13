import React, { useState } from 'react';
import Button from "../common/button";
import Fade from "react-reveal/Fade";

export default function ClaimPageLitePaper() {
    const [menu, setmenu] = useState(false);
    return (
        <Fade bottom>
            <div
                style={{ backgroundImage: `url(images/ClaimPageLitepaperBackground.png)` }}
                className="bg-cover bg-center h-full w-full py-24 md:py-32 lg:py-40 xl:py-60 z-10"
            >
                <div className="flex flex-col items-center justify-center mx-auto container px-4 xl:px-0">
                    <p className="text-white text-xl md:text-3xl lg:text-4xl xl:text-41">
                        DEGEN GANG
                    </p>
                    <p className="text-white text-xl md:text-3xl lg:text-4xl xl:text-41 pb-16">
                        LITEPAPER
                    </p>
                        <a href="documents/Degen-Gang-Litepaper[27973].pdf" target="__blank">
                        <Button title="Litepaper" />
                    </a>
                </div>
            </div>
        </Fade>
  );
}
