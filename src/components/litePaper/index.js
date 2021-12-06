import React from "react";
import Fade from "react-reveal/Fade";
import Button from "../common/button";

function Index() {
  return (
    <div
      id="litePaper"
      style={{ backgroundImage: `url(images/LitePaperBackground.png)` }}
      className="bg-cover bg-center h-full w-full py-16 md:py-24 xl:py-32 litepapersection"
    >
      <div className="flex flex-col items-center justify-center mx-auto container p-1 pb-8 text-white f-f-r">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pl-0 md:pl-8 max-w-screen-lg ">
          <div className="px-4 flex flex-col items-center md:items-baseline text-center md:text-left justify-center md:justify-left mx-auto ">
            <img
              className="lg:w-2/5 lg:pr-5 xl:w-4/5 xl:pr-10"
              src="/images/logo.png"
              alt=""
            />
            <p className="text-white mt-8">
              Degen Gang is a sold out collection of 7,000 programmatically generated based degens.
            </p>
            <p className="text-white mt-8">
              The Degen Gang ecosystem is made up of; Pixel Degens (Immutable X), Play-to-Earn game BAR FIGHTs, the Degen Bar metaverse on NetVRk, a new governance token {"'Degen Street Cred $DCRED'"} and much more.
            </p>
            <div className="flex flex-col items-left justify-left">
              <p className="mt-8 sm:mb-16">
                <a href="documents/Degen-Gang-Litepaper[27973].pdf" target="__blank">
                  <Button title="Litepaper" />
                </a>
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center px-4">
            <img
              className="w-267px md:w-336px lg:pr-5  xl:pr-10 pb-24"
              src="/images/degens-rotate.gif"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
