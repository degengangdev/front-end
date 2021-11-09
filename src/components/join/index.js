import React from "react";
import Button from "../common/button";
import Fade from "react-reveal/Fade";
function Index() {
  return (
      <div
        style={{ backgroundImage: `url(images/jointhedegengang.png)` }}
        className="bg-cover bg-center h-full w-full py-24 md:py-32 lg:py-20 xl:py-40 z-10"
      >
        <div className="flex flex-col items-center justify-center mx-auto container pl-8 pr-2">
                  <p className="text-white text-2xl pb-16 font-wraith">
              Join the gang
          </p>
                  <p className="text-white f-f-r">
            So you want to join the gang?
          </p>
          <p className="text-white pb-16 f-f-r">
                      We don{"'"}t blame you. Come drop by in our discord and say hi.{" "}
          </p>
          <a href="http://discord.gg/VyxVr4byxH" target="__blank">
            <Button title="Discord" />
          </a>
        </div>
      </div>
  );
}

export default Index;
