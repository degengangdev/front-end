import React from "react";
import Button from "../common/button";
import Fade from "react-reveal/Fade";
function Index() {
  return (
    <Fade bottom>
      <div
        style={{ backgroundImage: `url(images/fourth.png)` }}
        className="bg-cover bg-center h-full w-full py-24 md:py-32 lg:py-40 xl:py-60 z-10"
      >
        <div className="flex flex-col items-center justify-center mx-auto container px-4 xl:px-0">
          <p className="text-magenta text-xl md:text-3xl lg:text-4xl xl:text-41 pb-16">
            JOIN THE DISCORD{" "}
          </p>
          <a href="http://discord.gg/VyxVr4byxH" target="__blank">
            <Button title="DISCORD" />
          </a>
        </div>
      </div>
    </Fade>
  );
}

export default Index;
