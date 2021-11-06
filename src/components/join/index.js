import React from "react";
import Button from "../common/button";
import Fade from "react-reveal/Fade";
function Index() {
  return (
    <Fade bottom>
      <div
        style={{ backgroundImage: `url(images/jointhedegengang.png)` }}
        className="bg-cover bg-center h-full w-full py-24 md:py-32 lg:py-40 xl:py-60 z-10"
      >
        <div className="flex flex-col items-center justify-center mx-auto container ">
                  <p className="text-white text-2xl pb-16">
              Join the gang
          </p>
                  <p className="text-white font-rob">
            So you want to join the gang?
          </p>
          <p className="text-white pb-16 font-rob">
                      We don{"'"}t blame you. Come drop by in our discord and say hi.{" "}
          </p>
          <a href="http://discord.gg/VyxVr4byxH" target="__blank">
            <Button title="Discord" />
          </a>
        </div>
      </div>
    </Fade>
  );
}

export default Index;
