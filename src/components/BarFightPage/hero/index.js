import React, { useState } from "react";
import Fade from "react-reveal/Fade";

import Navbar from "../../common/navbar";
function Index() {
  const [menu, setmenu] = useState(false);

  return (
    <div
      style={{ backgroundImage: `url(images/first.png)` }}
      className="xl:bg-cover bg-center pb-10 md:pb-20 md:h-full w-full "
    >
      <Fade bottom>
        <div className="mx-auto container relative z-10 px-4 xl:px-0">
          <Navbar menu={menu} setmenu={setmenu} />
          <div className="flex flex-col justify-center items-center pt-14  w-full h-full">
            <div className="w-full md:w-10/12 lg:w-9/12 xl:w-2/3">
              <div className="flex flex-col justify-center items-center">
                <img
                  className="w-8/12"
                  src="images/BARFIGHTS-TrasparentBKG.png"
                  alt="main"
                />
                <p className="text-white text-2xl md:text-28 py-8  text-center ">
                  The First Virtual Fight Club for Web 3.0
                </p>
                <p className="text-white text-xl f-f-r text-center ">
                  "When you can earn more in a virtual bar fight with a degen
                  dead frog than you can in your day job you should probably get
                  involved."
                </p>
                <br />
                <p className="text-white text-xl f-f-r text-center ">
                The first rule of fight club is to tell everyone you know about fight club.

                </p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Index;
